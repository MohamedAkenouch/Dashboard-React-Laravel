<?php


namespace Modules\PaymentType\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;
use Modules\Message\DTO\InboxMessageData;
use Modules\Message\DTO\MessageData;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Entities\Message;
use Modules\PaymentType\DTO\PaymentTypeData;
use Modules\PaymentType\Entities\PaymentType;

class PaymentTypeStoreAction
{
    /**
     * @param PaymentTypeData $data
     * @param PaymentType $payment_type
     */
    public static function execute(PaymentTypeData $data)
    {
        $arr_data = $data->toArray();

        $arr_data += [
            'ar' => [
                'name' => $arr_data['name_ar'],
            ],
            'en' => [
                'name' => $arr_data['name_en'],
            ],
        ];

        return PaymentType::create($arr_data);
    }
}
