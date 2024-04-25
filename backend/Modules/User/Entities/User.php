<?php

namespace Modules\User\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Order\Entities\Order;
use Laravel\Sanctum\HasApiTokens;
use Modules\Notification\Entities\Notification;

class User extends Model
{
    use HasFactory, Notifiable, HasApiTokens, SoftDeletes;

    protected $fillable = [
        'id',
        'phone_number',
        'first_name',
        'last_name',
        'email'
       
    ];

    protected static function newFactory()
    {
        return \Modules\User\Database\factories\UserFactory::new();
    }

    public function firebaseToken(){
        return $this->hasMany(UserFirebaseToken::class);
    }

    public function notifications(){
        return $this->hasMany(Notification::class);
    }

    public function user_otps()
    {
        return $this->hasMany(UserOtp::class);
    }
    public function orders()
{
    return $this->hasMany(Order::class);
}


}
