<?php

namespace Modules\User\Http\Requests;

use App\Rules\AllowOnlyArabicLetters;
use Modules\User\DTO\UserData;
use Illuminate\Foundation\Http\FormRequest;

class UserVerifiedPhoneNumberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'phone_number' => ['required', 'phone:Auto,mobile', 'max:50',
                'exists:users,phone_number'],

            'otp' => ['required' , 'integer', 'min:4']
        ];
    }
}
