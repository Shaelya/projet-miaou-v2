#   Routes

| URL | Titre | Description de la page | Méthode HTTP | Contrôleur | Méthode | commentaire |
| - | - | - | - | - | - | - |
| `/` | Accueil | la Map | GET | MainController | home | W1 W4 |
| `/inscription` | inscription | s'inscrire | POST | ConnexionController | inscription | W3 |
| `/connexion` | connexion | se connecter | POST | ConnexionController | connexion | W2 |
| `/advert/new` | fiche-alerte | ajouter une fiche alerte | POST | FicheAlerteController |  W5 |
| `/fiche-alerte-vue` | annonces | voir une fiche alerte | GET | FicheAlerteController | vue | W6 W7 |
| `/advert/update` | annonces | modifier une fiche alerte | POST | FicheAlerteController | modification | W6 W7 |
| `/advert/delete` | annonces | supprimer une fiche alerte | POST | FicheAlerteController | suppression | W6 W7 |
| `/profil` | profil | consulter infos utilisateur | GET | ProfilController | profil vue | W8 |
| `/profil-modification` | modification profil | changer les informations | POST | ProfilController | profilChanges | W8 |
| `/equipe` | L'équipe | L'équipe creative du site | GET | FooterController | staff | footer |
| `/comment-ca-marche` | Comment ça marche ? | Tuto fonctionnement du site | GET | FooterController | howItWorks | footer |
| `/mentions-legales` | Mentions legales | Mentions légales du site | GET | FooterController | mentionsLegales | footer |
| `/liens-externes` | Liens Externes | Liens externes du site | GET | FooterController | Liens Externes | footer |
