<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsuarioControllerOut extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = User::all();
        return response()->json([
            'usuarios'=>$usuarios],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $this->validate($request,[
                'name'=>'required|string',
                'lastname'=>'required|string',
                'email'=>'required|email|unique:users',
                'password'=>'required|string',
                'rut'=>'required|string|unique:users',
                'score'=>'required|integer',
                'role'=>'required|integer',
            ]);

            $usuario = User::create([
                'name'=>$request->name,
                'lastname'=>$request->lastname,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
                'rut'=>$request->rut,
                'score'=>$request->score,
                'role'=>$request->role,
            ]);

            return response()->json([
                'message'=>'Usuario creado con éxito',
                'usuario'=>$usuario,
            ],201);

        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Usuario $usuario)
    {
        try{
            $usuario = Usuario::find($usuario->id);
            return response()->json($usuario,200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
        
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Usuario $usuario)
    {
        try{
            $usuario = Usuario::find($usuario->id);
            $fields  = $request->validate([
                'name'=>'required|string',
                'lastname'=>'required|string',
                'email'=>'required|email|unique:users',
                'password'=>'required|string',
                'rut'=>'required|string|unique:users',
                'score'=>'required|integer',
                'role'=>'required|integer',
            ]);
            $usuario->update($fields);
            return response()->json($usuario,200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Usuario $usuario)
    {
        try{
            $usuario = Usuario::find($usuario->id);
            $usuario->delete();
            return response()->json([
                'message'=>'Usuario eliminado con éxito'
            ],200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}
