<?php

namespace App\Controller;
//ce sont mes entites que je vais chercher dans le use
use App\Entity\Advert;
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


class AdvertController extends AbstractController
{
    //je peux creer la fiche alerte => jai le new
    /**
     * @Route("/advert/new", name="advert_new" )
     */
    //ici on met la route /nex car il sagit dune creation on le mettrapas pr delete et update
    public function Advert(Request $request, FileUploadManager $fileUploadManager)
    {
        //pour pusher $advert il me fallait l"instancier
        $advert = new Advert();
        
        //creer un nouveau formulaire dans le controller que je vais envoyer a ma view /twig
        $form = $this->createForm(AdvertType::class, $advert);

        $longitude = $request->query->get('lng') ;
        $latitude = $request->query->get('lat') ;

        // Je récupére mes données
        $form->handleRequest($request);

        // Je vérifie mes données
        if ($form->isSubmitted() && $form->isValid()) {
//ici on recupere la valeur en post sinon ca serait query si cetait en get!!  $longitude = $request->query->get('longitude') ;

            
            // dump($longitude);
            // $longitude = $request->request->get('lng') ;
            // $latitude = $request->request->get('lat') ;

            $advert = $form->getData();
            //pour que le user puisse poster une alerte qd il est connecté uniquement 
            if($this->getUser() != null){
                $user = $this->getUser();
            }

            $advert->setUser($user);
            //ici on attribue la valeur de la long et lat!!
            $advert->setLatitude($latitude) ;
            $advert->setLongitude($longitude) ;

            $em = $this->getDoctrine()->getManager();
            $em->persist($advert);
            $em->flush();


            $imagePath = $fileUploadManager->upload($form['picture'], $advert->getId());
    
            $advert->setPicture($imagePath);
            //je persit et je flush 
            //$em = $this->getDoctrine()->getManager();
            //$em->persist($advert);
            $em->flush();

            return $this->redirectToRoute('index');
        }
        return $this->render('advert/index.html.twig', [
             'form' => $form->createView()
       ]);
      }
    /**
     * @Route("/advert/delete", name="advert_delete")
     */
    public function delete(Request $request)
    { //en faisant un request get géré par le front, je vais recupere l'id que le front me renvoie de la fiche alerte
        $advertId = $request->request->get('id');
    //je vais ensuite recuperer mon annonce en faisant  
        $advert = $this->getDoctrine()->getRepository(Advert::class)->find($advertId);        
    
        // ensuite je fais le traitement de suppression pr supprimer l'annonce dans la bdd
        $em = $this->getDoctrine()->getManager();
        $em->remove($advert);
        $em->flush();
        //voir ou je le renvoie !!!
        return $this->redirectToRoute('index');
    }
//exemple 
    //|champ titre|
    //|champ description|
    //titre et description à envoyer au back

    //pour récupurer l'info:
    //$titre = $request->request->get('titre provenant du front');

    /**
      * @Route("/update/{id}/advert", name="advert_updated")    
     */
   //page d'accueil => quon pourra modifier notre fiche alert
   //Advert => cest ma class
   //ici je me sers du param converteur=> dans la methode je lui met juste le param qui lui correspond et ca se fait tt seul// request est un objet (qui me fournit des methodes deja codé par symphony) et Advert cest une classe (dans lequel jai des getter setter id...)
     public function updateAdvert(Request $request, Advert $advert): Response
    {
        //recuperer l'id qui indique ce que le front m'envoie
        //$advertId = $request->request->get('id');
        //$advert = $this->getDoctrine()->getRepository(Advert::class)->find($advertId);


        //on cree un formulaire:: effectivement, pour la mise a jour je dois avoir un formulaire pré-rempli avec l'id de la fiche
        $form = $this->createForm(AdvertType::class, $advert);
        //on va appeler la requete: ici on recupere les donnees du formulaire
        $form->handleRequest($request);
        //si soumission  et validation:
        if ($form->isSubmitted() && $form->isValid()) {
            //on va traiter la requete
            $em = $this->getDoctrine()->getManager();
            $em->persist($advert);
            $em->flush();
            //je ne sais pas ou rediriger donc on verra
            return $this->redirectToRoute('index'); 
        }
        return $this->render('advert/update.html.twig', [
            'formAdvert' => $form->createView()
        ]); 
    }

    /**
     * @Route("/list/advert", name="list_advert")
     */
    public function advertList()
    {
        //tu vas recup toutes tes fiches alertes que tu as dans ta bdd
        $adverts = $this->getDoctrine()->getRepository(Advert::class)->findAll();
        // react va faire une requete sur ma route list/advert et moi je vais leur retourner l'id/ la description... et eux vont recuperer ce que je leur donne au format json et ils feront l'affichage
        header('Access-Control-Allow-Origin: *'); 
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
        // pr le renvoyer au format json ; tu fais un tableau que tu initialise a vide
        $formatted = [];
        //$adverts : jai recup toutes mes annonces et je vais devoir boucler sur toutes mes annonces et pr avoir une annonce jai $advert
        foreach ($adverts as $advert) 
        { //et ici je rempli le tableau avec les donnees dont jai besoin
            $formatted [] = [
               'id' => $advert->getId(),
               'name' => $advert->getName(),
               'description' => $advert->getDescription(),
               'age' => $advert->getAge(),
               'sex' => $advert->getSex(),
               'type' => $advert->getType(),
               'status' => $advert->getStatus(),
               'user' => $advert->getUser()->getLastName(),
            ];

           // 1er tour de boucle : [advert1]
           //2eme tour de boucle : [advert1, advert2]
           //et ca va mafficher la liste de mes annonces
        }
        return new JsonResponse($formatted);
    }

    /**
     * @Route("/single/advert", name="single_advert")
     */
    public function advertSingle(Request $request)//ici je vais utiliser la request donc faut mettre ca!!il est bleu ici juste parce que c un parametre
    {
        //dabord jobtiens l'id (annonce seule ) je leur renvoie les donnes dont ils ont besoin
        //puis react me renvoie l'id concerné et du coup le back le lis=> pour lire je fais la formule ci dessous
        $id = $request->request->get('id');
        //tu vas recup une seule fiche alerte que tu as dans ta bdd et son id sera recuperer par react lors de la requete axios
        $single = $this->getDoctrine()->getRepository(Advert::class)->find($id);
        // eux vont faire une requete sur ma route single/advert et moi je vais leur retourner l'id/ la description... et eux vont recuperer ce que je leur donne au format json et ils feront l'affichage
        header('Access-Control-Allow-Origin: *'); //l'etoile *=> acces a tous; tous ceux qui veulent utiliser mon api ils le peuvent
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); //les methodes ou ils peuvent faire appel a mon api
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
        // pr le renvoyer au format json ; tu fais un tableau que tu initialise a vide
        $formatted = [];
        //et ici je rempli le tableau avec les donnees dont jai besoin
            $formatted [] = [
               'id' => $single->getId(),
               'name' => $single->getName(),
               'description' => $single->getDescription(),
               'age' => $single->getAge(),
               'sex' => $single->getSex(),
               'type' => $single->getType(),
               'status' => $single->getStatus(),
               'user' => $single->getUser()->getLastName(),
            ];

           //et ca va mafficher la liste de mes annonces comme ci dessus
        
        return new JsonResponse($formatted); //on pourrait aussi faire ca $this->json($formatted)
    }

}

//ici j'ai toutes mes fonctions advert
//CRUD : create, read (liste des alertes, une seule alerte), update, delete