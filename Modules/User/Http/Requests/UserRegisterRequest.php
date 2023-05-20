<?php

namespace Modules\User\Http\Requests;

use App\Rules\AllowOnlyArabicLetters;
use Modules\User\DTO\UserData;
use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
             'phone_number' => ['required', 'phone:Auto,mobile', 'max:50'],
            'first_name' => ['required'],
            'last_name' => ['required'],
            'email' => ['required'],
            
        

        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

}
