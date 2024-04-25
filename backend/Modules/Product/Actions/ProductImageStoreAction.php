<?php


namespace Modules\Product\Actions;


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
use Modules\Product\DTO\ProductData;
use Modules\Product\DTO\ProductImageData;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;

class ProductImageStoreAction
{
    use ImageSaver;

    /**
     * @param ProductData $data
     * @param Product $product
     * @return mixed
     */
    public static function execute(ProductData $data, Product $product)
    {
        $arr_data = $data->toArray();

        $product_name = str_replace(' ','_', $arr_data['name_en']);

        $product_images = [];

        foreach($arr_data['images'] as $image)
        {
            $thumbs = self::SaveImageWithoutCrop(
                $image,
                'product_images',
                $product_name.'_'.uniqid(),
                [],
                true
            );

            $product_image = ProductImage::create([
                'product_id' => $product->id,
                'image' => $thumbs[0],
            ]);


            $product_images[] = $product_image;

        }

        return collect($product_images);

    }

}
