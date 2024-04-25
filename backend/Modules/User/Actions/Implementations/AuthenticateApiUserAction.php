<?php


namespace Modules\User\Actions\Implementations;


use Modules\User\Entities\User;

class AuthenticateApiUserAction
{
    /** @noinspection CallableParameterUseCaseInTypeContextInspection */
    public static function execute(User $user)
    {
        return ;
        // $user->createToken('token')->plainTextToken;
    }
}
