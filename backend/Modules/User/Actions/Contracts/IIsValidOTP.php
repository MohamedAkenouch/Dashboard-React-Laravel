<?php


namespace Modules\User\Actions\Contracts;


interface IIsValidOTP
{
    public static function execute(int $user_id, string $value) : bool;
}
