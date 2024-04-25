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
use Modules\Feature\Entities\Feature;
use Modules\Message\DTO\InboxMessageData;
use Modules\Message\DTO\MessageData;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Entities\Message;

class FeatureUpdateAction
{
    /**
     * @param FeatureData $data
     * @param int $id
     */
    public static function execute(FeatureData $data, int $id)
    {
        $feature = Feature::where('id',$id)->first();
        $arr_data = $data->toArray();

        if($arr_data['name_ar'] && $arr_data['name_en'])
        {
            $arr_data += [
                'ar' => [
                    'name' => $arr_data['name_ar'],
                ],
                'en' => [
                    'name' => $arr_data['name_en'],
                ],
            ];

            // $feature->update($arr_data);
        }

        unset(
            $arr_data['name_ar'],
            $arr_data['name_en']
        );

        $feature->update($arr_data);
        $feature = Feature::where('id',$id)->first();

        return $feature;
    }
}
