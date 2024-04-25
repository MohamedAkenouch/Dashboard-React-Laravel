<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryProduct extends Model
{
    use HasFactory, softDeletes;

    protected $table = 'category_product';

    protected $fillable = [
        'id',
        'category_id',
        'product_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\CategoryProductFactory::new();
    }
}
