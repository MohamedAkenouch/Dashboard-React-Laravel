<?php


namespace App\Traits;


use Carbon\Carbon;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Tuupola\Base32;

trait HasOtp
{
    /**
     * @throws Exception
     */
    protected static function bootHasOtp() : void
    {
        list(,$field,,$expiration_field)  = self::setOtpOptions();
        static::creating(function (Model $model) use ($field, $expiration_field) {
            $model->$field = self::createOtp();
            if($expire_after_seconds)
            {
                $model->$expiration_field = self::getExpirationDateTime()->toDateTimeString();
            }
        });
    }

    public static function setOtpOptions() : array
    {
        return [
            'length' => 4,
            'field' => 'otp',
            'mode' => 'alphanumeric',
            'expire_after_seconds' => 0,
            'expiration_field' => 'otp_expires_at',
        ];
    }

    public static function getExpirationDateTime() : Carbon
    {
        list(,,,$expire_after_seconds) = self::setOtpOptions();
        return Carbon::now()->addSeconds($expire_after_seconds);
    }

    /**
     * @throws Exception
     */
    public static function createDigitOtp(int $length = 4) : string
    {
        $min = (int)str_pad('1', $length, '0',STR_PAD_RIGHT);
        $max = (int)str_pad('9', $length, '9',STR_PAD_RIGHT);
        return (string)random_int($min, $max);
    }

    /**
     * @throws Exception
     */
    public static function createBase32Otp(int $length = 4): string
    {
        $base32 = new Base32([
            "characters" => Base32::ZBASE32,
            "padding" => "="
        ]);
        // each base32 character is represented by 5 bits
        $bytes_len = ceil(($length * 5) / 8);
        $bytes = random_bytes($bytes_len);
        $encoded = $base32->encode($bytes);
        return strtoupper(substr($encoded, 0, $length));
    }

    /**
     * @throws Exception
     */
    public static function createOtp(int $length = 4)
    {
        $mode = self::setOtpOptions()['mode'] ?? null;
        switch ($mode) {
            case 'digits': return self::createDigitOtp($length); break;
            case 'alphanumeric': return self::createBase32Otp($length); break;
            default: throw new Exception('Selected OTP mode is not supported');
        }

    }
}
