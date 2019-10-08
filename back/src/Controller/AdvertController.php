<?php

namespace App\Controller;
//ce sont mes entites que je vais chercher dans le use
use App\Entity\Advert;
use App\Form\AdvertType;
use Symfony\Flex\Response;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Form\Extension\Core\Type\SubmitTYpe;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdvertController extends AbstractController
{
    /**
     * @Route("/advert/new", name="advert_new")
     */
    public function Advert(Request $request)
    {
        //pour pusher $advert il me fallait l"instancier
        $advert = new Advert();
        
        //creer un nouveau formulaire dans le controller que je vais envoyer a ma view /twig
        $form = $this->createForm(AdvertType::class, $advert);

        // Je récupére mes données
        $form->handleRequest($request);

        // Je vérifie mes données
        if ($form->isSubmitted() && $form->isValid()) {

            $advert = $form->getData();
            //pour que le user puisse poster une alerte qd il est connecté uniquement 
            if($this->getUser() != null){
                $user = $this->getUser();
            }

            $advert->setUser($user);

            $em = $this->getDoctrine()->getManager();
            $em->persist($advert);
            $em->flush();
        }
        return $this->render('advert/index.html.twig', [
             'form' => $form->createView()
        ]);
     }



    
    }
