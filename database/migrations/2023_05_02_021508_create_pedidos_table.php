<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ruta_id')->constrained(
                table: 'rutas', indexName: 'pedidos_rutas_id'
            );
            $table->foreignId('user_id')->constrained(
                table: 'users', indexName: 'pedidos_users_id'
            );
            $table->timestamp('fecha_inicio');
            $table->dateTime('fecha_cierre')->nullable();
            $table->integer('cantidad_devuelto');
            $table->integer('cantidad_pedido');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
