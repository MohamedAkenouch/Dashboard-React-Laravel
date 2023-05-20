<?php

namespace Modules\Message\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class InboxMessage extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'name',
        'phone_number',
        'email',
        'subject',
        'message'
    ];

    protected static function newFactory()
    {
        return \Modules\Message\Database\factories\InboxMessageFactory::new();
    }
}
