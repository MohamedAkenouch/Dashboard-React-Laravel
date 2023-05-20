<?php


namespace Modules\Product\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Category\DTO\CategoryData;
use Modules\Message\Entities\InboxMessage;
use Modules\Product\Entities\ProductImage;
use Spatie\DataTransferObject\DataTransferObject;

class ImageData extends DataTransferObject
{
    public $id;

    public $product_id;
    public $image;


    /**
     * @param ProductImage $image
     * @return ImageData|DataTransferObject
     */
    public static function fromModel(ProductImage $image)
    {

        $data = [
            'id' => (int) $image->id,
            'product_id' => (int) $image->product_id,
            'image' => Storage::disk('public')->
            url($image->image),
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'product_id' => $from_data['product_id'] ?? null,
            'image' => $from_data['image'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
