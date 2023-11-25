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
        
        $usuarios = User::where('role','!=',1)->orderBy('id')->get();
        
        return response()->json([
            'usuarios'=>$usuarios],200);
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request request es la petición que se hace desde el front
     */
    public function store(Request $request)
    {
        $messages = makeMessages();
            $this->validate($request,[
                'name'=>'required|string',
                'lastname'=>'required|string',
                'email'=>'required|regex:/^[^@]+@[^@.]+\.[^@]+$/|unique:users',
                'rut'=>'required|string|unique:users',
                'score'=>'required|integer',
            ], $messages);

            $usuario = User::create([
                'name'=>$request->name,
                'lastname'=>$request->lastname,
                'username'=>null,
                'email'=>$request->email,
                'password'=>null,
                'rut'=>$request->rut,
                'score'=>$request->score,
                'role'=>2,
            ]);

            return response()->json([
                'message'=>'Usuario creado con éxito',
                'usuario'=>$usuario,
            ],201);

    }

    /**
     * Display the specified resource.
     * @param  int  $id es el id del usuario
     */
    public function show($id)
    {
        try{
            $usuario = User::find($id);
            return response()->json($usuario,200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
        
    }
    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request request es la petición que se hace desde el front
     */
    public function update(Request $request)
    {   
        $messages = makeMessages();
        $this->validate($request,[
            'name'=>'required|string',
            'lastname'=>'required|string',
            'email'=>'required|regex:/^[^@]+@[^@.]+\.[^@]+$/',
            'score'=>'required|integer',
        ], $messages);
        
        $usuario = User::find($request->id);
            if($usuario->email == $request->email){
                $field = $this->validate($request,[
                    'name'=>'required|string',
                    'lastname'=>'required|string',
                    'email'=>'required|regex:/^[^@]+@[^@.]+\.[^@]+$/',
                    'score'=>'required|integer',
                ],$messages);

                $usuario = User::where('id',$usuario->id)->update([
                    'name'=>$request->name,
                    'lastname'=>$request->lastname,
                    'email'=>$request->email,
                    'score'=>$request->score,
                ]); 
            }
            else{
                $field = $this->validate($request,[
                    'name'=>'required|string',
                    'lastname'=>'required|string',
                    'email'=>'required|regex:/^[^@]+@[^@.]+\.[^@]+$/|unique:users',
                    'score'=>'required|integer',
                ],$messages);
                $usuario = User::where('id',$usuario->id)->update([
                    'name'=>$request->name,
                    'lastname'=>$request->lastname,
                    'email'=>$request->email,
                    'score'=>$request->score,
                ]);
            }
            return response()->json($usuario, 200);
    }

    /**
     * Remove the specified resource from storage.
     * @param  int  $id es el id del usuario
     */
    public function destroy($id)
    {
        try{
            $usuario = User::find($id);
            $usuario->delete();
            return response()->json([
                'message'=>'Usuario eliminado con éxito',
                'usuario'=>$usuario,
            ],200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

}
