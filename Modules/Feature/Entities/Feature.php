<?php

namespace Modules\Feature\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Product\Entities\FeatureValueProduct;
use Modules\Product\Entities\Product;

class Feature extends Model
{
    use HasFactory, Translatable, softDeletes;

    protected $fillable = [
        'id',
        'key',
        'name',
        'values'
    ];

    public $translatedAttributes = [
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Feature\Database\factories\FeatureFactory::new();
    }

    public function feature_values()
    {
        return $this->hasMany(FeatureValue::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class,'feature_product');
    }

    public function values()
    {
        return $this->hasMany(
            FeatureValueProduct::class,
            'feature_product_id'
        );
    }
}
