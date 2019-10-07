<?php

namespace App\Controller\Api;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserController extends AbstractController
{
    /**
     * @Route("/api/user/isConnected", name="api_user_isConnected")
     */
    public function userConnect()
    {
        if($this->getUser() != null) {
            header('Access-Control-Allow-Origin: *'); 
            header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
            header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
            $formatted = [];
            
            $formatted [] = [
            'userConnected' => true,
            ];
        }
        else {
            header('Access-Control-Allow-Origin: *'); 
            header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
            header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
            $formatted = [];
            
            $formatted [] = [
            'userConnected' => false,
            ];
        }

        return new JsonResponse($formatted);
    }
}
