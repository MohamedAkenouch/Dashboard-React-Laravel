<?php


namespace Modules\PhotoGallery\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;
use Modules\PhotoGallery\DTO\PhotoGalleryData;
use Modules\PhotoGallery\Entities\PhotoGallery;

class PhotoGalleryStoreAction
{

    use ImageSaver;

    /**
     * @param PhotoGalleryData $data
     * @param PhotoGallery $photo_gallery
     */
    public static function execute(PhotoGalleryData $data)
    {

        $arr_data = $data->toArray();

        $thumbs = self::SaveImageWithoutCrop(
            $arr_data['image'],
            'photo_gallery_images',
            'photo_gallery'.'_'.uniqid(),
            [],
            true
        );

        unset($arr_data['image']);

        $arr_data += [
            'image' => $thumbs[0]
        ];

        return PhotoGallery::create($arr_data);
    }
}
