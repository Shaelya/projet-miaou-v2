<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AccueilController extends AbstractController
{
     /**
     * @Route("/{reactRouting}", name="index", requirements={"reactRouting"="(.+)[^connexion][^inscription]"}, defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('accueil/index.html.twig', [
            'controller_name' => 'AccueilController',
        ]);
    }


}
