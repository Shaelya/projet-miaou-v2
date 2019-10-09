# LA FICHE ALERTE

## AdvertController.php

```php
<?php

namespace App\Controller;

// use App\Entity\Status;
// use App\Entity\Type;
// use App\Entity\User;
// use App\Entity\Advert;
use App\Form\AdvertType;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class AdvertController extends AbstractController
{
    /**
     * @Route("/advert", name="advert")
     */
    public function Advert(Request $request)
    {
        
        //creer un nouveau formulaire dans le controller que je vais envoyer a ma view /twig
        $form = $this->createForm(AdvertType::class);

        // Je récupére mes données
        $form->handleRequest($request);

        // Je vérifie mes données
        if ($form->isSubmitted() && $form->isValid()) {

            $advert = $form->getData();

            $em = $this->getDoctrine()->getManager();
            $em->persist($advert);
            $em->flush();

            return $this->redirectToRoute();
        }

        return $this->render('advert/index.html.twig', [
             'form' => $form->createView()
        ]);
    }
//au dessus jai fait une methode advert ou je créer et traite le forulaire et
// en dessous je fais les methodes crud pour ajouter /supprimer .. le form enregistré

    /**
     * @Route("/add/avert", name="adding_data_casting")
     */
    public function addAdvert()
    {
        

    }


}
      
```

## AdvertType.php

```php
<?php

namespace App\Form;

use App\Entity\Type;
use App\Entity\Advert;
use App\Entity\Status;
use phpDocumentor\Reflection\File;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class AdvertType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class)
            ->add('male')
            ->add('female')
            ->add('age')
            ->add('description')
            ->add('type', TextType::class)
            ->add('Status', ChoiceType::class, [
            'choices' => [
            
                    'Vu'   => 'vu',
                    'Perdu' => 'perdu',
                    'Trouvé' => 'trouvé',
                ],
            'preferred_choices' => ['chien', 'chat', 'autre']
            ])

            ->add('file', FileType::class, array(
                'label'     => false,
                'required'  => false,
            ));

            
            
        }
       
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Advert::class,
        ]);
    }
}
```

## index.html.twig

```php

{% extends 'base.html.twig' %}

{% block title %}Fiche Alerte{% endblock %}

{% block body %}

<main class="container">

    <h2>Fiche Alerte</h2>
    <!--ici je mettrais l'affichage de coordonnée de l'utilisateur fait par helene via le formulaire d'inscription-->

  
<h2>Informations Propriétaire/ Utilisateur</h2>

<h2>Informations Animal></h2>
{{ form_start(form) }}
<button id="button"> S'enregistrer </button>

{{ form_end(form)}}




</main>

{% endblock %}

```
