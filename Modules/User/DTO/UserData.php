<?php


namespace Modules\User\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\PhotoGallery\Entities\PhotoGallery;
use Modules\User\Entities\User;
use Spatie\DataTransferObject\DataTransferObject;

class UserData extends DataTransferObject
{
    public $id;

    public $phone_number;


    /**
     * @param User $user
     * @return UserData|DataTransferObject
     */
    public static function fromModel(User $user)
    {
        $data = [
            'id' => (int) $user->id,
            'phone_number' => (string) $user->phone_number,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'phone_number' => $from_data['phone_number'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
