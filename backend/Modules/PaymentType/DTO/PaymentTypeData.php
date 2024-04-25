<?php


namespace Modules\PaymentType\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Entities\Message;
use Modules\PaymentType\Entities\PaymentType;
use Spatie\DataTransferObject\DataTransferObject;

class PaymentTypeData extends DataTransferObject
{
    public $id;

    public $name;
    public $name_ar;
    public $name_en;


    /**
     * @param PaymentType $payment_type
     * @return PaymentTypeData|DataTransferObject
     */
    public static function fromModel(PaymentType $payment_type)
    {
        $data = [
            'id' => (int) $payment_type->id,
            'name' => (string) $payment_type->translate()->name,
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
