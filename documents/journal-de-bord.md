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





