<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class AllowOnlyEnglishLetters implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $passes = preg_match('/^(?=.*[A-Za-z ].*[A-Za-z ])[\{\}\[\]A-Za-z ]*$/',$value);
        return $passes;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
