<?php

namespace Modules\Category\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryImage extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'category_id',
        'image',
//        'image_thumbnail_400',
//        'image_thumbnail_600',
        'images'
    ];

    protected static function newFactory()
    {
        return \Modules\Category\Database\factories\CategoryImageFactory::new();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
