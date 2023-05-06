<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ruta extends Model
{
    use HasFactory;

    protected $table = 'rutas';

    protected $fillable = [
        'nombre',
       
    ];

    public function pedidos(): HasMany
    {
        return $this->hasMany(Pedido::class);
    }

}
