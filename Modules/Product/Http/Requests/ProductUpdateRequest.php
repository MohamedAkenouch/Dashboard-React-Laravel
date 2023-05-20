<?php

namespace Modules\Product\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
{
    // public function validationData()
    // {
    //     $t = parent::validationData();
    //     $feature_values = [];
    //     foreach($this->feature_values as $feature_value){
    //         $feature_value = json_decode(json_encode($feature_value), true);
    //         if(!is_array($feature_value))
    //             $feature_value = json_decode($feature_value, true);
    //         $feature_values[] = $feature_value;
    //     }
    //     return [
    //             'feature_values' => $feature_values
    //         ] + $t;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category_id' => ['required', 'integer', 'exists:categories,id'],
//            'feature_id' => ['required', 'integer', 'exists:features,id'],
            'name_ar' => ['required', 'string'],
            'name_en' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'images' => ['sometimes', 'array', 'min:1'],
            'images.*' => ['sometimes', 'file', 'mimes:jpg,jpeg,png'],
//            'feature_values' => ['required', 'array', 'min:1'],
//            'feature_values.*' => ['required', 'integer'],
            'product_related' => ['sometimes', 'array', 'min:1'],
            'product_related.*' => ['sometimes', 'integer'],

            'feature_values' => ['array'],
            'feature_values.*' => ['array'],
            'feature_values.*.feature_id' => ['required', 'integer', 'exists:features,id'],
            'feature_values.*.value_ids' => ['required', 'array'],
            'feature_values.*.value_ids.*' => ['required', 'integer', 'exists:feature_values,id'],

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
