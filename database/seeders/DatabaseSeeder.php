<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
        ]);
        /* DB::table('rutas')->insert([
            'nombre' => 'GB409',

        ]);
        DB::table('rutas')->insert([
            'nombre' => 'GB418',

        ]);
        DB::table('rutas')->insert([
            'nombre' => 'GB420',

        ]);
        DB::table('rutas')->insert([
            'nombre' => 'GB435',

        ]); */
       /*  \App\Models\Pedido::factory(1000)->create(); */
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
