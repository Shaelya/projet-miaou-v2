<?php

namespace App\Controller\Api;

use App\Entity\Advert;
use App\Entity\Comment;
use App\Controller\User;
use App\Form\AdvertType;
use Symfony\Flex\Response;
use App\Service\FileUploadManager;
use App\Controller\AdvertController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Form\Extension\Core\Type\SubmitTYpe;
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
     * @Route("/api/comment/new", name="comment_new" )
     */
    public function Comment(Request $request)
    {
        header('Access-Control-Allow-Origin: *'); 
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        $data = $request->getContent();
        $comment = $this->get('serializer')->deserialize($data, 'AppBundle\Entity\Comment', 'json');

        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();

        return new Response('commentaire envoyé', Response::HTTP_CREATED);

    }
}