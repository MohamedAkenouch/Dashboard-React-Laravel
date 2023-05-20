<?php


namespace Modules\User\Actions\Contacts;


use Modules\User\Entities\User;

interface IGenerateUserID
{

    public static function execute(User $user);


}
