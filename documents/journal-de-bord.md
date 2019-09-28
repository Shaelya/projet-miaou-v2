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

### Liens pour fusion entre back et front : 

https://github.com/O-clock-Alumni/fiches-recap/blob/ecb5a1c8c8ae9d518b2acfd3229635631c12174d/ldc/local_vhost.md

### Liens utiles pour l'API de la géolocalisation :
https://www.journaldunet.com/solutions/seo-referencement/1209643-11-alternatives-a-google-maps-leur-cout-leurs-avantages/
http://www.yoctopuce.com/FR/article/geolocalisation-gratuite-avec-leaflet
https://www.openstreetmap.org/about
https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API
https://nouvelle-techno.fr/actualites/2018/05/11/pas-a-pas-inserer-une-carte-openstreetmap-sur-votre-site
https://stackshare.io/stackups/google-maps-vs-leaflet
https://medium.com/@LoicOrtola/mapocalypse-migrer-depuis-google-maps-maintenant-2-2-e4359112e20a
https://julienappert.com/creer-des-controles-personnalises-pour-mapbox-gl-js/
https://docs.mapbox.com/mapbox-gl-js/api/
https://leafletjs.com/reference-1.3.0.html#popup
lien avec code pour recup le marqueur de l user : https://stackoverflow.com/questions/39401173/how-do-i-project-a-point-from-x-y-coordinates-to-latlng-in-leaflet
https://www.programmez.com/actualites/leaflet-une-bibliotheque-javascript-de-cartographie-adaptee-aux-mobiles-28792
https://www.developpez.net/forums/d1886590/javascript/general-javascript/zoom-dezoom-leaflet/
https://zestedesavoir.com/tutoriels/1365/des-cartes-sur-votre-site/
https://nouvelle-techno.fr/actualites/2018/07/10/geolocalisation-et-distance-avec-openstreetmap
https://codepen.io/superpikar/pen/medwLw

### Les prochaines étapes : 

#### Pour les backs : 

- Faire un formulaire en back en utilisant le système INSOMNIA qui va simuler les données / va remplacer provisoirement la réponse du front => systeme inscription et connexion . 
https://github.com/O-clock-Titan/notes-S06-Fanny42/blob/master/S06-E08.md#tester-des-requ%C3%AAtes-post-sans-front (notes pour utiliser insomnia)



#### Pour les fronts : 

- Marie : 
Faire AWS pour pouvoir gérer le serveur (=>nom de domaine sera valide dans qq jours).
Utiliser une API leaflet (avec OpenStreet Map) pour recupérer une map

- Utilisation de l'API leaflet afin de mettre en place la map . 

- par la suite voir si on utilise mercure pour le système d'affichage des évènements en cours (commentaire, alerte etc ... )

https://api-platform.com/ à regarder aussi rommain trello nous en a parlé sur discord . tout est installé et ça permet que tout fonctionne . eventuellement plus interressant que mercure seul . 
Là tout est déjà installé mais il faudra respecter la MVC ... donc bon ... 
par exemple ça oblige à utiliser redux en react . 

#### notes diverses 

- *comment fonctionne une API* ? tu enlèves la vue en back ( en symfo on renvoyait sous forme de .twig ) . C'est le travail du front qui lui récupère les données donc on ne s'occupe plus en back de la vue . Afin de communiquer entre le back et le front on va communiquer en envoyant les données au format json qui est comprehensible par php . Le front les met au bon endroit , mais les routes permettent de gérer les API . 

