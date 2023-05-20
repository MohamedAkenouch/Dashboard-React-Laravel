<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('/inbox-messages','InboxMessageController');//->only(['index','show']);
Route::apiResource('/messages','MessageController');//->only(['index','show']);

Route::middleware('auth:api')->group(function () {
//    Route::apiResource('/inbox-messages','InboxMessageController')->except(['index','show']);
//    Route::apiResource('/messages','MessageController')->except(['index','show']);
});
