<?php


namespace Modules\User\Actions\Contracts;


use Modules\User\Entities\User;
use Modules\User\HelperClasses\Authenticatable;

interface IAuthenticatableFetcher
{
    public static function execute(array $credentials) : ?Authenticatable;
}
