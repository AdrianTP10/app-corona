<?php

namespace Database\Factories;

use App\Models\Pedido;
use App\Models\Ruta;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pedido>
 */
class PedidoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Pedido::class;
     
    public function definition(): array
    {
        return [
            "ruta_id"  => Ruta::all()->random()->id,
            "user_id" => User::all()->random()->id,
            "bdr" => fake()->name(),
            "fecha_inicio" => fake()->dateTime(),
            "fecha_cierre" => fake()->dateTime(),
            "cantidad_devuelto" => fake()->randomNumber(3),
            "cantidad_pedido" => fake()->randomNumber(3),
        ];
    }
}
