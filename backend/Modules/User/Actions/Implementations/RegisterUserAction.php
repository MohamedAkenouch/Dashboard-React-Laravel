<?php


namespace Modules\User\Actions\Implementations;



use Modules\User\Entities\User;
use Illuminate\Support\Facades\Hash;

class RegisterUserAction
{
    public static function execute(array $data)
    {
        if(!User::where('phone_number', '=', $data['phone_number'])->exists()){
            $user = User::Create(
               
                [
                    'phone_number' =>  $data['phone_number'],
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],]
            );
            return $user;
        }
        
        

        return null;
    }
}
