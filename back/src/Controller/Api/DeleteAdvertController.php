<?php

namespace App\Controller\Api;

use App\Entity\Advert;
use App\Entity\Comment;
use App\Entity\User;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class DeleteAdvertController extends AbstractController
{
    /**
     * @Route("/api/delete/advert", name="api_delete_advert")
     */
    public function index(Request $request)
    {
        // les 3 lignes suivantes permettent de communiquer avec l'Api
        header('Access-Control-Allow-Origin: *'); 
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        // permet de récupérer les données data envoyée dans l'API
        $data = $request->getContent();

        // cette métode trouvée sur https://medium.com/@peter.lafferty/converting-a-json-post-in-symfony-13a24c98fc0e
        $data = json_decode($request->getContent(), true);

        // on va récupérer dans le data l'id 
         $id = $data['id'];

        // je récupère toutes les données de class Advert et on trouve l'id de l'advert
        $advert = $this->getDoctrine()->getRepository(Advert::class)->find($id);

        // ensuite je fais le traitement de suppression pr supprimer l'annonce dans la bdd
        $em = $this->getDoctrine()->getManager();
        $em->remove($advert);
        $em->flush();

        
        // voir ou je le renvoie !!!
        return $this->redirectToRoute('index');
    }
}
