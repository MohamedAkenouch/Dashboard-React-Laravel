<?php


namespace Modules\Branch\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Branch\Entities\Branch;
use Spatie\DataTransferObject\DataTransferObject;

class BranchData extends DataTransferObject
{
    public $id;

    public $name;
    public $name_ar;
    public $name_en;

    public $opening_time;
    public $closing_time;

    public $delivery_opening_time;
    public $delivery_closing_time;

    public $telephone;

    public $whatsapp;

    public $gps_location;
    public $lat;
    public $lon;

    public $delivery_cost;



    /**
     * @param Branch $branch
     * @return BranchData|DataTransferObject
     */
    public static function fromModel(Branch $branch)
    {
        $data = [
            'id' => (int) $branch->id,
            'name' =>  $branch->translate()->name,
            'name_en' => $branch->translate()->name,
            'name_ar' => $branch->translate('ar')->name,
            'opening_time' => Carbon::parse($branch->opening_time),
            'closing_time' => Carbon::parse($branch->closing_time),
            'delivery_opening_time' => Carbon::parse($branch->delivery_opening_time),
            'delivery_closing_time' => Carbon::parse($branch->delivery_closing_time),
            'telephone' => (string) $branch->telephone,
            'whatsapp' => (string) $branch->whatsapp,
            'lat' => (double) $branch->gps_location['lat'],
            'lon' => (double) $branch->gps_location['lon'],
            'delivery_cost' => (double) $branch->delivery_cost
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
            'opening_time' => $from_data['opening_time'] ?? null,
            'closing_time' => $from_data['closing_time'] ?? null,
            'delivery_opening_time' => $from_data['delivery_opening_time'] ?? null,
            'delivery_closing_time' => $from_data['delivery_closing_time'] ?? null,
            'telephone' => $from_data['telephone'] ?? null,
            'whatsapp' => $from_data['whatsapp'] ?? null,
            'lat' => $from_data['lat'] ?? null,
            'lon' => $from_data['lon'] ?? null,
            'delivery_cost' => $from_data['delivery_cost'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
