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
Route::prefix('order')->group(function() {
   
    Route::post('/','OrderController@store');
    
    Route::get('/redirectUrl', 'OrderController@redirect');
    
    Route::get('/{id}', 'OrderController@show');
    Route::get('/user/{id}', 'OrderController@orderByUser');
    Route::post('/checkout','PaymentController@store');
    
    Route::post('/update/{id}','OrderController@updateState');
    Route::get('/ordredItem/{id}', 'OrderController@getOrdredItem');
    Route::get('/ordredItems/all', 'OrderController@getOrdredItems');

    Route::get('/', 'OrderController@index');
    
});

// Route::apiResource('/orders','OrderController');
// Route::middleware('auth:api')->get('/order', function (Request $request) {
//     // return $request->user();
// });