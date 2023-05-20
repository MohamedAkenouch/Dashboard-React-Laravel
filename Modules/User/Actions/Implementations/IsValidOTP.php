<?php


namespace Modules\User\Actions\Implementations;


use Carbon\Carbon;
use Modules\User\Actions\Contracts\IIsValidOTP;
use Modules\User\Entities\UserOTP;

class IsValidOTP implements IIsValidOTP
{

    public static function execute(int $user_id, string $value): bool
    {
        return UserOTP::where([
            'user_id' => $user_id,
            'value' => $value
        ])->where('created_at', '>=', Carbon::now()->subSeconds(120))->exists();
    }
}
