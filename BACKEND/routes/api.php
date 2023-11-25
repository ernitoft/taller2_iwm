<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UsuarioController;
use App\Http\Controllers\UsuarioControllerOut;
/*¿
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/**
 * Rutas para el login
 */
Route::post('login',[UsuarioController::class,'login']);


/**
 * Rutas para el CRUD de usuarios
 */
Route::middleware('jwt.verify')->group(function(){
    Route::post('register',[UsuarioControllerOut::class,'store']);
    Route::get('usuarios',[UsuarioControllerOut::class,'index']);
    Route::get('usuarios/{id}',[UsuarioControllerOut::class,'show']);
    Route::patch('update/{id}',[UsuarioControllerOut::class,'update']);
    Route::delete('usuarios/{id}',[UsuarioControllerOut::class,'destroy']);
});
