# JOURNAL DE BORD BACKEND

# **JOURNAL DE BORD DU GROUPE : MIA'où**


## **23/09/2019**

1. Le cahier des charges est rempli, le MVP (Minimal Viable Product) est décidé, nous allons partir dans un premier temps sur un système de Map . 

2. Le users-stories est définit en plusieurs parties d'utilisateurs (visiteurs et non inscrits) .

3. Les rôles ont été répartis . 

4. Nous avons mis en place un trello . https://trello.com/b/EgsmetsX

5. Nous avons commencé à réfléchir sur l'utilisation du map, à voir si nous allons utiliser google maps (propriétaire) ou leaflet(libre avec open street map par exemple) . 
https://leafletjs.com/ . L'équipe Front va faire une recherche concernant ces deux technologies et peser le pour et le contre . 

*notes* : Nous allons utiliser des API rest pour communiquer entre back et front . 


## **24/09/2019**

### 1. Users stories

Aujourd'hui nous avons corrigé nos user stories . Nous avons décidé de créer une entité `ANNONCE` regroupant plusieurs informations comme les épingles, le nom de l'annonce, fiche alerte ... (voir  users-stories.md ). 
ceci va nous permettre une meilleure liaison côté back . 

### 2. Mocodo

La réalisation du Mocodo a été éfféctuée et validée . 

```
PEUT COMMENTER, 0N UTILISATEUR, 11 COMMENTAIRE :   
COMMENTAIRE: contenu, date, statut (pour modération activer/désactiver)

UTILISATEUR :  nom, prenom, adresse mail , mot de passe,
PEUT CONTENIR, 11 COMMENTAIRE, 0N ANNONCE:


PEUT POSTER, 0N UTILISATEUR, 11 ANNONCE : plusieurs annonces
ANNONCE:  type de la fiche ( valeurs : vu/trouvé/perdu), lattitude_pin, longitude_pin , nom_animal, type_animal, description_animal, 
CONTIENT, 0N ANNONCE, 11 PHOTO :

:
:
PHOTO: image, alt
```

### 3.Dictionnaire de données

Le dictionnaire de données est fini . 

### Graphisme

Le logo et la palette de couleurs sont commencés . Géraldine fini le logo suite à ses plusieurs propositions . 

### 4.Wireframes 

Nous avons préparé le travail des wireframes en expliquant les différentes pages dont nous aurons besoin . 

- Une page accueil ( le map visible avec epingles) avec nav 
- page de connexion grace à son mail et son mot de passe
- une page inscription ( créer son profil ) si pas connecté
- Une page formulaire pour créer une fiche alerte
- une page fiche alerte avec commentaires
- une page profil utilisateur


## **25/09/2019**

### 1. Wireframes
 
Nous avons mis en commun nos wireframes et rassemblé nos idées. 
Au final , nous avons opté pour les pages suivantes:

- page d'accueil 
- page de connexion 
- page d'inscription
- page d'accueil connnectée
- page fiche alerte
- page fiche alerte vu compte utilisateur
- page fiche alerte vu compte propriétaire
- page profil


### 2. Routes

Nous avons élaboré les routes en fonction du wireframe . Nous avons encore besoin de maitriser le système des APIS afin de voir si les routes sont bien écrites de la sorte .
 
Nous voulons modifier des informations directement sur la page à voir comment cela se passe en Front et en Back (pour une page vu du profil et modification du profil).

### Notes

Suite au twitch des Sirius nous avons entendu parler de MERCURE (Faux serveur) . Nous allons chercher dans ce sens et voir si cela peut se combiner avec notre projet . Cette méthode nous permettrait d'éviter de créer une API et donc générerait un gain de temps et permettrait un affichage immédiat sans recharger la page; 


## **26/09/2019**

### 1. notes du matin 

Nous Allons créer le domaine dès le début . Voici en dessous quelques liens utiles qui vont nous permettre de le faie . Nous allons devoir définir ensemble le nom de domaine . 
grille E commande création -> 10 euros pour le domaine payé par O'clock .

- les liens utiles afin de créer notre domaine : 

https://github.com/O-clock-Alumni/fiches-recap/blob/master/wordpress/wp/migration-deploiement.md
https://github.com/O-clock-Alumni/fiches-recap/blob/master/symfony/themes/deploiement-gandi-debian.md
https://github.com/O-clock-Alumni/fiches-recap/blob/master/adminsys/aws/create_server.md
https://github.com/O-clock-Alumni/fiches-recap/blob/master/adminsys/aws/create_account.md
https://www.gandi.net/en/domain?grid=E
https://www.gandi.net/domaine

### 2. Compte rendu de la présentation

changer le mocodo

```
PEUT COMMENTER, 0N UTILISATEUR, 11 COMMENTAIRE :   
COMMENTAIRE: contenu, date, statut (pour modération activer/désactiver)

UTILISATEUR :  nom, prenom, adresse mail , mot de passe,
PEUT CONTENIR, 11 COMMENTAIRE, 0N ANNONCE:



PEUT POSTER, 0N UTILISATEUR, 11 ANNONCE : plusieurs annonces
ANNONCE:  visibilité infos utilisateur, type de la fiche ( valeurs : vu/trouvé/perdu), lattitude_pin, longitude_pin , nom_animal, type_animal, description_animal, 
CONTIENT, 0N ANNONCE, 11 PHOTO :

:
:
PHOTO: image, alt
```

### BACKEND

1. ***Liens utiles***

les notes de Fanny en revision de la spé Symfony
https://github.com/O-clock-Titan/notes-Symfo-Fanny42/blob/master/S04/S04-E03.md

les bonnes pratiques
https://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/

Lien de Marie sur les API:
https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web/3449008-quest-ce-quune-api

Lien de Vanessa:
https://www.redhat.com/fr/topics/api/what-are-application-programming-interfaces
https://medium.com/@mercier_remi/c-est-quoi-une-api-f37ae350cb9

lien d'emilie
https://symfony.com/doc/current/frontend/encore/reactjs.html


***NOTES*** : Nous allons utiliser API REST et JWT

exemple d'une api 
```php
<?php
namespace App\Controller\Api;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\ConstraintViolationList;
class TestController extends AbstractFOSRestController
{
    /**
     * @Route("/api/test", name="api_test")
     */
    public function test()
    {
        $response = new JsonResponse(['data' => 123]);
        // if you don't know the data to send when creating the response
        $response = new JsonResponse();
        // ...
        $response->setData(['data' => 123]);
        
        // if the data to send is already encoded in JSON
        $response = JsonResponse::fromJsonString('{ "data": 123 }');
        return $response;
    }
}
```

2. ***API***

API (Application Programming Interfaces) . 
- *Interface* : la manière qui permet d'interargir entre 2 entités . ( par exemple le menu est l'interface entre le client et la cuisine ). 

REST signifie “Representational State Transfer”.

## ***27/09/2019***

## NOTES HELENE

### déroulement 

*notes* : pour les faker / fixtures https://github.com/O-clock-Titan/notes-Symfo-Fanny42/blob/master/S03/S03-E01.md#cr%C3%A9ation-de-lentit%C3%A9-task
pour les API
https://github.com/O-clock-Titan/notes-Symfo-Fanny42/blob/master/S04/S04-E03.md

1. création d'une branche `test-api` afin de comprendre le système des API . 
2. Installation de Symfony dans le projet back `composer create-project symfony/website-skeleton my_project_name` et le déplacer après .
3. Faire un `composer install`
3. création d'une base de données sur phpmyadmin du nom de test avec en mot de passe test
4. creation du .env.local
5. Faire un `bin/console m:m`
6. Faire un `bin/console d:m:m`
7. vérifier dans phpmyadmin que la migration a bien été faite
8. commande `composer require annotations` pour utiliser le système de routes en annotation dans les controller
9. nous allons créer une entity apellée `person` dans laquelle il y aura une table nommée `name` qui pourra renvoyer le nom d'une personne 
10. faire `bin/console m:m` puis `bin/console d:m:m` pour envoyer vers phpmyadmin
11. vérification dans phpmmyadmin et voir si l'entité et la table est bien crée : ok 
12. taper la commande `composer require --dev doctrine/doctrine-fixtures-bundle` dans le terminal afin de pouvoir faire les fixtures
13. taper la commande`composer require --dev nelmio/alice` qui va permettre d'installer le faker alice
14. aller dans `config/packages/dev/nelmio_alice.yaml` et coller
```php
#config/packages/dev/nelmio_alice.yaml

nelmio_alice:
    locale: 'fr_FR' # Default locale for the Faker Generator
    seed: 1     # Value used to make sure Faker generates data consistently across
                # runs, set to null to disable.
    functions_blacklist:    # Some Faker formatter may have the same name as PHP
        - 'current'         # native functions. PHP functions have the priority,
                            # so if you want to use a Faker formatter instead,
                            # blacklist this function here
    loading_limit: 5    # Alice may do some recursion to resolve certain values.
                        # This parameter defines a limit which will stop the
                        # resolution once reached.
    max_unique_values_retry: 150    # Maximum number of time Alice can try to
                                    # generate a unique value before stopping and
                                    # failing.
```
15. créer le fichier `src/DataFixtures/fixtures.yaml` et écrire les faker que nous voulons écrire
```php
App\Entity\Person:
  person{1..30} :
    name : ' <name()> '
```

16. installer le bundle `composer require fzaninotto/faker --dev` et d'utliser la bibliothèque
17. j'utilise le faker `https://github.com/fzaninotto/Faker` afin de créer les fausses données dans fixtures.yaml
18. j'utilise la commande `bin/console translation:update --force fr` afin de forcer le fr sur alicebundle
19. je tape `bin/console make:fixtures` je vais créer une fixture dans ce cas là `AliceFixtures`
21. j'ai un dossier qui se crée dans src>datafixtures nommé `AliceFixtures.php` et je le remplie avec le code ci dessous

```php

namespace App\DataFixtures;

use Faker\Factory;
use Nelmio\Alice\Loader\NativeLoader;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AliceFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // pour préciser la langue
        $faker = Factory::create('fr_FR');
        // on injecte la variable $faker dans le loader du bundle Alice
        $loader = new NativeLoader($faker);
        // on précise le chemin vers le fichier fixtures.yaml
        // cete variable contient un tableau d'objets créés
        $entities = $loader->loadFile(__DIR__.'/fixtures.yaml')->getObjects();
        // on boucle sur ce tableau, et pour chaque objet, on fait persist
        foreach($entities as $entity) {
            $manager->persist($entity);
        }
        // on flush les données qui ont été persistées
        $manager->flush();
    }
}
```
22. puis je tape  `bin/console d:f:l` pour charger les fixtures dans la base de donée
23. je vérifie si phpmyadmin a bien tous les noms : ok
24. je vais faire un `bin/console make:controller` que je vais nommer `person` et qui va me créer un PersonController . 
25. dans ce controller je vais pouvoir mettre les use dont je vais avoir besoin afin de créer mon affichage en format json . 
```php
use App\Entity\Person;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
```
je vais pouvoir écrire ma variable qui va me permettre de récupérer ma liste de Nom et prénom 
```php
        $person = $this->getDoctrine()->getRepository(Person::class)->findAll();
```

les lignes permettant de transformer mes données 

```php
            $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
                
            $normalizer = new ObjectNormalizer($classMetadataFactory);
            $serializer = new Serializer([$normalizer]);
```

et les lignes permettant de transfomer mes infos en data et les retourner

```php
            // ligne à modifier selon le nom de notre variable et de notre groupe
            // ici c'est $person 
            $data = $serializer->normalize($person);
        
            return $this->json($data);
```
26. Dans mon terminal je vais activer mon serveur local qui va me permettre de vérifier ce que mon url contient en tapant `bin/console server:start`
27. Après vérification c'est ok et je vois bien les informations s'afficher en format json 
28. test avec Insomnia https://support.insomnia.rest/article/23-installation#ubuntu pour telechargement, puis installer . Après pour utiliser dans console `sudo apt-get update` puis `sudo apt-get install insomnia` . en créant un dossier test dans le logiciel insomnia et en choisissant la methode get je peux tester mes affichages . en tapant dans la barre url l'adresse du local host en 8001 . 

*Notes de cette journée* : j'ai effacé la branch test . et je vais maintenant faire un test sous la forme d'une formulaire et tester avec la méthode post ou puth . 

## NOTES GERALDINE 

### Déroulement 

vue du UtilisateurController.php

```php
<?php

namespace App\Controller;


use App\Entity\Utilisateur;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


/**
  * @Route("/api", name="api_")
  */
class UtilisateurController extends AbstractController
{
    /**
     * @Route("/utilisateur", name="utilisateur")
     */
    public function list()
    {
        // On souhaite afficher les liste des produits et la retourner dans un JSON
        // on récupère la liste des produits
        $noms = $this->getDoctrine()->getRepository(Utilisateur::class)->findAll();

        // lignes à copier telles quelles
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        // ligne à modifier selon le nom de notre variable et de notre groupe
        // ici c'est $products et api
        $data = $serializer->normalize($noms, null, ['groups' => 'api']);

        return $this->json($data);
    }
}
```

vue des entity

```php
<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ORM\Entity(repositoryClass="App\Repository\UtilisateurRepository")
 */

class Utilisateur
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=80)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=80)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=80)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=80)
     */
    private $motdepasse;

    public function getId(): ?int
    {
        return $this->id;
    }
    /**
     * @Groups("api")
     */
    public function getNom(): ?string
    {
        return $this->nom;
    }
    
    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }
    /**
     * @Groups("api")
     */
    public function getPrenom(): ?string
    {
        return $this->prenom;
    }
    
    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getMotdepasse(): ?string
    {
        return $this->motdepasse;
    }

    public function setMotdepasse(string $motdepasse): self
    {
        $this->motdepasse = $motdepasse;

        return $this;
    }
}
```


## ***30/09/2019***



je vais tester le système de connexion et d'inscription . Dans un premier temps je vais utiliser la méthode que nous avions faite avec djyp et voir comment tranformer les informations en json . voir si je test avec la méthode précedente, si cela fonctionne . 

### liens utilisés : 
https://github.com/O-clock-Titan/notes-Symfo-Fanny42/blob/master/S03/S03-E05.md



1. je tape dans le terminal la commande `bin/console make:controller`  que je crée en tant que **UtilisateurController** . 
2. je fais dans le terminal la commande `bin/console make:user`
3. j'ai fais `bin/console m:m` puis `bin/console d:m:m`






