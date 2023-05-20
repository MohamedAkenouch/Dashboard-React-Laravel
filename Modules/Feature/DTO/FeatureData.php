<?php


namespace Modules\Feature\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Feature\Entities\Feature;
use Modules\Message\Entities\InboxMessage;
use Modules\Product\Entities\FeatureProduct;
use Spatie\DataTransferObject\DataTransferObject; 
use Modules\Feature\DTO\FeatureValueProductData;

class FeatureData extends DataTransferObject
{
    public $id;

    public $key;

    public $name;

    public $name_ar;

    public $name_en;

    public $values;


    /**
     * @param Feature $feature
     * @return FeatureData|DataTransferObject
     */
    public static function fromModel(Feature $feature)
    {
    //    dd($feature->values);
//        dd($feature->values);
        $data = [
            'id' => (int) $feature->id,
            'key' => (string) $feature->key,
            'name' => (string) $feature->translate()->name,
            'name_en' => (string) $feature->translate()->name,
            'name_ar' => (string) $feature->translate('ar')->name,
            // 'values' => DTOCaster::cast(
            //     $feature->values,
            //     FeatureValueProductData::class,
            //     'toFeatureValueModel'),
            'values' => DTOCaster::cast(
                $feature->feature_values,
                FeatureValueData::class)

        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function toFeatureModel(Feature $feature)
    {
        $data = [
            'id' => (int) $feature->id,
            'key' => (string) $feature->key,
            'name' => (string) $feature->translate()->name,
            'name_en' => (string) $feature->translate()->name,
            'name_ar' => (string) $feature->translate('ar')->name,
            'values' => DTOCaster::cast($feature->feature_values, FeatureValueData::class)
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromSelected(FeatureProduct $feature_product)
    {
        $feature = $feature_product->feature;
        $data = [
            'id' => (int) $feature->id,
            'key' => (string) $feature->key,
            'name' => (string) $feature->translate()->name,
            'name_en' => (string) $feature->translate()->name,
            'name_ar' => (string) $feature->translate('ar')->name,
            'values' => DTOCaster::cast(
                $feature_product->selected_values,
                FeatureValueData::class)
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'name_ar' => $from_data['name_ar'] ?? null,
            'name_en' => $from_data['name_en'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
