<?php

namespace Modules\Notification\Entities;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;
use Modules\Ticket\Entities\Ticket;
use Modules\Ticket\Entities\UserNotification;
use Modules\User\Entities\User;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'content',
        'notifiable',
        'notifiable_id',
        'user_id',
        'is_read',
        'title',
        'body',
        'pointer_type',
        'pointer_id',
    ];

    protected static function newFactory()
    {
        return \Modules\Notification\Database\factories\NotificationFactory::new();
    }

    public function notifiable()
    {
        return $this->morphTo('notifiable','notifiable');
    }

    public function ticket(){
        return $this->belongsTo(Ticket::class,'ticket_id');
    }


    public function user(){
        return $this->belongsTo(User::class);
    }

    public function scopePointer(Builder $query, $class)
    {
        $q = $query->where('pointer_type',$class, $id = null);
        $q = $id ? $q->where('pointer_id', $id) : $q;
        return $q;

    }

}
