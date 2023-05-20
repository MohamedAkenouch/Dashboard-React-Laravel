<?php


namespace Modules\Message\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Message\Entities\InboxMessage;
use Spatie\DataTransferObject\DataTransferObject;

class InboxMessageData extends DataTransferObject
{
    public $id;

    public $name;

    public $phone_number;

    public $email;

    public $subject;

    public $message;


    /**
     * @param InboxMessage $inbox_message
     * @return InboxMessageData|DataTransferObject
     */
    public static function fromModel(InboxMessage $inbox_message)
    {
        $data = [
            'id' => (int) $inbox_message->id,
            'name' => (string) $inbox_message->name,
            'phone_number' => (string) $inbox_message->phone_number,
            'email' => (string) $inbox_message->email,
            'subject' => (string) $inbox_message->subject,
            'message' => (string) $inbox_message->message,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'name' => $from_data['name'] ?? null,
            'phone_number' => $from_data['phone_number'] ?? null,
            'email' => $from_data['email'] ?? null,
            'subject' => $from_data['subject'] ?? null,
            'message' => $from_data['message'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
