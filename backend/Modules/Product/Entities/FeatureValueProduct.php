<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Entities\FeatureValue;

class FeatureValueProduct extends Model
{
    use HasFactory, softDeletes;

    protected $table = 'feature_value_product';

    protected $fillable = [
        'id',
        'feature_value_id',
        'feature_product_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\FeatureValueProductFactory::new();
    }


    public function feature_product()
    {
        return $this->belongsTo(FeatureProduct::class);
    }

    public function feature_value(){
        return $this->belongsTo(FeatureValue::class);
    }
}
