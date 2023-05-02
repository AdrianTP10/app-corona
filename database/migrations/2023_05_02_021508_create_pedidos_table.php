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
            $table->foreignId('bdr_id')->constrained(
                table: 'bdr', indexName: 'pedidos_bdr_id'
            );
            $table->timestamp('fecha_inicio')->nullable();
            $table->timestamp('fecha_cierre')->nullable();
            $table->boolean('devuelto');
            $table->integer('cantidad_cajas');
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
