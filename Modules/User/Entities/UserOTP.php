<?php

namespace Modules\User\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserOTP extends Model
{
    use HasFactory;

    protected $table = 'user_o_t_ps';

    protected $fillable = [
        'user_id',
        'value'
    ];

    protected static function newFactory()
    {
        return \Modules\User\Database\factories\UserOTPFactory::new();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
