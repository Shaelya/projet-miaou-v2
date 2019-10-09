<?php

namespace App\Form;

use App\Entity\Advert;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class AdvertType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    
        $builder 
            ->add('name', TextType::class, array ('label'=>'Nom :'))
            ->add('description', TextType::class, array ('label'=>'Description :'))
            ->add('age', IntegerType::class, array ('label'=>'Age :'))
            ->add('sex', ChoiceType::class, [
                'label'=>'Sexe :',
                'choices' => [
                    
                    'Mâle' => 'Mâle',
                    'Femelle' => 'Femelle',
                ],
            ])
            ->add('type', ChoiceType::class, [
                'label'=>'Type :',
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
                'choices' => [
                
                        'Vu'   => 'vu',
                        'Perdu' => 'perdu',
                        'Trouvé' => 'trouvé',
                    ],
                ])
            ->add('lieu')
            ->add('submit', SubmitType::class, [
                'label' => 'Ajouter une alerte'
            ])
            ->add('picture', FileType::class, array(
                'label'     => 'Image :',
                'required'  => false,
            ));
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Advert::class,
        ]);
    }

}