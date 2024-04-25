<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Product\Http\Controllers\ProductController;
use Modules\Product\Http\Controllers\imageController;

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

// Route::apiResource('/products','ProductController');//->only(['index','show']);

Route::put('/toggle-favorite/products/{product}',[ProductController::class,'toggleFavorite']);
Route::get('/count-favorite-products/products',[ProductController::class,'countFavoriteProducts']);
Route::get('/count-favorite-products/products',[ProductController::class,'countFavoriteProducts']);

Route::get('products-by-category/{category}/products',[ProductController::class,'indexByCategory']);

// Route::middleware('auth:api')->group(function () {
// //    Route::apiResource('/products','ProductController')->except(['index','show']);
// });



//akee
// Route::post('/product/add',[ProductController::class, 'add_product']);
Route::get('/products',[ProductController::class,'index']);
Route::post('/product/store',[ProductController::class,'store']);
Route::post('/product/update/{product_id}',[ProductController::class,'update']);
Route::post('/product/delete/{product_id}',[ProductController::class,'destroy']);
Route::get('/CategoryProduct',[ProductController::class,'getCategoryProduct']);
Route::post('/image/store',[ImageController::class,'store']);
Route::delete('/image/delete/{id}',[ImageController::class,'destroy']);
