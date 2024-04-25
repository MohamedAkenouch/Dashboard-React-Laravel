<?php


namespace Modules\Branch\Actions;


use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;

class BranchUpdateAction
{

    /**
     * @param BranchData $data
     * @param Branch $branch
     */
    public static function execute(BranchData $data, $id)
    {
        $branch = Branch::where('id',$id)->first();
        $arr_data = $data->toArray();

        if(is_null($arr_data['opening_time']))
        {
            unset($arr_data['opening_time']);
        }

        if(is_null($arr_data['closing_time']))
        {
            unset($arr_data['closing_time']);
        }

        if(is_null($arr_data['delivery_opening_time']))
        {
            unset($arr_data['delivery_opening_time']);
        }

        if(is_null($arr_data['delivery_closing_time']))
        {
            unset($arr_data['delivery_closing_time']);
        }

        if(is_null($arr_data['telephone']))
        {
            unset($arr_data['telephone']);
        }

        if(is_null($arr_data['whatsapp']))
        {
            unset($arr_data['whatsapp']);
        }

        if(is_null($arr_data['delivery_cost']))
        {
            unset($arr_data['delivery_cost']);
        }

        if($arr_data['lat'] && $arr_data['lon'])
        {
            $arr_data += [
                'gps_location' => [
                    'lat' => $arr_data['lat'],
                    'lon' => $arr_data['lon'],
                ]
            ];
        }

        if($arr_data['name_ar'] && $arr_data['name_en'])
        {
            $arr_data += [
                'ar' => [
                    'name' => $arr_data['name_ar']
                ],
                'en' => [
                    'name' => $arr_data['name_en']
                ],
            ];
        }

        unset(
            $arr_data['lat'],
            $arr_data['lon'],
            $arr_data['name_ar'],
            $arr_data['name_en']
        );

        $branch->update($arr_data);
        $branch = Branch::where('id',$id)->first();

        return $branch;
    }
}
