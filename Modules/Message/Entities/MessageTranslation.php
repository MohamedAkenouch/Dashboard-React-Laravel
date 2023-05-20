<?php

namespace Modules\Message\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class MessageTranslation extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'message_id',
        'locale',
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Message\Database\factories\MessageTranslationFactory::new();
    }
}
