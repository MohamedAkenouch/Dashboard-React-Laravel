<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductImage extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'product_id',
        'image'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\ProductImageFactory::new();
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
