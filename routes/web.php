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

  // Products
  Route::get('/products', 'App\Http\Controllers\ProductController@list')->name('products.list');

  Route::get(
    '/products/edit/{id?}',
    'App\Http\Controllers\ProductController@edit'
  )->name('products.edit');

  Route::post('/products/edit/{id}', 'App\Http\Controllers\ProductController@update')->name('products.update');

  Route::post('/products/edit', 'App\Http\Controllers\ProductController@store')->name('products.store');

  Route::post('/products/unpublish', 'App\Http\Controllers\ProductController@unpublish')->name('products.unpublish');

  Route::post('/products/publish', 'App\Http\Controllers\ProductController@publish')->name('products.publish');

  // Categories
  Route::get('/categories', 'App\Http\Controllers\CategoryController@list')->name('categories.list');

  Route::get(
    '/categories/edit/{id?}',
    'App\Http\Controllers\CategoryController@edit'
  )->name('categories.edit');

  Route::put('/categories/edit/{id}', 'App\Http\Controllers\CategoryController@update')->name('categories.update');

  Route::post('/categories/edit', 'App\Http\Controllers\CategoryController@store')->name('categories.store');

  Route::post('/categories/unpublish', 'App\Http\Controllers\CategoryController@unpublish')->name('categories.unpublish');

  Route::post('/categories/publish', 'App\Http\Controllers\CategoryController@publish')->name('categories.publish');

  // Settings
  Route::get('/settings', function () {
    return Inertia::render('Settings/Settings');
  })->name('settings');

});
