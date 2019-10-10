<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Length;
use PhpParser\Node\Name;


class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options) // ici c'est le formulaire qui sera appellé dans le UserController 
    {
        $builder
            ->add('lastName',TextType::class ,array ('label'=>'Nom :') )
            ->add('firstName',TextType::class ,array ('label'=>'Prénom :') )
            ->add('phone',TextType::class ,array ('label'=>'Téléphone :') )
            ->add('email', EmailType::class, [
                'constraints' => [
                    new Email()
                ]
            ])
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Le mot de passe doit être identique',
                'first_options' => ['label' => 'Mot de passe'],
                'second_options' => ['label' => 'Confirmation du mot de passe'],
                'constraints' => [
                    new NotBlank(['normalizer' => 'trim']),
                    new Length(['min' => 8])
                ]
            ])
            ->add('inscription', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
