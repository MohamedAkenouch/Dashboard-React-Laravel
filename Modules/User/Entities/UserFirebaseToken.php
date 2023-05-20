<?php

namespace Modules\User\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserFirebaseToken extends Model
{
    use HasFactory;

    protected $table="user_firebase_tokens";

    protected $fillable = [
        'id',
        'user_id',
        'firebase_token',
        'device_id'
    ];

    protected static function newFactory()
    {
        return \Modules\User\Database\factories\UserFirebaseTokenFactory::new();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
