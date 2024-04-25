<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

   
    protected $fillable = [
        'order_id', 'user_id','city','order_img','status', 'sub_total', 'start_date','end_date','shipping','item_count', 'payment_status',
        'receiver_addr', 'user_phone_number', 'receiver_phone_number', 'addt_addr', 'selected_msg', 'phrase',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
   
    // protected $fillable = [];
    
    protected static function newFactory()
    {
        return \Modules\Order\Database\factories\OrderFactory::new();
    }
    
}
