<?php


namespace Modules\Feature\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;
use Modules\Feature\DTO\FeatureData;
use Modules\Feature\DTO\FeatureValueData;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Entities\FeatureValue;
use Modules\Message\DTO\InboxMessageData;
use Modules\Message\DTO\MessageData;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Entities\Message;

class FeatureValueUpdateAction
{
    /**
     * @param FeatureValueData $data
     * @param FeatureValue $feature_value
     */
    public static function execute(FeatureValueData $data, Feature $feature, FeatureValue $feature_value)
    {
        $arr_data = $data->toArray();

        foreach ((array)$arr_data['feature_values'] as $feature_value_data) {

            if (!(array_key_exists('name_ar', $feature_value_data) && array_key_exists('name_en', $feature_value_data))) {
                unset(
                    $feature_value_data['name_ar'],
                    $feature_value_data['name_en']
                );
            } else {
                $feature_value_data += [
                    'ar' => [
                        'name' => $feature_value_data['name_ar'],
                    ],
                    'en' => [
                        'name' => $feature_value_data['name_en'],
                    ],
                ];
            }

            if (!array_key_exists('value', $feature_value_data)) {
                unset($feature_value_data['value']);
            } else {
                $feature_value_data += [
                    'value' => $feature_value_data['value']
                ];
            }

            $feature_value_data += [
                'price' => $feature_value_data['price'],

            ];

            $feature_value->update($feature_value_data);

        }

        return $feature_value;
    }
}
