<?php

namespace Modules\Product\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder;
use Modules\Category\Entities\Category;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Entities\FeatureValue;

class Product extends Model
{
    use HasFactory, softDeletes, Translatable;

    protected $fillable = [
        'id',
        'view',
        'favorite',
        'description',
        'price'
    ];

    public $translatedAttributes = [
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\ProductFactory::new();
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class,'category_product')
            ->withTimestamps();
    }

    public function feature_values()
    {
        return $this->belongsToMany(FeatureValue::class,'feature_value_product');
    }

    public function product_related()
    {
        return $this->belongsToMany(
            Product::class,
            'product_related',
            'product_id',
            'product_related_id'
        );
    }

    public function features()
    {
        return $this->belongsToMany(Feature::class, 'feature_product')
            ->withTimestamps();
    }

    public function selected_features()
    {
        return $this->hasMany(FeatureProduct::class, 'product_id');
    }

}
