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
    }
}
