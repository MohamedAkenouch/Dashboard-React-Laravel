<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Branch\Http\Controllers\BranchController;


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

// Route::apiResource('/branches','BranchController');//->only(['index','show']);

Route::prefix('branches')->group(function() {
   
    Route::post('/','BranchController@store');
    Route::get('/', 'BranchController@index');
    Route::post('/update/{id}','BranchController@update');
    Route::delete('/delete/{id}','BranchController@destroy');
    
});

// Route::middleware('auth:api')->group(function () {
// //    Route::apiResource('/branches','BranchController')->except(['index','show']);
// });
