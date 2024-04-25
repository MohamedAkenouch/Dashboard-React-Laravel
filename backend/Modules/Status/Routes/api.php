<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Status\Http\Controllers\StatusController;

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

Route::get('/mesures',[StatusController::class,'index']);

// Route::middleware('auth:api')->get('/status', function (Request $request) {
//     return $request->user();
// });