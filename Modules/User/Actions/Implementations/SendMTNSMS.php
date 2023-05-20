<?php


namespace Modules\User\Actions\Implementations;


use Exception;
use Illuminate\Support\Facades\Http;
use Modules\User\Actions\Contracts\ISendSMS;

class SendMTNSMS implements ISendSMS
{
    /**
     * @throws Exception
     */
    public static function execute(string $message, string $phone_number, string $locale) : bool
    {
//        $message = $message . '       ';
        $number = str_replace('+', '', $phone_number);
            $test= Http::get("http://sms.big-bang.ae:8080/websmpp/websms?
            user=BIGBANGMA&pass=qaz123&sid=TiffanyFlwr&mno=$phone_number&type=1
            &text=$message"

            );
            dd($test);

//             http://141.94.101.39:8080/websmpp/websms?
// user=testUser&pass=12345&sid=Test&mno=961xxxxx&type=1
// &text=testing English message


        // if($locale == 'ar')
        // {

        //     $utf_32_message = mb_convert_encoding($message, 'UTF-32', 'UTF-8');
        //     $hex_of_utf_32_message = bin2hex($utf_32_message);
        //     $split = str_split($hex_of_utf_32_message, 8);
        //     $split = array_map('substr', $split, array_fill(0, count($split), 4));
        //     $message = implode('', $split);

        //     $test= Http::post('http://sms.big-bang.ae:8080/websmpp/action/doMain', [
        //         $query = [
        //             'user' => 'BIGBANGMA',
        //             //  Oda
        //             'pass' => 'qaz123',
        //             // 'Oda@123$%',
        //             'sid' => 'Belresheed',
        //             // '966501271111',
        //             'mno' => $phone_number,
        //             'type' => 4,
        //             'text' => $message
        //         ]
        //     ]);
        //     // http://sms.big-bang.ae:8080/websmpp/websms
        // }
        // else if($locale == 'en')
        // {
        //     $test= Http::post('http://sms.big-bang.ae:8080/websmpp/action/doMain', [
        //         $query = [
        //             'user' => 'BIGBANGMA',
        //             'pass' => 'qaz123',
        //             'sid' => 'Belresheed',
        //             'mno' => $phone_number,
        //             'type' => 1,
        //             'text' => $message
        //         ]
        //     ]);

        // }
        // else {
        //     throw new Exception('Not Supported Language');
        // }

        return true;
    }
}
