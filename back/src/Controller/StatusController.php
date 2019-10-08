<?php

namespace App\Controller;

use App\Entity\Advert;
use App\Entity\Comment;
use App\Entity\Status;
use App\Entity\Type;
use App\Entity\User;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class StatusController extends AbstractController
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

        $advert = $this->getDoctrine()->getRepository(Advert::class)->findAll();


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));           
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $data = $serializer->normalize($advert, null, ['groups' => 'apiStatus']);
        
        return $this->json($data);
    }





}
