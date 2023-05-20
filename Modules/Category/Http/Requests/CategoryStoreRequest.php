<?php

namespace Modules\Category\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'parent_id' => ['sometimes', 'integer', 'exists:categories,id'],
            'name_en' => ['required', 'string'],
            'name_ar' => ['required', 'string'],
//            'images' => ['required', 'array', 'min:1'],
//            'images.*' => ['required', 'file', 'mimes:jpg,jpeg,png'],
            'image' => ['required', 'file', 'mimes:jpg,jpeg,png'],
            'icon' => ['sometimes', 'mimes:svg']
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
