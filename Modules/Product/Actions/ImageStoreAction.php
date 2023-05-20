<?php


namespace Modules\Product\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Message\DTO\InboxMessageData;
use Modules\Message\DTO\MessageData;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Entities\Message;
use Modules\Product\DTO\ImageData;
use Modules\Product\DTO\ProductImageData;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;

class ImageStoreAction
{
    use ImageSaver;

    /**
     * @param ImageData $data
     * @param Product $product
     * @return mixed
     */
    public static function execute(ImageData $data, Product $product)
    {
        $arr_data = $data->toArray();

        $product_name = str_replace(' ','_', $product->translate()->name);

        $product_images = [];

        $thumbs = self::SaveImageWithoutCrop(
            $arr_data['image'],
            'product_images',
            $product_name.'_'.uniqid(),
            [],
            true
        );

        $product_image = ProductImage::create([
            'product_id' => $product->id,
            'image' => $thumbs[0],
        ]);

        return $product_image;

    }

}
