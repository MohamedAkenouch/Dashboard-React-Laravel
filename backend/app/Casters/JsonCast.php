<?php

namespace App\Casters;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class JsonCast implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param Model $model
     * @param string $key
     * @param String $value
     * @param array $attributes
     * //     * @return array
     * @return mixed
     */
    public function get($model, $key, $value ,$attributes)
    {
        $first = json_decode($value, true);
        if(!is_array($first))
            $first =  json_decode($first, true);
        return $first;
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  Model  $model
     * @param  string  $key
     * @param  array  $value
     * @param  array  $attributes
     * @return String
     */
    public function set($model, $key, $value, $attributes): string
    {
        return json_encode($value,true);
    }
}
