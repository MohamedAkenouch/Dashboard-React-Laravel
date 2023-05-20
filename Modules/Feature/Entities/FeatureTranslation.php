<?php

namespace Modules\Feature\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class FeatureTranslation extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'feature_id',
        'locale',
        'name'
    ];

    protected static function newFactory()
    {
        return \Modules\Feature\Database\factories\FeatureTranslationFactory::new();
    }
}
