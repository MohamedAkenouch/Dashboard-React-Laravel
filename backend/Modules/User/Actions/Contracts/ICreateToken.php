<?php


namespace Modules\User\Actions\Contracts;


use Modules\User\HelperClasses\Authenticatable;

interface ICreateToken
{
    public static function execute(Authenticatable $authenticatable) : ?string;
}
