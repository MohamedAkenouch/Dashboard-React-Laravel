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
use Modules\Message\Entities\InboxMessage;

class InboxMessageStoreAction
{
    /**
     * @param InboxMessageData $data
     * @param InboxMessage $inbox_message
     */
    public static function execute(InboxMessageData $data)
    {
        $arr_data = $data->toArray();

        return InboxMessage::create($arr_data);
    }
}
