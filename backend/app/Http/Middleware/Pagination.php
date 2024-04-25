<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Pagination
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
        !$request->items_per_page ? $request->query->set('items_per_page', 10) : null;

        return $next($request);
    }
}
