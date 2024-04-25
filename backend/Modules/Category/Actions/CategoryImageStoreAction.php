<?php


namespace Modules\Category\Actions;

use App\Traits;
use App\Traits\ImageSaver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManagerStatic as Image;
use Modules\Category\DTO\CategoryData;
use Modules\Category\DTO\CategoryImageData;
use Modules\Category\Entities\Category;
use Modules\Category\Entities\CategoryImage;

class CategoryImageStoreAction
{

    use ImageSaver;

    /**@param  $data
     * @param  $category
     * @return Collection
     */
    public static function execute( $data,  $category = null): Collection
    {

        $arr_data = $data->toArray();

        $path = storage_path('app/public/images/');

        $categorimagescount = self::getCategoryImagesCount($category->id);
        $category_name = str_replace(' ','_',$category->translate('en')->name);

        $category_images = [];


        $thumbs = self::SaveImageWithoutCrop(
            $arr_data['image'],
            'category_images',
            $category_name.'_'.uniqid(),
            [],
            true
        );

        $category_image = CategoryImage::create([
            'category_id' => $category->id,
            'image' => $thumbs[0],
//               'image_thumbnail_400' => $thumbs['400'],
//               'image_thumbnail_600' => $thumbs['600'],
        ]);


        $category_images[] = $category_image;

        $categorimagescount++;


        return collect($category_images);
    }


    public static function getCategoryImagesCount($category_id): int
    {
        $category_image = CategoryImage::where('category_id', $category_id)->first();

        if($category_image){
            return CategoryImage::where('category_id', $category_id)->count() + 1;
        }
        return 1;
    }

}
