<?php


namespace Modules\Product\Actions;


use App\Traits\ImageSaver;
use Illuminate\Support\Collection;
use Modules\Category\DTO\CategoryImageData;
use Modules\Category\Entities\Category;
use Modules\Category\Entities\CategoryImage;
use Modules\Product\DTO\ProductImageData;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ProductImageUpdateAction
{
    use ImageSaver;

    /**@param ProductImageData $data
     * @param Product|null $product
     * @return Product
     */
    public static function execute(ProductImageData $data, Product $product = null)
    {
        $arr_data = $data->toArray();

//        $images = $category->images;

        $product_images_count = self::getProductImagesCount($product->id);
        $product_name = str_replace([' ', '/', '\\'], '_', $product->id);

        $product_images = collect([]);

        foreach ((array)$arr_data['images'] as $i => $image) {
            if ($image instanceof UploadedFile) {
                $thumbs = self::SaveImageWithoutCrop(
                    $image,
                    'product_images',
                    $product_name . '_' . $product_images_count . '_' . uniqid('', false),
                    [],
                    true,
                );

                $product_image = ProductImage::create([
                    'product_id' => $product->id,
                    'image' => $thumbs[0],
//                    'image_thumbnail_400' => $thumbs['400'],
//                    'image_thumbnail_600' => $thumbs['600'],
                ]);
                $product_images->push($product_image);
            }
        }

        $old_urls = collect((array)$arr_data['old_images'])->map(function($image){
            preg_match("/(storage)\/(.*)/", $image, $re);
            return $re[2];
        });

        $images_for_delete = $product->images()
            ->whereNotIn('image',$old_urls->toArray())
            ->whereNotIn('id', $product_images->pluck('id')->toArray())->get();

        self::DeleteImage($images_for_delete->pluck('image')->toArray());

        $images_for_delete->map(function($image){
            $image->delete();
        });

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

        return $product;

    }


    public static function getProductImagesCount($product_id): int
    {
        $product_image = ProductImage::where('product_id', $product_id)->first();

        if($product_image){
            return ProductImage::where('product_id', $product_id)->count() + 1;
        }
        return 1;
    }

}
