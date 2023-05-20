<?php

namespace Modules\Message\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use HasFactory, Translatable, softDeletes;

    protected $fillable = [
        'id'
    ];

    public $translatedAttributes = [
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Message\Database\factories\MessageFactory::new();
    }
}
