<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'=>'',
            'lastname'=>'',
            'username'=>'Ochietto',
            'email'=>'',
            'password'=>Hash::make('Jaqamain3pals'),
            'rut'=>'admin',
            'score'=>0,
            'role'=>1,
        ]);

        //Creación de usuarios
        User::create([
            'name'=>'German',
            'lastname'=>'Morales',
            'username'=>'',
            'email'=>'german@gmail.com',
            'password'=>Hash::make(''),
            'rut'=>'21.111.111-k',
            'score'=>1000,
            'role'=>2,
        ]);

        User::create([
            'name'=>'Kevin',
            'lastname'=>'Araya',
            'username'=>'',
            'email'=>'kevin@gmail.com',
            'password'=>Hash::make(''),
            'rut'=>'21.111.111-2',
            'score'=>30000,
            'role'=>2,
        ]);

        User::create([
            'name'=>'Jorge',
            'lastname'=>'Rivera',
            'username'=>'',
            'email'=>'jorge@ojito.cl',
            'password'=>Hash::make(''),
            'rut'=>'21.111.111-3',
            'score'=>999999999,
            'role'=>2,
        ]);

        User::create([
            'name'=>'Marcelo',
            'lastname'=>'Céspedes',
            'username'=>'',
            'email'=>'marxx@ucn.cl',
            'password'=>Hash::make(''),
            'rut'=>'21.111.111-4',
            'score'=>999999999,
            'role'=>2,
        ]);

        User::create([
            'name'=>'Nicolas',
            'lastname'=>'Tapia',
            'username'=>'',
            'email'=>'baljeet@gmail.com',
            'password'=>Hash::make(''),
            'rut'=>'21.111.111-5',
            'score'=>1,
            'role'=>2,
        ]);

        User::create([
            'name'=>'Nataly',
            'lastname'=>'Silva',
            'username'=>'',
            'email'=>'naty@ucn.cl',
            'password'=>Hash::make(''),
            'rut'=>'21.111.111-6',
            'score'=>2,
            'role'=>2,
        ]);
        User::create([
            'name'=>'David',
            'lastname'=>'Araya',
            'username'=>'',
            'email'=>'big_D@ucn.cl',
            'password'=>Hash::make(''),
            'rut'=>'21.111.111-7',
            'score'=>999999999,
            'role'=>2,
        ]);
        
    }
}
