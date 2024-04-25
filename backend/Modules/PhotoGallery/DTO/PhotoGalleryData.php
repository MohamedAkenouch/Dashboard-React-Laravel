<?php


namespace Modules\PhotoGallery\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\PhotoGallery\Entities\PhotoGallery;
use Spatie\DataTransferObject\DataTransferObject;

class PhotoGalleryData extends DataTransferObject
{
    public $id;

    public $image;


    /**
     * @param PhotoGallery $photo_gallery
     * @return PhotoGalleryData|DataTransferObject
     */
    public static function fromModel(PhotoGallery $photo_gallery)
    {
        $data = [
            'id' => (int) $photo_gallery->id,
            'image' => Storage::disk('public')->url($photo_gallery->image),
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'image' => $from_data['image'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
