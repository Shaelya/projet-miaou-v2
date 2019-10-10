<?php

namespace App\Controller;

use App\Entity\Advert;
use App\Entity\Comment;
use App\Entity\User;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class StatusController extends AbstractController // au lieu de l'apeller status controlleur on aurait put l'appeller FicheAlertControlleur et on la pas rassembler avec notre AvertController car nous devions travailler surcette partie avec les api
{
    //**
    // * @Route("/status", name="status")
    // */
    //public function index()
    //{
    //    return $this->render('status/index.html.twig', [
    //        'controller_name' => 'StatusController',
    //    ]);
    //}

    /**
     * @Route("/api/status", name="apiStatus")
     */
    public function status() // API qui permet de récupérer une fiche alerte animal perdu/vu/trouvé ( nom + latitude +longitude + status + photo + type) ( url = /api/status )
    {

        $advert = $this->getDoctrine()->getRepository(Advert::class)->findAll(); // on récupere les données de l'entité advert, on recupere ttes les fiches alertes


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));  // on prepare la methode de serialize         
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $data = $serializer->normalize($advert, null, ['groups' => 'apiStatus']); // on indique qu'on va renvoyer les données en json qui auront l'annotion du goupe api/status
        
        return $this->json($data);
    }





}
