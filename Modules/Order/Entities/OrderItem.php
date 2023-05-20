<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderItem extends Model
{
    use HasFactory;

    // $table->bigIncrements('id');

    //         $table->unsignedBigInteger('order_id')->index();
    //         $table->unsignedBigInteger('product_id')->index();
    //         $table->unsignedInteger('quantity');
    //         $table->decimal('price', 20, 6);
    //         $table->decimal('size_price', 20, 6);
    //         $table->string('size');
    //         $table->unsignedInteger('color');

    //         $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
    //         $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');

    protected $fillable = [
        'order_id','item_img','name','product_id', 'quantity', 'price','size_price','size','color',
    ];
    protected static function newFactory()
    {
        return \Modules\Order\Database\factories\OrderItemFactory::new();
    }
    protected $table = 'order_items';

   

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
