<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pedido extends Model
{
    use HasFactory;

    protected $table = 'pedidos';

    protected $fillable = [
        'ruta_id',
        'user_id',
        'cantidad_devuelto',
        'cantidad_pedido',
        'bdr',
    ];
    protected $attributes = [
        'cantidad_devuelto' => 0,
        'fecha_cierre' => null,
    ];

    const CREATED_AT = 'fecha_inicio';
    const UPDATED_AT = null;

    protected $dates = ['fecha_cierre'];

    protected $casts = [
        'fecha_inicio' => 'datetime',
        'fecha_cierre' => 'datetime',
    ];


    public function ruta(): BelongsTo
    {
        return $this->belongsTo(Ruta::class);
    }

    public function repartidor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
