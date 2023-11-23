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
     */
    public function store(Request $request)
    {
        try{
            $this->validate($request,[
                'name'=>'required|string',
                'lastname'=>'required|string',
                'email'=>'required|email|unique:users',
                'rut'=>'required|string|unique:users',
                'score'=>'required|integer',
            ]);

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

        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $usuario)
    {
        try{
            $usuario = User::find($usuario->id);
            return response()->json($usuario,200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
        
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {   
        $usuario = User::find($request->id);
        try {
            if($usuario->email == $request->email){
                $field = $this->validate($request,[
                    'name'=>'required|string',
                    'lastname'=>'required|string',
                    'email'=>'required|email',
                    'score'=>'required|integer',
                ]);

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
                    'email'=>'required|email|unique:users',
                    'score'=>'required|integer',
                ]);
                $usuario = User::where('id',$usuario->id)->update([
                    'name'=>$request->name,
                    'lastname'=>$request->lastname,
                    'email'=>$request->email,
                    'score'=>$request->score,
                ]);
            }
            return response()->json($usuario, 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->validator->errors()], 422);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }



    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request,$id)
    {
        try{
            $usuario = User::findOrFail($id);
            $usuario->delete();
            return response()->json([
                'message'=>'Usuario eliminado con éxito'
            ],200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}
