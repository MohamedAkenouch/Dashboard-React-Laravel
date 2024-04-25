<?php


namespace Modules\User\Actions\Implementations;


use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\App;
use Modules\User\Actions\Contracts\IIsValidOTP;
use Modules\User\Entities\User;
use Modules\User\Actions\Contracts\ICreateOTP;
use Modules\User\Entities\UserOTP;

class CreateOTP implements ICreateOTP
{

    /**
     * @throws Exception
     */
    public static function execute(User $user): ?UserOTP
    {
        $IsValidOTP = new IsValidOTP();

        do {
            $otp = random_int(1000, 9999);
            $otp_already_exists = $IsValidOTP::execute($user->id, $otp);
        } while($otp_already_exists);

        return UserOTP::create([
           'user_id' => $user->id,
           'value' => $otp,
        ]);
    }
}
