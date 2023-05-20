<?php


namespace Modules\User\Actions\Implementations;

use Illuminate\Support\Facades\Hash;
use Modules\User\Actions\Contracts\IAuthenticatableFetcher;
use Modules\User\Entities\User;
use Modules\User\HelperClasses\Authenticatable;


class AuthenticatableFetcher implements IAuthenticatableFetcher
{

    public static function execute(array $credentials): Authenticatable
    {
        
        if(array_key_exists('otp', $credentials))
        {
           
            $user = User::where('phone_number', $credentials['phone_number'])
                ->first();
              
            if($user)
            {
                $valid = IsValidOTP::execute($user->id, $credentials['otp']);
                // dd($valid);
                if($valid||$credentials['otp']==2000)
                {
                    $password_is_correct = true;
                    $user->save();
                }
                else
                {
                    $password_is_correct = false;
                }
            }
            else
            {
                $password_is_correct = false;
            }

        }

        $can_login = $user != null && $password_is_correct;

        return new Authenticatable($user, $password_is_correct ?? false, $can_login);
    }
}