<?php

namespace Modules\Feature\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeatureValueUpdateRequest extends FormRequest
{

    public function validationData()
    {
        $t = parent::validationData();
        $feature_values = [];
        foreach($this->feature_values as $feature_value){
            $feature_value = json_decode(json_encode($feature_value), true);
            if(!is_array($feature_value))
                $feature_value = json_decode($feature_value, true);
            $feature_values[] = $feature_value;
        }
        return [
                'feature_values' => $feature_values
            ] + $t;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'feature_values' => ['array'],
            'feature_values.*' => ['array'],
            'feature_values.*.name_en' => ['prohibits:value', 'string'],
            'feature_values.*.name_ar' => ['prohibits:value', 'string'],
            'feature_values.*.price' => ['sometimes', 'numeric'],
            'feature_values.*.value' => ['prohibits:name_ar,name_en', 'string'],
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
