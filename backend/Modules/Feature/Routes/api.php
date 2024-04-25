<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Feature\Http\Controllers\FeatureController;

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

// Route::apiResource('/features','FeatureController');//->only(['index','show']);
// Route::apiResource('/feature-values','FeatureValueController');//->only(['index','show']);
// Route::apiResource('/features/{feature}/feature-values','FeatureValueController');//->only(['index','show']);

// added by unes
Route::prefix('features')->group(function() {

    Route::get('/','FeatureController@index');
    Route::post('/','FeatureController@store');
    Route::post('/update/{id}','FeatureController@update');
    Route::delete('/delete/{id}','FeatureController@destroy');
    
});

Route::prefix('features-values')->group(function() {

    Route::get('/','FeatureValueController@index');
    Route::post('/{id}','FeatureValueController@store');
    Route::post('/{idFeature}/update/{id}','FeatureValueController@update');
    Route::delete('/delete/{id}','FeatureValueController@destroy');
    
});

// Route::middleware('auth:api')->group(function () {
// //    Route::apiResource('/features','FeatureController')->except(['index','show']);
// //    Route::apiResource('/feature-values','FeatureValueController')->except(['index','show']);
// });
