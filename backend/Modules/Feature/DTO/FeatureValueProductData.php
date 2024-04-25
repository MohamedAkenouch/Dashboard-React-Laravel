<?php


namespace Modules\Feature\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Entities\FeatureValue;
use Modules\Message\Entities\InboxMessage;
use Modules\Product\Entities\FeatureValueProduct;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

class FeatureValueProductData extends DataTransferObject
{
    public $id;

    public $name;

    public $value;

    public $price;

    public $feature;

    public $feature_value;


    /**
     * @param FeatureValueProduct $feature_value_product
     * @return FeatureValueProductData|DataTransferObject
     */
    public static function fromModel(FeatureValueProduct $feature_value_product)
    {
        dd(1);
        $data = [
            'id' => (int) $feature_value_product->id,
            'feature_value' => FeatureValueData::fromModel($feature_value_product->feature_value)

        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    /**
     * @param FeatureValueProduct $feature_value_product
     * @return FeatureValueProductData
     * @throws UnknownProperties
     */
    public static function toFeatureValueModel(FeatureValueProduct $feature_value_product)
    {
        dd(2);
        $feature_value = $feature_value_product->feature_value;
        $data = [
            'id' => (int) $feature_value->id,
            'name' => (string) $feature_value->translate()->name,
            'value' => (string) $feature_value->value,
            'price' => (double) $feature_value->price,
            'feature' => $feature_value->relationLoaded('feature') ?
                FeatureData::fromModel($feature_value->feature) : null

        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'feature_values' => $from_data['feature_values'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
