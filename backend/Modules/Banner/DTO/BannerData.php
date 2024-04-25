<?php


namespace Modules\Banner\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Spatie\DataTransferObject\DataTransferObject;

class BannerData extends DataTransferObject
{
    public $id;

    public $category_id;

    public $text;

    public $image;


    /**
     * @param Banner $banner
     * @return BannerData|DataTransferObject
     */
    public static function fromModel(Banner $banner)
    {
        $data = [
            'id' => (int) $banner->id,
            'category_id' => (int) $banner->category_id,
            'text' => (string) $banner->text,
            'image' => 
            Storage::disk('public')->
            url($banner->image),
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'category_id' => $from_data['category_id'] ?? null,
            'text' => $from_data['text'] ?? null,
            'image' => $from_data['image'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
