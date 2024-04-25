<?php

namespace Modules\PhotoGallery\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class PhotoGallery extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'image'
    ];

    protected static function newFactory()
    {
        return \Modules\PhotoGallery\Database\factories\PhotoGalleryFactory::new();
    }
}
