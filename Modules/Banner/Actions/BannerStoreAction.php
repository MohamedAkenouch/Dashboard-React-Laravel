<?php


namespace Modules\Banner\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;

class BannerStoreAction
{

    use ImageSaver;

    /**
     * @param BannerData $data
     * @param Banner $banner
     */
    public static function execute(BannerData $data)
    {

        $arr_data = $data->toArray();

        $thumbs = self::SaveImageWithoutCrop(
            $arr_data['image'],
            'banner_images',
            'banner'.'_'.uniqid(),
            [],
            true
        );

        unset($arr_data['image']);

        $arr_data += [
            'image' => $thumbs[0]
        ];

        return Banner::create($arr_data);
    }
}
