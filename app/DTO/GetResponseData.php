<?php


namespace App\DTO;


class GetResponseData
{

    public static function getResponseData($data , $message , $status): ResponseData
    {
        return new ResponseData(
            [
                'data' => $data ? (is_array($data) ? $data : $data->toArray()) : [],
                'message' => $message,
                'status' => $status,
            ]
        );
    }

    public static function getAuthResponseData($data , $message, $token, $status)
    {
        return new ResponseData(
            [
                'data' => $data ? (is_array($data) ? $data : $data->toArray()) : [],
                'message' => $message,
                'token' => $token,
                'status' => $status,
            ]
        );
    }

}
