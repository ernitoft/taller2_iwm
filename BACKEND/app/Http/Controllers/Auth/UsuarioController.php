<?php

namespace App\Http\Controllers\Auth;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;


class UsuarioController extends Controller
{
    public function register(Request $request){
        
    }

    public function login(LoginRequest $request){
        $credenciales = $request->only('email','password');
        $rol = User::where('email',$request->email)->first()->role;
        $rut = User::where('email',$request->email)->first()->rut;
        try{
            if(!$token = JWTAuth::attempt($credenciales)){
                return response()->json([
                    'message'=>'Credenciales inválidas'
                ],400);
            }
        }catch(JWTException $e){
            return response()->json([
                'message'=>'No se pudo crear el token'
            ],500);
        }
        if ($rol != 1){
            return response()->json([
                'message'=>'No tiene permisos para acceder'
            ],400);
        }
        return response()->json([
            'message'=>'Inicio de sesión exitoso',
            'token'=>$token,
            'rut'=>$rut,
         ],200);
    }
        

    public function logout(Request $request)
    {
        try{
            JWTAuth::invalidate($request->token);
            return response()->json([
                'message'=>'Cierre de sesión exitoso',
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'message'=>'No se pudo cerrar sesión',
            ],500);
        }
    }
}

