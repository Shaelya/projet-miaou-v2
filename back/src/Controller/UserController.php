<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\NameType;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;


class UserController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //    $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $form = $this->createForm(UserType::class);

        // handleRequest permet de relier les informations de la requête avec le formulaire
        // Il prérempli les champs, ce qui permet de renvoyer le formulaire à la vue avec les données préremplies dedans en cas d'erreur
        // Il crée également un objet de la classe User, relié à notre formulaire UserType
        $form->handleRequest($request);

        // Lorsque la requête est traitée par le formulaire, on teste si le formulaire a bien été envoyé et s'il est valide
        if ($form->isSubmitted() && $form->isValid()) {
            // Si tout est bon, on a bien reçu un email et un password, on peut donc ajouter l'utilisateur
            $user = $form->getData();
            // On ajout le ROLE_USER à notre utilisateur, comme ça il y est par défaut
            $user->setRoles(['ROLE_USER']);

            // On doit encoder le mot de passe avant d'enregistrer l'utilisateur
            // on peut le récupérer car $user a récupéré toutes les infos de la requête grace à getData()
            $plainPassword = $user->getPassword();
            // ici on encode le password
            $encodedPassword = $encoder->encodePassword($user, $plainPassword);
            // puis on redéfinit le password avec la méthode setPassword
            $user->setPassword($encodedPassword);

            // On utilise l'entity manager pour persister et enregistrer notre objet
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            // Puisque tout a fonctionné, on renvoie l'utilisateur sur la page de connexion
            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/register.html.twig', [
            'registerForm' => $form->createView()
        ]);
    }
}
