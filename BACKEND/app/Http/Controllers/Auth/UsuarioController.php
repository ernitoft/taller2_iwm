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
    /**
     * Login de usuarios
     * @param  \Illuminate\Http\Request request es la petición que se hace desde el front
     */
    public function login(Request $request){   
        $messages = makeMessages();     
  
            $this->validate($request,[
                'username'=>'required|string',
                'password'=>'required|string',
            ], $messages);

            $credenciales = $request->only('username','password');
            $rol = User::where('username',$request->username)->first()->role;
            $rut = User::where('username',$request->username)->first()->rut;
            if(!$token = JWTAuth::attempt($credenciales)){
                return response()->json([
                    'message'=>'Credenciales inválidas'
                ],400);
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
}

