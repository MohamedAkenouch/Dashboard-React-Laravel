<?php


namespace Modules\User\HelperClasses;


use Modules\User\Entities\User;
use Modules\User\Traits\MagicMethods;

class Authenticatable
{
    use MagicMethods;

    private ?User $user;
    private bool $correct_password;
    private bool $can_login;

    public function __construct($user, $correct_password, $can_login)
    {
        $this->user = $user;
        $this->correct_password = $correct_password;
        $this->can_login = $can_login;
    }


}
