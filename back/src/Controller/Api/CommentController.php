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

        // on place le 
        $comment->setUser($user) ;
        $comment->setAdvert($advert);
        $comment->setTitle($title);
        $comment->setText($text);

        //dump($comment);exit;

        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();

        return new Response('commentaire envoyé', Response::HTTP_CREATED);
        
        // header('Access-Control-Allow-Origin: *'); 
        // header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
        // header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
        
        // //Récupèration du user connecté
        // $user = $this->getUser();
        // //Récupération de l'id du user connecté
        // $userId = $user->getId();

        // //Récupération des données envoyées du front : title,text, advert_id
        // //$title= $request->request->get('title');
        // //$text= $request->request->get('text');
        // //$advertId= $request->request->get('advertId');

        // $data = $request->request->get('data');

        // dump($data);exit;

        // $title = $data['title'];
        // $text = $data['text'];
        // $advertId = $data['avertId'];


        // //Pour le test debug
        // // $title = "test";
        // // $text = "coucou ceci est un test";
        // // $advertId = "13";

        // //On récupère l'avert à l'id correspondant
        // $advert = $this->getDoctrine()->getRepository(Advert::class)->find($advertId);

        // //On instancie l'entité Comment
        // $comment = new Comment ();

        // //On set les donné
        // $comment->setTitle($title);
        // $comment->setText($text);
        // $comment->setUser($user);
        // $comment->setAdvert($advert);


        // $entityManager = $this->getDoctrine()->getManager();
        // $entityManager->persist($comment);
        // $entityManager->flush();

        // return new Response ('success');
        
        // // $data = $request->getContent();
        // // $comment = $this->get('serializer')->deserialize($data, Comment::class, 'json');
        // // //$comment->setUser($user);
        // // $comment->setUser($user) ;
        // // //$comment->setAdvert($id);
        // // $em = $this->getDoctrine()->getManager();
        // // $em->persist($comment);
        // // $em->flush();
        // // return new Response('commentaire envoyé', Response::HTTP_CREATED);

    }
}