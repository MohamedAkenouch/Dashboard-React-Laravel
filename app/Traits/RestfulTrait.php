<?php
namespace App\Traits;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Validator;
trait RestfulTrait{

    public function apiResponse($data = null  , $code = 200 , $message = null , $paginate = null){

        $arrayResponse = [
            'data' => $data,
//            'status' => $code == 200 || $code==201 || $code==204 || $code==205 ,
            'message' => $message ,
            'status' => $code ,
//            'paginate' => $paginate
        ];
        if($paginate)
        {
            $arrayResponse['data'] = $data->response()->getData(true)['data'];
            $arrayResponse['meta']['links'] = $data->response()->getData(true)['links'];
            $arrayResponse['meta']['items_per_page'] = $data->response()->getData(true)['meta']['per_page'];
            $arrayResponse['meta']['current_page'] = $data->response()->getData(true)['meta']['current_page'];
            $arrayResponse['meta']['from'] = $data->response()->getData(true)['meta']['from'];
            $arrayResponse['meta']['to'] = $data->response()->getData(true)['meta']['to'];
            $arrayResponse['meta']['total_items'] = $data->response()->getData(true)['meta']['total'];
            $arrayResponse['meta']['total_pages'] = ceil($data->response()->getData(true)['meta']['total']/$arrayResponse['meta']['items_per_page']);
        }
        return response($arrayResponse, $code);
    }
    public function apiValidation($request , $array){
        $validator = Validator::make($request->all(), $array);
        if ($validator->fails()) {
            return $this->apiResponse(null, ApiController::STATUS_VALIDATION, $validator->messages());
        }
        return $validator->valid();
    }
}
