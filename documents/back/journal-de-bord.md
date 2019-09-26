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


2. ***API***

Lien JayGia:
https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web


