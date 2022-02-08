<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Controller\MediaFilesController;
use App\Repository\MediaFilesRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=MediaFilesRepository::class)
 * @Vich\Uploadable
 * @ApiResource(
 * 
 *  normalizationContext={"groups"={"read:media:collections"}},
 *  itemOperations = {"delete","put","get"={"normalization_context"={"groups"= {"read:media:collections","read:media:item"}}}},
 *  collectionOperations={"get","post"={
 *  "controller"= MediaFilesController::class,
 *  "deserialize" = false,
 *  "openapi_context" = {"requestBody" = {"content" = {"multipart/form-data" = {"schema"= {"type"="object","properties" = {"name"={"type"="string"},"path"={"type"="string"},"file"={"type"="string","format"="binary"}} } }} }}
 *  
 * }}
 * )
 */
class MediaFiles
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:media:collections"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read:media:collections"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:media:collections"})
     */
    private $path;

    /**
     * @var File|null
     * @Vich\UploadableField(mapping="articles",fileNameProperty = "file")
    */ 
    private $file;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    /**
     * Get the value of file
     */ 
    public function getFile()
    {
        return $this->file;
    }

    /**
     * Set the value of file
     *
     * @return  self
     */ 
    public function setFile($file)
    {
        $this->file = $file;

        return $this;
    }
}