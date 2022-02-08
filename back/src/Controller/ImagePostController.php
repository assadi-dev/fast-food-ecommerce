<?php

namespace App\Controller;

use DateTimeImmutable;
use App\Entity\Articles;
use Symfony\Component\HttpFoundation\Request;

class ImagePostController
{


    public function __invoke(Request $request)
    {
        $article = $request->attributes->get('data');
        if (!($article instanceof Articles)){
            dd('Article attendue');
        }
       $file = $request->files->get("file");
       $article->setFile($file);
       $article->setUpdatedAt(new DateTimeImmutable());
       return $article;
    }
}