# DICTIONNAIRE DE DONNEES (ce qu'on rentre dans la bdd)

## USER 

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du user|
|firstname|VARCHAR(64)|NOT NULL|Le prénom du user|
|name|VARCHAR(64)|NOT NULL|Le nom du user|
|email|TEXT|NOT NULL| mail de l'utilisateur|
|password|VARCHAR(128)|NOT NULL| mot de passe de l'utilisateur|
|telephone|INT|NOT NULL|Le numero de téléphone de l'user|
|created_at|DATETIME|NOT NULL| Création du formulaire |
|updated_at|DATETIME|NULL| Mise à jour du formulaire |


## COMMENTAIRE 

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du commentaire|
|content|TEXT|NOT NULL| contenu du commentaire |
|statut|VARCHAR(64)|NOT NULL| état du commentaire (si besoin de modérer) |
|created_at|DATETIME|NOT NULL|date du commentaire posté|
|updated_at|DATETIME|NULL|Mise à jour du commentaire|

## ANNONCE

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'annonce|
|lattitude|INT|NOT NULL|coordonnée|
|longitude|INT|NOT NULL|coordonnée|
|visibility|BOOLEAN|NOT NULL| afficher ou non les infos user|
|title|VARCHAR(64)|NOT NULL|titre de l'annonce|
|description|VACHAR(150)|NOT NULL|texte accompagnant l'annonce|
|Photo|Text|NOT NULL| Photos de l'animal perdu |
|Type|TEXT|NOT NULL|type animal|
|created_at|DATETIME|NOT NULL|date de l'annonce postée|
|updated_at|DATETIME|NULL|Mise à jour de l'annonce|


## PHOTO

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la photo|
|image|VARCHAR(128)|NULL| lien de la photo |
|alt|VARCHAR(128)|NULL| description de la photo |
|created_at|DATETIME|NOT NULL| Jour de la mise en ligne de la photo|
|updated_at|DATETIME|NULL|Mise à jour de la photo|
