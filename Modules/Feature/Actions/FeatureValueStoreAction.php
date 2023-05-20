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

class FeatureValueStoreAction
{
    /**
     * @param FeatureValueData $data
     * @param Feature $feature
     * @return mixed
     */
    public static function execute(FeatureValueData $data, Feature $feature)
    {
        $arr_data = $data->toArray();

        $feature_values = collect([]);

        foreach((array)$arr_data['feature_values'] as $feature_value)
        {

            if(!(array_key_exists('name_ar',$feature_value) && array_key_exists('name_en',$feature_value)))
            {
                unset(
                    $feature_value['name_ar'],
                    $feature_value['name_en']
                );
            }
            else
            {
                $feature_value += [
                    'ar' => [
                        'name' => $feature_value['name_ar'],
                    ],
                    'en' => [
                        'name' => $feature_value['name_en'],
                    ],
                ];
            }

            if(!array_key_exists('value',$feature_value))
            {
                unset($feature_value['value']);
            }
            else
            {
                $feature_value += [
                    'value' => $feature_value['value']
                ];
            }

            if(!array_key_exists('price',$feature_value))
            {
                unset($feature_value['price']);
            }
            else
            {
                $feature_value += [
                    'price' => $feature_value['price']
                ];
            }

            $feature_value += [
              'feature_id' => $feature->id,

            ];


            $feature_value_new = FeatureValue::create($feature_value);
            $feature_values->push($feature_value_new);

        }

        return $feature_values;
    }
}
