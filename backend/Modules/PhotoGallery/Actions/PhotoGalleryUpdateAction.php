<?php


namespace Modules\PhotoGallery\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;
use Modules\PhotoGallery\DTO\PhotoGalleryData;
use Modules\PhotoGallery\Entities\PhotoGallery;

class PhotoGalleryUpdateAction
{

    use ImageSaver;

    /**
     * @param PhotoGalleryData $data
     * @param PhotoGallery $photo_gallery
     * @return PhotoGallery
     */
    public static function execute(PhotoGalleryData $data, PhotoGallery $photo_gallery)
    {

        $arr_data = $data->toArray();

        if($arr_data['image'])
        {
            $thumbs = self::SaveImageWithoutCrop(
                $arr_data['image'],
                'photo_gallery_images',
                'photo_gallery' . '_' . uniqid(),
                [],
                true
            );

            unset($arr_data['image']);

            $photo_gallery->update([
                'image' => $thumbs[0]
            ]);

        }

        return $photo_gallery;
    }
}
