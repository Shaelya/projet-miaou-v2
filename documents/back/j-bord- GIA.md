


jeudi 10/10/2019

objectif: faire une url en back : pour que le back renvoie une url de l'image (avec formulaire fiche alerte) au front 

-1-Creer service FileUploadManager pour pouvoir faire 1 upload image

        lien=<?php //https://github.com/O-clock-Titan/notes-Symfo-Fanny42/blob/master/S04/S04-E02.md
        J'ai crée des roles dans security.yaml pr les roles 
        Puis j'ai crée un fichier FileUploadManager dans lequel je fais une class FileUploadManager et un use Symfony\Component\Form\Form et un namespace App\Service;

        J'ai declaré une propriété qui va contenir le chemin ou va etre stockée mon image
                private $targetFolderPath;
            //on fait un constructeur pour definir les caractéristiques de ma variable $targetFolderPath 
                public function __construct(string $targetFolderPath)
                {      
                    $this->targetFolderPath = $targetFolderPath;
                }
        J'ai crée une fonction upload avec des parametres  //$formFile est un objet car il vient de la class form = variable qui représente un objet de la class form pr que ca puisse etre exploité dans mon code.
                public function upload(Form $formFile, int $advertId)//: ?string

                {     
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
                }
Aller dans le .env par la suite, voir ci dessous:
                PICTURE_TARGET_FOLDER_PATH=assets/advert/picture
                =>on stocke le chemin ou sera stocke limage dans une constante!!
                =>et ca permet de ne pas ecritre cette addresse en dure (cad reecrire lurl comme ca) dans le fichier .yaml (assets/advert/picture)!! ligne 37

On ira dans le services.yaml ligne 31 :

                =>on met le namespace=> ou se trouve: App\Service\FileUploadManager:
                En arguments: 
                =>on stocke le chemin de la picture dans la variable $targetFolderPath 
                =>Il faudra modifier le .gitignore pour que le dossier ignoré corresponde au chemin précisé ici
                $targetFolderPath: '%env(resolve:PICTURE_TARGET_FOLDER_PATH)%'
Apres on ira dans le Advertcontroller: 
                =>'picture' => $request->getUri().'/images/ads/'.$single->getPicture(),
                =>ou on importe dans public function Advert, la classe FileUploadManager $fileUploadManager
                =>on va recuperer mes donnes de mon champ picture de mon formulaire  quon stocke dans la $imagePath
                //ensuite on fait $advert->setPicture pour recuperer mon image (le chemin de limage )        
                //je persist et je flush 
                                
        }





        //$advert->setLongitude($longitude);
        //$advert->setLatitude($latitude);$advert->setUser($user);

vendredi 11/10/2019
objectif: Je dois préparer une methode post pour permettre au front de récupérer une lattitude et une longitude via le front
-1- Dans un premier temps : dans la route /advert/new du  AdvertController on a mis une methods={{« POST »}}. A savoir que la méthode get se met par défaut, donc on l’a remplacer par une methode post. 

2- Ensuite , je mets mes input dans mon advert>indexhtml.twig :
{{ form_start(form) }}

{{form_row(form.picture)}}
<input type="hidden" id="longitude" name="longitude">
<input type="hidden" id="latitude" name="latitude">
{# selectionner les input puis remplir la 'value' par la valeur souhaiter (en front) 
tout sera receptionner coté back ici input caché car luser na pas besoin de voir quil a rempli la long et latt mais la valeur est bien prise #}
{{ form_end(form)}}


3- Après ça, je récupère la valeur en post ‘
Asavoir que si c’était en get on aurait mis query : 
$longitude = $request->query->get(‘longitude’) ;

            $longitude = $request->request->get('longitude') ;
            $latitude = $request->request->get('latitude') ;


