<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Notification\Http\Controllers\NotificationController;

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


Route::group(['middleware'=>'auth:sanctum'],function()
{
    Route::apiResource('notifications','NotificationController')->middleware('recent_user');
//    Route::get('notifications',function(){
//        die('test');
//s    });
    Route::get('get-notifications-number',[NotificationController::class,'getNotificationsNumber']);

    Route::get('/test',function(){
//        dd(Auth::user()->notifications()->count());
//        \Modules\Notification\Actions\UserNotificationFlushOldAction::execute(\Illuminate\Support\Facades\Auth::user());
    });

});


