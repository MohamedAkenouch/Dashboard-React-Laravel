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

Route::apiResource('/photo-galleries','PhotoGalleryController');//->only(['index','show']);

Route::middleware('auth:api')->group(function () {
//    Route::apiResource('/photo-galleries','PhotoGalleryController')->except(['index','show']);
});
