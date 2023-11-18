<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UsuarioController;
use App\Http\Controllers\UsuarioControllerOut;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::post('register',[UsuarioController::class,'register']);
Route::post('login',[UsuarioController::class,'login']);
Route::post('logout',[UsuarioController::class,'logout']);

//Rutas protegidas
Route::middleware('jwt.verify')->group(function(){
    Route::get('usuarios',[UsuarioControllerOut::class,'index']);
    Route::post('register',[UsuarioControllerOut::class,'store']);

});
