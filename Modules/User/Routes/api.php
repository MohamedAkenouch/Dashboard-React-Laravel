<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\User\Http\Controllers\AuthenticationController;
use Modules\User\Http\Controllers\UserController;

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

Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/signin', [AuthenticationController::class, 'signIn']);

Route::post('/verify-phone-number', [AuthenticationController::class, 'verified_phone_number']);

Route::post('/send-otp-again',[AuthenticationController::class, 'send_otp_again']);
Route::post('/login',[AuthenticationController::class, 'login']);
Route::get('/user/{phone}',[UserController::class, 'show']);
Route::get('/user/get/all',[UserController::class, 'show_users']);
Route::delete('/user/{phone}',[UserController::class, 'destroy']);

Route::get('/user/fetch/{id}',[UserController::class, 'getUserById']);
// Route::
// middleware('auth:api')->
// get('/user', function (Request $request) {
//     return $request->user();
// });
