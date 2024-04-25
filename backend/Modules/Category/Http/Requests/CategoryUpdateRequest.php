<?php

namespace Modules\Category\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryUpdateRequest extends FormRequest
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
//            'images' => ['sometimes', 'array', 'min:1'],
//            'images.*' => ['sometimes', 'file', 'mimes:jpg,jpeg,png'],
            'image' => ['sometimes', 'file', 'mimes:jpg,jpeg,png'],
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
