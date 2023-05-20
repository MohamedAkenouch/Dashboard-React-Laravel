<?php


namespace Modules\Message\Actions;


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

class MessageUpdateAction
{
    /**
     * @param MessageData $data
     * @param Message $message
     */
    public static function execute(MessageData $data, Message $message)
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

        $message->update($arr_data);

        return $message;
    }
}
