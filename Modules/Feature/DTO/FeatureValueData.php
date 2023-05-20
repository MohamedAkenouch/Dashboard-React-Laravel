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
use Spatie\DataTransferObject\DataTransferObject;

class FeatureValueData extends DataTransferObject
{
    public $id;

    public $value;

    public $name;

    public $price;

    public $name_ar;

    public $name_en;

    public $feature;

    public $feature_values;


    /**
     * @param FeatureValue $feature_value
     * @return FeatureValueData|DataTransferObject
     */
    public static function fromModel(FeatureValue $feature_value)
    {
        $data = [
            'id' => (int) $feature_value->id,
            'name' => (string) $feature_value->translate()->name,
            'name_en' => (string) $feature_value->translate('en')->name,
            'name_ar' => (string) $feature_value->translate('ar')?->name,
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
