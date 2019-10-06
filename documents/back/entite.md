base de données

miaou : 
             - user :   - lastName *
                        - FirstName*
                        - phone *
                        - email *
                        - password *
                        - role *
                        - createdAt * 
                        - updateAt *

                    *relations* : 




    - advert :     - name *
                    - sex *
                    - age *
                    - description *
                    - createdAt *
                    - updatedAt *

                    *relations* :   - ManyToOne avec user *
                                    - ManyToOne avec type *
                                    - ManyToOne status
                                    


    - picture :   - title *
                - image *
                - createdAt *
                - updatedAt *

                *relations* : ManyToOne avec advert


    - status :  - lost *
                - seen *
                - find *

                *relations* : 



    - type :    - cat*
                - dog*
                - rabbit*
                - ferret*
                - bird  *                                     
                - other *

                *relations* :  
                            

    - comment : - title*
                - text*
                - createdAt
                - updatedAt


                    *relations* :   - ManyToOne avec advert
                                    - ManyToOne avec user
                                    
-------------------------------

utilisateur->commentaire = OnetoMany
commentaire->utilisateur = ManyToOne *
commentaire->annonce = ManyToOne *
annonce->commentaire= OnetoMany
annonce->photo = OnetoMany
photo-> annonce =  ManyToOne *
annonce->utilisateur = ManyToOne *
utilisateur ->annonce = OnetoMany
type-> annonce = OnetoMany
annonce->type = ManytoOne *
annonce->statut = ManytoOne*