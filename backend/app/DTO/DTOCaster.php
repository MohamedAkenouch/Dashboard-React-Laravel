<?php
namespace App\DTO;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Modules\Feature\DTO\FeatureData;
use Modules\Feature\DTO\FeatureValueProductData;
use Spatie\DataTransferObject\Caster;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

final class DTOCaster
{
    public static function cast(mixed $data, $class, $method = null)
    {
        if(!is_subclass_of($class,DataTransferObject::class))
        {
            throw new \TypeError();
        }

        return $data->map(
            function(Model $model) use ($method, $class) {
                $data = new $class();
                if($method){
                    $data = $data->$method($model);
                }
                else{
                    $data = $class::fromModel($model);
                }
                if(!is_array($data)){
                    $data = $data->toArray();
                }
                return $data;
            })->toArray();
    }
}
