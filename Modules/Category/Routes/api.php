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

Route::apiResource('/categories','CategoryController');//->only(['index','show']);
Route::post('/categories/add','CategoryController@store');
Route::post('/categories/update/{id}','CategoryController@update');
Route::post('/categories/index','CategoryController@index');
Route::delete('/categories/delete/{id}','CategoryController@destroy');


// Route::middleware('auth:api')->group(function () {
// //    Route::apiResource('/categories','CategoryController')->except(['index','show']);
// });
