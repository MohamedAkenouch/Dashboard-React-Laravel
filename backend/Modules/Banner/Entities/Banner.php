<?php

namespace Modules\Banner\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Category\Entities\Category;

class Banner extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'id',
        'category_id',
        'image',
        'text'
    ];

    protected static function newFactory()
    {
        return \Modules\Banner\Database\factories\BannerFactory::new();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
