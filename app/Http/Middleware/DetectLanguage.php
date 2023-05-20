<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DetectLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        if(in_array($request->header('Accept-Language') , config('translatable.locales'))){
           app()->setLocale($request->header('Accept-Language'));
        }
        return $next($request);
    }
}
