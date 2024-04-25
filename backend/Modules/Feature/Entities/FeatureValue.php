<?php

namespace Modules\Feature\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Product\Entities\FeatureValueProduct;
use Modules\Product\Entities\Product;

class FeatureValue extends Model
{
    use HasFactory, Translatable, softDeletes;

    protected $fillable = [
        'id',
        'feature_id',
        'value',
        'price'
    ];

    public $translatedAttributes = [
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Feature\Database\factories\FeatureValueFactory::new();
    }

    public function feature()
    {
        return $this->belongsTo(Feature::class);
    }

}
