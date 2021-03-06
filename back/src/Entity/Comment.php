<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentRepository")
 */
class Comment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=80)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $text;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Advert", inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $advert;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function __construct()
    {
        $this->createdAt = new \DateTime(); // quand je crée une annonce le createdAt se crée automatiquement 
    }
    /**
     * @Groups("apiStatus")
     * @Groups("apiComments")
     * @Groups("apiAdverts")
     * 
     */
    public function getId(): ?int
    {
        return $this->id;
    }
    /**
     * @Groups("apiStatus")
     * @Groups("apiComments")
     * @Groups("apiAdverts")
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }
    /**
     * @Groups("apicomment")
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }
    /**
     * @Groups("apiStatus")
     * @Groups("apiComments")
     * @Groups("apiAdverts")
     */
    public function getText(): ?string
    {
        return $this->text;
    }
    /**
     * @Groups("apicomment")
     */
    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @Groups("apiStatus")
     * @Groups("apiComments")
     * @Groups("apiAdverts")
     */
    public function getCreatedAtJson(): string
    {
        //return ici une forme en string à partir de la date
        return $this->createdAt->format('Y-m-d');
    } 

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
    /**
     * @Groups("apiComments")
     * @Groups("apicomment")
     */
    
    public function getAdvert(): ?Advert
    {
        return $this->advert;
    }

    public function setAdvert(?Advert $advert): self
    {
        $this->advert = $advert;

        return $this;
    }
    /**
     * @Groups("apiStatus")
     * @Groups("apiComments")
     * @Groups("apiAdverts")
     */
    public function getUser(): ?User
    {
        return $this->user;
    }
    /**
     * @Groups("apicomment")
     */
    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}