<?php

namespace App\Form;

use App\Entity\Advert;
use App\Controller\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class AdvertType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    
        $builder 
            ->add('visibility', ChoiceType::class, [
                'label'=>'Visibilité *',
                'attr'=>[
                    'class' =>'form-control'
                ],
                'choices' => [
                    
                    'oui' => 'oui',
                    'non' => 'non',
                ],
            ])
            ->add('sex', ChoiceType::class, [
                'label'=>'Sexe :',
                'attr'=>[
                    'class' => 'form-control'
                ],
                'choices' => [
                    
                    'Mâle' => 'Mâle',
                    'Femelle' => 'Femelle',
                ],
                
            ])
            ->add('name', TextType::class, array (
                'label'=>'Nom :',
                'attr'=>[
                    'placeholder' =>'Son nom',
                    'class' => 'form-control'
                ]))
                
            
           
            ->add('age', IntegerType::class, array (
                'label'=>'Age :',
                'attr'=>[
                    'placeholder' =>'Son age',
                    'class' => 'form-control'
                ]))
            
            ->add('type', ChoiceType::class, [
                'label'=>'Type :',
                'attr'=>[
                    'class' => 'form-control'
                ],
                'choices' => [

                    'chat' => 'chat',
                    'chien' => 'chien',
                    'rongeur' => 'rongeur',
                    'nac' => 'nac',
                    'autre' => 'autre',
                ],
            ])
            ->add('Status', ChoiceType::class, [
                'label'=>'Statut :',
                'attr'=>[
                    'class' => 'form-control'
                ],
                'choices' => [
                
                        'Vu'   => 'vu',
                        'Perdu' => 'perdu',
                        'Trouvé' => 'trouvé',
                    ],
                ])
            ->add('lieu', TextType::class, array (
                'label'=>'Lieu :',
                'attr'=>[
                    'placeholder' =>'Indiquez le lieu',
                    'class' => 'form-control'
                ]))

            ->add('description', TextareaType::class, array (
            'label'=>'Description :',
            'attr'=>[
                'class' =>'w-100',
                'placeholder' =>'Description',
                'class' => 'form-control'
            ]))
            ->add('submit', SubmitType::class, [
                'attr'=>[
                    'class' =>'btn btn-primary mt-3 btn-lg btn-block',
                ],
                'label' => 'Ajouter une alerte'
            ])
             ->add('picture', FileType::class, array(
                 'label'     => 'Image :',
                 'required'  => false,
                 'attr'=>[
                    'class' =>' btn btn-outline-primary',
                ],
                
             ));
        
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Advert::class,
        ]);
    }

}