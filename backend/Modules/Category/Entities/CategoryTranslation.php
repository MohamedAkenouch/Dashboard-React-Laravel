<?php

namespace Modules\Category\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryTranslation extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'category_id',
        'name',
        'locale',
    ];

    protected static function newFactory()
    {
        return \Modules\Category\Database\factories\CategoryTranslationFactory::new();
    }
}
