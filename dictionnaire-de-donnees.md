# Dictionnaire de données (ce qu'on rentre dans la bdd)

## User  (`user`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du user|
|name|VARCHAR(64)|NOT NULL|Le nom du user|
|email|TEXT|NULL| mail de l'utilisateur|
|password|VARCHAR(128)|NULL| mot de passe de l'utilisateur|
|adresse|TEXT|NULL|Le type (autre entité) du personnage|
|telephone|INT|NULL|Le numero de l'user|
|created_at|TIMESTAMP|NULL| Création d'un formulaire (chat)
|updated_at|TIMESTAMP|NULL| Mise à jour d'un formulaire (chat 




|updated_at|TIMESTAMP|NULL| Mise à jour d'un formulaire (chat trouvé)|


## Animal (`animal`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du type|
|name|VARCHAR(64)|NOT NULL|Le nom du type|
|avatar|TEXT|NULL| photo de l'animal perdu |
|description|TEXT|NULL| description de l'annonce |
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création du type|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour du type|


