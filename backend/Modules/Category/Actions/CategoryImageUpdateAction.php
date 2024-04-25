<?php


namespace Modules\Category\Actions;


use App\Traits\ImageSaver;
use Illuminate\Support\Collection;
use Modules\Category\DTO\CategoryImageData;
use Modules\Category\Entities\Category;
use Modules\Category\Entities\CategoryImage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class CategoryImageUpdateAction
{
    use ImageSaver;

    /**@param CategoryImageData $data
     * @param Category|null $category
     * @return Category
     */
    public static function execute(CategoryImageData $data, Category $category = null): Category
    {
        $arr_data = $data->toArray();

        $images = $category->images;

        foreach ($images as $image)
        {
            $paths = [
                $image->image,
            ];
            self::DeleteImage($paths);
            $image->forceDelete();
        }


        $category_images_count = self::getCategoryImagesCount($category->id);
        $category_name = str_replace([' ', '/', '\\'], '_', $category->id);

        $category_images = collect([]);

        if ($arr_data['image'] instanceof UploadedFile) {
            $thumbs = self::SaveImageWithoutCrop(
                $arr_data['image'],
                'category_images',
                $category_name . '_' . $category_images_count . '_' . uniqid('', false),
                [],
                true,
            );

            $category_image = CategoryImage::create([
                'category_id' => $category->id,
                'image' => $thumbs[0],
//                   'image_thumbnail_400' => $thumbs['400'],
//                   'image_thumbnail_600' => $thumbs['600'],
            ]);
            $category_images->push($category_image);
        }




//        foreach ($images as $image)
//        {
//            $paths = [
//                $image->image,
//                $image->image_thumbnail_400,
//                $image->image_thumbnail_600,
//            ];
//            self::DeleteImage($paths);
//            $image->forceDelete();
//        }
//        $arr_data = $data;
//        $path = storage_path('app/public/images/');
//
//        $categorimagescount = self::getCategoryImagesCount($category->id);
//        $category_name = str_replace(' ','_',$category->translate('en')->name);
//
//        $category_images = [];
//        foreach ($data->images as $image)
//        {
//            $thumbs = self::SaveImageWithoutCrop(
//                $image,
//                'category_images',
//                $category_name.'_'.uniqid(),
//                [400,600],
//                true
//            );
//            $category_image = CategoryImage::create([
//                'category_id' => $category->id,
//                'image' => $thumbs[0],
//                'image_thumbnail_400' => $thumbs['400'],
//                'image_thumbnail_600' => $thumbs['600'],
//            ]);
//            $category_images[] = $category_image;
//
//            $categorimagescount++;
//        }
//        return collect($category_images);

        return $category;

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
