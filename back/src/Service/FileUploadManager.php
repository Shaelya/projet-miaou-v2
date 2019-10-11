<?php //https://github.com/O-clock-Titan/notes-Symfo-Fanny42/blob/master/S04/S04-E02.md
//voir security.yaml pr les roles (na rien avoir avec le FileUploadManager)
//Creer service FileUploadManager pour pouvoir faire 1 upload image
namespace App\Service;

use Symfony\Component\Form\Form;

class FileUploadManager
{
    //on declare une propriété qui va contenir le chemin ou va etre stockée mon image
        private $targetFolderPath;
    //on fait un constructeur pour definir les caractéristiques de ma variable $targetFolderPath 
        public function __construct(string $targetFolderPath)
        {      
            $this->targetFolderPath = $targetFolderPath;
        }
        // on crée une fonction upload avec des parametres  
        public function upload(Form $formFile, int $advertId)//: ?string
        {     //$formFile est un objet car il vient de la class form = variable qui représente un objet de la class form pr que ca puisse etre exploité dans mon code.
            //Form et $advertId= parametres
             //on va recuperer les champs de ma table picture cad les donnees de mon formulaire
            $file = $formFile->getData();
            //si il existe pas: je recupere la picture dans mon formulaire et je la deplace dans ma variable $targetFolderPath qui contient le chemin ou est stocké la picture

          
        if ($file != null) {
            //$pictureNameToStore = $file->getId() . '.' . $file->getClientOriginalExtension();
            $pictureNameToStore = $advertId . '.' . $file->getClientOriginalExtension();
            $advertFile = $file->move($this->targetFolderPath, $pictureNameToStore);

            return $advertFile->getPathname();
        } else {
            return null;
        }
        }//aller dans le .env par la suite, voir ci dessous:
        //PICTURE_TARGET_FOLDER_PATH=assets/advert/picture
        // on stocke le chemin ou sera stocke limage dans une constante!!
        //et ca permet de ne pas ecritre cette addresse en dure (cad reecrire lurl comme ca) dans le fichier .yaml (assets/advert/picture)!! ligne 37

        //on ira dans le services.yaml ligne 31 

        //apres on ira dans le Advertcontroller: et dedans  voici le detail +voir dans le controller directement
        //ou on importe la classe FileUploadManager $fileUploadManager
        //$advert->setLongitude($longitude);
        //$advert->setLatitude($latitude);$advert->setUser($user);
        //on va recuperer mes donnes de mon champ picture de mon formulaire  quon stocke dans la $imagePath
        //ensuite on fait $advert->setPicture pour recuperer mon image (le chemin de limage )        
        //je persist et je flush 
                           
}