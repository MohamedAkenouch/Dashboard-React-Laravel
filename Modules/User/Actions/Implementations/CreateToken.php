<?php


namespace Modules\User\Actions\Implementations;


use Modules\User\HelperClasses\Authenticatable;

class CreateToken implements \Modules\User\Actions\Contracts\ICreateToken
{

    public static function execute(Authenticatable $authenticatable): ?string
    {
       return $authenticatable->can_login ? $authenticatable->user->createToken('token')->plainTextToken : null;
    }
}
