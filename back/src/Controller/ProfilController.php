<?php

namespace App\Controller;

use App\Entity\Advert;
use App\Entity\Comment;
use App\Entity\User;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ProfilController extends AbstractController
{
    // /**
    //  * @Route("/profil", name="profil")
    //  */
    // public function index()
    // {
    //     return $this->render('profil/index.html.twig', [
    //         'controller_name' => 'ProfilController',
    //     ]);
    // }

    /**
     * @Route("/api/profil/user", name="profil")
     */
    public function profilUserApi()
    {
        $infosUsers = $this->getDoctrine()->getRepository(User::class)->findAll(); // on récupere les données de l'entité User, on recupere les coordonnées des utilisateurs, leurs annonces , et leurs commentaires


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));  // on prepare la methode de serialize         
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $data = $serializer->normalize($infosUsers, null, ['groups' => 'apiProfils']); // on indique qu'on va renvoyer les données en json qui auront l'annotion du goupe api/profil
        
        return $this->json($data);
    }

    /**
     * @Route("/api/profil/comment", name="comment")
     */
    public function profilCommentApi()
    {
        $infosComments = $this->getDoctrine()->getRepository(Comment::class)->findAll(); // on récupere les données de l'entité Comment, on recupere les commentaires que l'utilisateur a laissé sur les annonces ainsi que les renseignements vers les fiches liées


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));  // on prepare la methode de serialize         
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $data = $serializer->normalize($infosComments, null, ['groups' => 'apiComments']); // on indique qu'on va renvoyer les données en json qui auront l'annotion du goupe api/profil/comment
        
        return $this->json($data);
    }

    /**
     * @Route("/api/profil/advert", name="profil_advert")
     */
    public function profilAdvertApi()
    {
        $infosAdverts = $this->getDoctrine()->getRepository(Advert::class)->findAll(); // on récupere les données de l'entité Advert, on recupere les fiches alertes que l'utilisateur a déposé sur le site ainsi que les liens vers les commentaires


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));  // on prepare la methode de serialize         
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $data = $serializer->normalize($infosAdverts, null, ['groups' => 'apiAdverts']); // on indique qu'on va renvoyer les données en json qui auront l'annotion du goupe api/profil/advert
        
        return $this->json($data);
    }
}
