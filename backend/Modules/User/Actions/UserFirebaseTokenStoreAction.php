<?php


namespace Modules\User\Actions;


use Illuminate\Support\Facades\Auth;
use Modules\User\DTO\UserFirebaseData;
use Modules\User\Entities\UserFirebaseToken;

class UserFirebaseTokenStoreAction
{
    public static function execute(UserFirebaseData $data)
    {
        $arr_data = $data->toArray();

        return UserFirebaseToken::updateOrcreate([
            'device_id' => $arr_data['device_id'],
            'user_id' => $arr_data['user_id'],
        ],[
            'firebase_token'=> $arr_data['firebase_token'],
        ]);
    }
}
