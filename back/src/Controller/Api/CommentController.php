<?php

namespace App\Controller\Api;

use App\Entity\Advert;
use App\Entity\Comment;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommentController extends AbstractController
{
    // /**
    //  * @Route("/api/comment", name="api_comment")
    //  */
    // public function index()
    // {
    //     return $this->render('api/comment/index.html.twig', [
    //         'controller_name' => 'CommentController',
    //     ]);
    // }


    /**
     * @Route("/api/comment/new", name="comment_new")
     */
    public function Comment(Request $request)
    {
        // permet d'acceder aux differentes methodes
        header('Access-Control-Allow-Origin: *'); 
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        // on va chercher les données de l'utilisateur
        $user = $this->getUser();
        // on récupère le contenu data de l'API POST 
        $data = $request->getContent();

        // cette métode trouvée sur https://medium.com/@peter.lafferty/converting-a-json-post-in-symfony-13a24c98fc0e
        $data = json_decode($request->getContent(), true);

        // on replace dans des variables le data qui permettent de renvoyer du texte
         $title = $data['title'];
         $text = $data['text'];
         $advertId = $data['advertId'];

        // on crée un nouveau commentaire 
        $comment = new Comment();

        
        // on récupère les éléments qui composent la fiche alerte 
        $advert = $this->getDoctrine()->getRepository(Advert::class)->find($advertId);

        // on place le user dans le comment 
        $comment->setUser($user) ;

        // on place le advert dans commentaire
        $comment->setAdvert($advert);

        // on place le title dans advert
        $comment->setTitle($title);

        // on place le texte dans comment
        $comment->setText($text);

        //dump($comment);exit;

        // je balance la totale dans ma bdd 
        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();

        // on peut informer que le commentaire est bien envoyé !
        return new Response('commentaire envoyé', Response::HTTP_CREATED);

    }


}