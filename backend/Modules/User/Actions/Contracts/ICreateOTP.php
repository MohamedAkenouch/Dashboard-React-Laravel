<?php


namespace Modules\User\Actions\Contracts;


use Illuminate\Database\Eloquent\Model;
use Modules\User\Entities\User;
use Modules\User\Entities\UserOTP;

interface ICreateOTP
{
    public static function execute(User $user) : ?UserOTP;
}
