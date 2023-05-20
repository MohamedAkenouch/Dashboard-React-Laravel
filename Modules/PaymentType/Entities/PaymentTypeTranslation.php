<?php

namespace Modules\PaymentType\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentTypeTranslation extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'payment_type_id',
        'locale',
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\PaymentType\Database\factories\PaymentTypeTranslationFactory::new();
    }
}
