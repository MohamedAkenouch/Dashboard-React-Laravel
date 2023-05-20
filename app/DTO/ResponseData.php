<?php


namespace App\DTO;


use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Spatie\DataTransferObject\DataTransferObject;
use Symfony\Component\HttpFoundation\Response;

class ResponseData extends DataTransferObject implements Responsable
{

    /**@var string|null*/
    public $message;

    /** @var int */
    public $status = 200;

    public $data;
    public $token;

    /**
     * @param Request $request
     * @return JsonResponse|Response
     */
    public function toResponse($request)
    {

        $response = [
            'data' => is_array($this->data) ? $this->data : $this->data->toArray() ,
            'message' => $this->message,
            'status' => $this->status,
        ];
        if($this->token)
            $response['token'] = $this->token;
        return response()->json(
            $response,
        $this->status);
    }
}
