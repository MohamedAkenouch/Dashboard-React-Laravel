<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductRelated extends Model
{
    use HasFactory, softDeletes;

    protected $table = 'product_related';

    protected $fillable = [
        'id',
        'product_id',
        'product_related_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\ProductRelatedFactory::new();
    }
}
