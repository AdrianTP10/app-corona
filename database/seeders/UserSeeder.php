<?php
 
namespace Database\Seeders;
 
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
 
class UserSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Ruben Fernandez',
            'email' => 'rubenfdz@gmail.com',
            'password' => Hash::make('270406'),
        ])->assignRole('admin');

        User::create([
            'name' => 'Juan Perez',
            'email' => 'juan@gmail.com',
            'password' => Hash::make('3468'),
        ])->assignRole('bdr');

        
    }
}
