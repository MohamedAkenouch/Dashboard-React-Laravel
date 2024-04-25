<?php


namespace Modules\Branch\Actions;


use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;

class BranchStoreAction
{

    /**
     * @param BranchData $data
     * @param Branch $branch
     */
    public static function execute(BranchData $data)
    {

        $arr_data = $data->toArray();

        $arr_data += [
            'gps_location' => [
                'lat' => $arr_data['lat'],
                'lon' => $arr_data['lon'],
            ],
            'ar' => [
                'name' => $arr_data['name_ar']
            ],
            'en' => [
                'name' => $arr_data['name_en']
            ],
        ];


        unset($arr_data['lat']);
        unset($arr_data['lon']);

        return Branch::create($arr_data);
    }
}
