<?php

namespace Modules\User\Http\Controllers;

use App\DTO\GetResponseData;
use App\Rules\AllowOnlyArabicLetters;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Modules\User\Actions\Contracts\IAuthenticatableFetcher;
use Modules\User\Actions\Contracts\ICreateToken;
use Modules\User\Actions\Implementations\AuthenticatableFetcher;
use Modules\User\Actions\Implementations\AuthenticateApiUserAction;
use Modules\User\Actions\Implementations\CreateOTP;
use Modules\User\Actions\Implementations\CreateToken;
use Modules\User\Actions\Implementations\IsValidOTP;
use Modules\User\Actions\Implementations\SignInAction;
use Modules\User\Actions\Implementations\RegisterUserAction;
use Modules\User\Actions\Implementations\SendMTNSMS;
use Modules\User\DTO\UserData;
use Illuminate\Http\Request;
use Modules\User\Entities\User;
use Modules\User\Entities\UserOTP;
use Modules\User\Http\Requests\LoginRequest;
use Modules\User\Http\Requests\UserRegisterRequest;
use Modules\User\Http\Requests\UserSendOTPAgainRequest;
use Modules\User\Http\Requests\UserVerifiedPhoneNumberRequest;
use DB;


class AuthenticationController extends Controller
{

    public function login(LoginRequest $request, AuthenticatableFetcher $authFetcher, CreateToken $createToken)
    {

        // $user = LoginAction::execute($request->validated());

        // $authenticatable = $authFetcher::execute($request->validated());

        // $token = $createToken::execute($authenticatable);

        // if($user)
        // {
        //     return GetResponseData::getAuthResponseData(
        //         UserData::fromModel($user),
        //         'successful login',
        //         $token,
        //         200,
        //     );
        // }

        // return GetResponseData::getResponseData(
        //     null,
        //     'Not Authenticated',
        //     401
        // );

    }

    public function verified_phone_number(UserVerifiedPhoneNumberRequest $request, AuthenticatableFetcher $authFetcher,CreateToken $createToken)
    {
        $authenticatable = $authFetcher::execute($request->validated());
        // dd( $authenticatable);
        if($authenticatable->can_login)
        {
            return  GetResponseData::getAuthResponseData(
                $authenticatable->user,
            'phone_number verified successfully',
//            $createToken::execute($authenticatable),
            AuthenticateApiUserAction::execute($authenticatable->user),
            200
            );
        }

        return  GetResponseData::getResponseData(
            null,
            'inValid otp to this phone number',
            401
        );
    }

    public function register(UserRegisterRequest $request)
    {
        $user = RegisterUserAction::execute($request->validated());
        if($user){
            DB::table('user_o_t_ps')->where('user_id',$user['id'])->delete();
            $otp = CreateOTP::execute($user);

            $message = sprintf('Your verifecation code is : '.$otp['value']);

            $SendMTNSMS = SendMTNSMS::execute($message, $user['phone_number'], 'en');

            

        return GetResponseData::getResponseData(
            UserData::fromModel($user),
            'user registered successful',

            201
        );
        }
        
        return  GetResponseData::getResponseData(
            [],
                'user alrady exists',
    
                409
            );
            
            
    }
    public function signIn(LoginRequest $request)
    {
        $user = SignInAction::execute($request->validated());
        if($user){
            DB::table('user_o_t_ps')->where('user_id',$user['id'])->delete();
            $otp = CreateOTP::execute($user);

            $message = sprintf('Your verifecation code is : '.$otp['value']);

            $SendMTNSMS = SendMTNSMS::execute($message, $user['phone_number'], 'en');

            

        return GetResponseData::getResponseData(
            UserData::fromModel($user),
            'user registered successful',

            201
        );
        }
        
        return  GetResponseData::getResponseData(
        [],
            "user doesn't exists",

            409
        );
            
            
    }


  

    public function send_otp_again(UserSendOTPAgainRequest $request)
    {
        $user = User::where('phone_number',$request->phone_number)->first();

        if($user)
        {
            $user->user_otps()->delete();
            $otp = CreateOTP::execute($user);

            $message = sprintf('رمز التحقق الخاص بك لتطبيق تيفاني هو: '.$otp['value']);

            $SendMTNSMS = SendMTNSMS::execute($message, $user['phone_number'], 'ar');

            return  GetResponseData::getResponseData(
                null,
                'send otp successfully',
                200
            );

        }

        return  GetResponseData::getResponseData(
            null,
            'phone_number is verified',
            401
        );

    }


}
