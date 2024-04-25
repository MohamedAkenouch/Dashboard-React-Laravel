<?php

namespace Modules\Category\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Banner\Entities\Banner;
use Modules\Product\Entities\Product;

class Category extends Model
{
    use HasFactory, Translatable, softDeletes;

    protected $fillable = [
        'id',
        'parent_id',
        'level',
        'icon',
        'is_quick_access',
        'name'
    ];

    public $translatedAttributes = [
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Category\Database\factories\CategoryFactory::new();
    }

    public function images()
    {
        return $this->hasMany(CategoryImage::class);
    }

    public function parent()
    {
        return $this->belongsTo(
            Category::class,
            'parent_id',
            'id'
        );
    }

    public function children()
    {
        return $this->hasMany(
            Category::class,
            'parent_id',
            'id'
        );
    }

    public function banners()
    {
        return $this->hasMany(Banner::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class,'category_product');
    }
}
