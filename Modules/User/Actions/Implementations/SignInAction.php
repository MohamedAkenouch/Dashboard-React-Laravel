<?php


namespace Modules\User\Actions\Implementations;



use Modules\User\Entities\User;
use Illuminate\Support\Facades\Hash;

class SignInAction
{
    public static function execute(array $data)
    {
        
        if(User::where('phone_number', '=', $data['phone_number'])->exists()){
            $user=User::where('phone_number', '=', $data['phone_number'])->first();
           
            return $user;
        }
        
        

        return [];
    }
}
