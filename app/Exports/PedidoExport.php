<?php

namespace App\Exports;

use App\Models\Pedido;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Carbon\Carbon;
class PedidoExport implements FromCollection, ShouldAutoSize, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings(): array
        {
            return [
                'ID',
                'Ruta',
                'BDR',
                'Repartidor',
                'Cantidad Pedido',
                'Cantidad Devuelto',
                'Fecha',
                'Tiempo de Entrega',
                
            ];
        }

    public function collection()
    {
        return Pedido::whereDate('fecha_inicio' ,'>=', Carbon::now()->subDay(15) )->where('fecha_cierre', '!=', NULL)->orderBy('id')->get()->map(function ($pedido) {
            $intervalo = $pedido->fecha_inicio->diff($pedido->fecha_cierre);
            return [
                'id' => $pedido->id,
                
                'ruta' => $pedido->ruta->nombre,
                'bdr' => $pedido->bdr,
                'repartidor' => $pedido->repartidor->name,
                'cantidad_pedido' => $pedido->cantidad_pedido,
                'cantidad_devuelto' =>  $pedido->cantidad_devuelto,
                'fecha' => $pedido->fecha_inicio->format('d-m-Y'),
                'tiempo' => $intervalo->format('%H:%I'),
                
                
            ];
        });
    }

}
