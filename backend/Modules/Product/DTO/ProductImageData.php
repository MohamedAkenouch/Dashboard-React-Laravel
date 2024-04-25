<?php


namespace Modules\Product\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Feature\Entities\Feature;
use Modules\Message\Entities\InboxMessage;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;
use Spatie\DataTransferObject\DataTransferObject;

class ProductImageData extends DataTransferObject
{
    public $id;

    public $product_id;

    public $images;
    public $image;


    /**
     * @param ProductImage $product_image
     * @return ProductImageData|DataTransferObject
     */
    public static function fromModel(ProductImage $product_image)
    {
        $data = [
            'id' => (int) $product_image->id,
            'product_id' => (int) $product_image->product_id,
            'image' =>  
            Storage::disk('public')->
            url($product_image->image),
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'images' => $from_data['images'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    /**
     * @param $images
     * @return ProductImageData
     */
    public static function fromArray($images, $old_images = null)
    {
        $data = [
            'images' => $images  ? (array) $images : null,
            'old_images' => $old_images ? (array) $old_images : null,
        ];
        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
