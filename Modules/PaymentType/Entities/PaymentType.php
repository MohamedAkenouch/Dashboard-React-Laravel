<?php

namespace Modules\PaymentType\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentType extends Model
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
        return \Modules\PaymentType\Database\factories\PaymentTypeFactory::new();
    }
}
