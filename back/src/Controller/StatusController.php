<?php

namespace App\Controller;

use App\Entity\Status;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class StatusController extends AbstractController
{
    /**
     * @Route("/status", name="status")
     */
    public function index()
    {
        return $this->render('status/index.html.twig', [
            'controller_name' => 'StatusController',
        ]);
    }
    /**
     * @Route("/apiLost", name="apiLost")
     */
    public function statusLost()
    {

        $lost = $this->getDoctrine()->getRepository(Status::class)->findAll();


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));           
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);


        $data = $serializer->normalize($lost);
        
        return $this->json($data);
    }

    /**
     * @Route("/apiSeen", name="apiSeen")
     */
    public function statusSeen()
    {

        $seen = $this->getDoctrine()->getRepository(Status::class)->findAll();


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));           
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);


        $data = $serializer->normalize($seen);
        
        return $this->json($data);
    }

    /**
     * @Route("/apiFind", name="apiFind")
     */
    public function statusFind()
    {

        $find = $this->getDoctrine()->getRepository(Status::class)->findAll();


        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));           
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);


        $data = $serializer->normalize($find);
        
        return $this->json($data);
    }
}
