<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/products', 'App\Http\Controllers\ProductController@list')->name('products.list');

    Route::get(
        '/products/edit/{id?}',
        'App\Http\Controllers\ProductController@edit'
    )->name('products.edit');

    Route::put('/products/edit/{id}', 'App\Http\Controllers\ProductController@update')->name('products.update');
 
    Route::post('/products/edit', 'App\Http\Controllers\ProductController@store')->name('products.store');

    Route::post('/products/unpublish', 'App\Http\Controllers\ProductController@unpublish')->name('products.unpublish');
});
