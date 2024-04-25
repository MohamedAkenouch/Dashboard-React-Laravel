<?php


namespace Modules\User\Actions\Contracts;


interface   ISendSMS
{
    public static function execute(string $message, string $phone_number, string $locale) : bool;
}
