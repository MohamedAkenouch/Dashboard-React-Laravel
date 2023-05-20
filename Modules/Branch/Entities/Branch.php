<?php

namespace Modules\Branch\Entities;

use App\Casters\PointCasting;
use Astrotomic\Translatable\Translatable;
use Grimzy\LaravelMysqlSpatial\Eloquent\SpatialTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Branch extends Model
{
    use HasFactory, Translatable, SoftDeletes, SpatialTrait;

    protected $fillable = [
        'id',
        'opening_time',
        'closing_time',
        'delivery_opening_time',
        'delivery_closing_time',
        'telephone',
        'whatsapp',
        'gps_location',
        'delivery_cost',
        'name'
    ];

    public $translatedAttributes = [
        'name'
    ];

    public $casts = [
        'gps_location' => PointCasting::class
    ];

    protected $spatialFields = [
        'gps_location',
    ];

    protected static function newFactory()
    {
        return \Modules\Branch\Database\factories\BranchFactory::new();
    }
}
