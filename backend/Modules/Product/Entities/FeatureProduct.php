<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Entities\FeatureValue;

class FeatureProduct extends Model
{
    use HasFactory, softDeletes;

    protected $table = 'feature_product';

    protected $fillable = [
        'id',
        'feature_id',
        'product_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\FeatureProductFactory::new();
    }

    public function selected_values()
    {
        return $this->belongsToMany(FeatureValue::class,
            'feature_value_product',
        'feature_product_id', 'feature_value_id');
    }

    public function feature()
    {
        return $this->belongsTo(Feature::class , 'feature_id');
    }
}
