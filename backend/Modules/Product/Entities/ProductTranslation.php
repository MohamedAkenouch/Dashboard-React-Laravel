<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductTranslation extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'product_id',
        'locale',
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\ProductTranslationFactory::new();
    }
}
