<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeRepository")
 */
class Type
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean")
     */
    private $cat;

    /**
     * @ORM\Column(type="boolean")
     */
    private $dog;

    /**
     * @ORM\Column(type="boolean")
     */
    private $rabbit;

    /**
     * @ORM\Column(type="boolean")
     */
    private $ferret;

    /**
     * @ORM\Column(type="boolean")
     */
    private $bird;

    /**
     * @ORM\Column(type="boolean")
     */
    private $other;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Advert", mappedBy="type", orphanRemoval=true)
     */
    private $adverts;

    public function __construct()
    {
        $this->adverts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCat(): ?bool
    {
        return $this->cat;
    }

    public function setCat(bool $cat): self
    {
        $this->cat = $cat;

        return $this;
    }

    public function getDog(): ?bool
    {
        return $this->dog;
    }

    public function setDog(bool $dog): self
    {
        $this->dog = $dog;

        return $this;
    }

    public function getRabbit(): ?bool
    {
        return $this->rabbit;
    }

    public function setRabbit(bool $rabbit): self
    {
        $this->rabbit = $rabbit;

        return $this;
    }

    public function getFerret(): ?bool
    {
        return $this->ferret;
    }

    public function setFerret(bool $ferret): self
    {
        $this->ferret = $ferret;

        return $this;
    }

    public function getBird(): ?bool
    {
        return $this->bird;
    }

    public function setBird(bool $bird): self
    {
        $this->bird = $bird;

        return $this;
    }

    public function getOther(): ?bool
    {
        return $this->other;
    }

    public function setOther(bool $other): self
    {
        $this->other = $other;

        return $this;
    }

    /**
     * @return Collection|Advert[]
     */
    public function getAdverts(): Collection
    {
        return $this->adverts;
    }

    public function addAdvert(Advert $advert): self
    {
        if (!$this->adverts->contains($advert)) {
            $this->adverts[] = $advert;
            $advert->setType($this);
        }

        return $this;
    }

    public function removeAdvert(Advert $advert): self
    {
        if ($this->adverts->contains($advert)) {
            $this->adverts->removeElement($advert);
            // set the owning side to null (unless already changed)
            if ($advert->getType() === $this) {
                $advert->setType(null);
            }
        }

        return $this;
    }
}
