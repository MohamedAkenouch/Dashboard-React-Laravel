<?php


namespace Modules\User\Actions\Implementations;


use Modules\User\DTO\UserData;
use Modules\User\Entities\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Spatie\DataTransferObject\DataTransferObject;

class LoginAction
{
    public static function execute(array $data)
    {
        $credentials_phone = [
            'phone_number' => $data['phone_number'],
        ];

        $successful_login =true;
        //  Auth::guard('web')->attempt($credentials_phone);

        if($successful_login)
        {
            return User::find(Auth::id());
        }

        return null;
    }
}
