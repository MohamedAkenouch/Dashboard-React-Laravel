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

// Route::apiResource('/banners','BannerController');//->only(['index','show']);

Route::prefix('banners')->group(function() {
   
    Route::post('/','BannerController@store');
    Route::get('/', 'BannerController@index');
    Route::post('/update/{id}','BannerController@update');
    Route::delete('/delete/{id}','BannerController@destroy');
    
});

// Route::middleware('auth:api')->group(function () {
// //    Route::apiResource('/banners','BannerController')->except(['index','show']);
// });
