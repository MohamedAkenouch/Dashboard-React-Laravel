<?php

namespace Modules\Branch\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BranchUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_ar' => ['sometimes', 'string'],
            'name_en' => ['sometimes', 'string'],
            'opening_time'=> ['sometimes', 'string'],
            'closing_time' => ['sometimes', 'string'],
            'delivery_opening_time' => ['sometimes', 'string'],
            'delivery_closing_time' => ['sometimes', 'string'],
            'telephone' => ['sometimes', 'phone:Auto,mobile'],
            'whatsapp' => ['sometimes', 'string'],
            'lat' => ['sometimes', 'numeric'],
            'lon' => ['sometimes', 'numeric'],
            'delivery_cost' => ['sometimes', 'numeric'],
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
