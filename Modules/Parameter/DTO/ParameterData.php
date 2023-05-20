<?php


namespace Modules\Parameter\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Feature\Entities\Feature;
use Modules\Message\Entities\InboxMessage;
use Modules\Parameter\Entities\Parameter;
use Spatie\DataTransferObject\DataTransferObject;

class ParameterData extends DataTransferObject
{
    public $id;

    public $key;

    public $value;

    public $type;


    /**
     * @param Parameter $parameter
     * @return ParameterData|DataTransferObject
     */
    public static function fromModel(Parameter $parameter)
    {
        $data = [
            'id' => (int) $parameter->id,
            'key' => (string) $parameter->key,
            'value' => (int) $parameter->value,
            'type' => (string) $parameter->type
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'value' => $from_data['value'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
