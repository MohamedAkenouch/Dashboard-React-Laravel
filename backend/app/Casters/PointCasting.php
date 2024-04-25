<?php

namespace App\Casters;

use Grimzy\LaravelMysqlSpatial\Types\Point;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class PointCasting implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return array
     */
    public function get($model, $key, $value ,$attributes)
    {
        $res = optional($value)->getLat() ? [
            'lat' => $value->getLat() != floor($value->getLat()) ? (float)$value->getLat() : (float)$value->getLat() + 0.0000000000001,
            'lon' => $value->getLng() != floor($value->getLng()) ? (float)$value->getLng() : (float)$value->getLng() + 0.0000000000001
        ] : [
            'lat' => "",
            'lon' => ""
        ];


        return $res;

    }

    /**
     * Prepare the given value for storage.
     *
     * @param  Model  $model
     * @param  string  $key
     * @param  array  $value
     * @param  array  $attributes
     * @return Point
     */
    public function set($model, $key, $value, $attributes)
    {
        $res = $value['lat'] ?? null;
        return $res ? new Point($value['lat'], $value['lon']) : null;
    }
}
