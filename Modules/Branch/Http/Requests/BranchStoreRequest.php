<?php

namespace Modules\Branch\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BranchStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_ar' => ['required', 'string'],
            'name_en' => ['required', 'string'],
            'opening_time'=> ['required', 'string'],
            'closing_time' => ['required', 'string'],
            'delivery_opening_time' => ['required', 'string'],
            'delivery_closing_time' => ['required', 'string'],
            'telephone' => ['required', 'phone:Auto,mobile'],
            'whatsapp' => ['required', 'string'],
            'lat' => ['required', 'numeric'],
            'lon' => ['required', 'numeric'],
            'delivery_cost' => ['required', 'numeric'],
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
