<?php


namespace Modules\Category\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Branch\Entities\Branch;
use Modules\Category\Entities\Category;
use Modules\Category\Entities\CategoryImage;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;
use function Symfony\Component\String\s;

class CategoryImageData extends DataTransferObject
{
    public $id;

    public $category_id;

    public $image;
    public $image_thumbnail_400;
    public $image_thumbnail_600;

    public $images;
    public $old_images;


    public static function fromModel(CategoryImage $category_image)
    {
        $data = [
            'id' => (int) $category_image->id,
            'category_id' => (int) $category_image->category_id,
            'image' => Storage::disk('public')->url($category_image->image),
//            'image_thumbnail_400' => Storage::disk('public')->url($category_image->image_thumbnail_400),
//            'image_thumbnail_600' => Storage::disk('public')->url($category_image->image_thumbnail_600)
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function toArrayImages($images)
    {
        return $images->map(function ($image){
            return Storage::disk('public')->url($image->image);
        });
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'image' => $from_data['image'] ?? null
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }


    /**
     * @param $image
     * @return CategoryImageData
     */
    public static function fromArray($image, $old_images = null)
    {
        $data = [
            'image' => $image  ? (array) $image : null,
            'old_images' => $old_images ? (array) $old_images : null,
        ];
        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
