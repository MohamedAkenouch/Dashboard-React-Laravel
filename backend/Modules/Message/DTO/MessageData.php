<?php


namespace Modules\Message\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Entities\Message;
use Spatie\DataTransferObject\DataTransferObject;

class MessageData extends DataTransferObject
{
    public $id;

    public $name;
    public $name_ar;
    public $name_en;


    /**
     * @param Message $message
     * @return MessageData|DataTransferObject
     */
    public static function fromModel(Message $message)
    {
        $data = [
            'id' => (int) $message->id,
            'name' => (string) $message->translate()->name,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'name_ar' => $from_data['name_ar'] ?? null,
            'name_en' => $from_data['name_en'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
