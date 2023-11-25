<?php

use App\Models\Ticket;

/**
 * Función que crea los mensajes de error para las validaciones
 */
function makeMessages(){

    $messages = [
        'name.required' => 'El campo puntos es requerido',
        'name.string' => 'El campo nombre debe ser una cadena de caracteres.',
        'lastname.required' => 'El campo apellido es requerido.',
        'lastname.string' => 'El campo apellido debe ser una cadena de caracteres.',
        'email.required' => 'El campo correo es requerido.',
        'email.string' => 'El campo correo debe ser una cadena de caracteres.',
        'email.regex' => 'El campo correo debe tener el formato correcto.',
        'rut.required' => 'El campo Rut/dni es requerido.',
        'score.required' => 'El campo puntos es requerido.',
        'score.integer' => 'El campo puntos debe ser un número entero.',
        'email.unique' => 'El correo ya se encuentra registrado.',
        'rut.unique' => 'El rut ya se encuentra registrado.',
        'password.required' => 'El campo contraseña es requerido.',
        'password.string' => 'El campo contraseña debe ser una cadena de caracteres.',
        'username.required' => 'El campo nombre de usuario es requerido.',
        'username.string' => 'El campo nombre de usuario debe ser una cadena de caracteres.',

    ];
    return $messages;
}

