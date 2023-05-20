<?php

namespace Modules\Parameter\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Parameter extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'source',
        'destination',
        'value',
        'is_percentage'
    ];

    protected static function newFactory()
    {
        return \Modules\Parameter\Database\factories\ParameterFactory::new();
    }
}
