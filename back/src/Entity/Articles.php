<?php

namespace App\Entity;


use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArticlesRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;



/**
 * @ORM\Entity(repositoryClass=ArticlesRepository::class)
 * @ApiResource( normalizationContext={"groups"={"read:articles:collections"}},
 * itemOperations = {"delete","put","get"={"normalization_context"={"groups"= {"read:articles:collections","read:article:item"}}}})
 *  
 * 
 *  
 * 
 */
class Articles
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:articles:collections"})
     * 
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:articles:collections","read:categorie:item","read:categorie:item"})
     * 
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:articles:collections","read:categorie:item"})
     */
    private $picture;


    /**
     * @ORM\Column(type="float")
     * @Groups({"read:articles:collections","read:categorie:item"})
     */

    private $price;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"read:articles:collections","read:categorie:item"})
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=Categories::class, inversedBy="articles")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"read:articles:collections"})
     */
    private $categorie;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:article:item"})
     * 
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"read:article:item"})
     */
    private $updatedAt;

    public function __construct(){
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTimeImmutable();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCategorie(): ?Categories
    {
        return $this->categorie;
    }

    public function setCategorie(?Categories $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }




}