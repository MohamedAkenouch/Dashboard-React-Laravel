<?php


namespace Modules\User\DTO;


use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Support\Facades\Auth;
use Modules\User\Entities\User;
use Modules\User\Entities\UserFirebaseToken;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;

class UserFirebaseData extends DataTransferObject
{
    public $firebase_token;

    public $device_id;

    public $user;

    public $user_id;

    /**
     * @param UserFirebaseToken $user_firebase_token
     * @return static
     * @throws UnknownProperties
     */
    public static function fromModel(UserFirebaseToken $user_firebase_token)
    {
        $data = [
            'user' => $user_firebase_token->user,
            'firebase_token' =>$user_firebase_token->firebase_token,
            'device_id' => $user_firebase_token->device_id
            ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }


    public static function fromRequest(FormRequest $request)
    {
        $from_data = $request->validated();

        $data = [
            'firebase_token' => (string) $from_data['firebase_token'] ?? null,
            'device_id' => (string) $from_data['device_id'] ?? null,
            'user_id' => (int) Auth::id(),
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

}
