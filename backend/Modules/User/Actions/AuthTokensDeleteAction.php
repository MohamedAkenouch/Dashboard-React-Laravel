<?php


namespace Modules\User\Actions;


use App\Traits\ImageSaver;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Modules\User\DTO\UserFirebaseData;
use Modules\User\Entities\User;
use Modules\User\Entities\UserFirebaseToken;

class AuthTokensDeleteAction
{
    public static function execute($user)
    {
        $user->tokens()->delete();

        return $user;
    }

}
