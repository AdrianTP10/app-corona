<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\Ruta;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Exports\PedidoExport;
use Maatwebsite\Excel\Facades\Excel;

class PedidoController extends Controller
{
    public function __construct(){
        $this->middleware('role:admin')->only('index');
    }
     
    public function index()
    {
     
        return Inertia::render('Admin/PedidosIndex', [
            //'pedidos' => Pedido::whereDate('fecha_inicio' ,'>=', Carbon::now()->subDay(15) )->get()->map(function ($pedido) {

            'pedidos' => Pedido::where('fecha_cierre', '!=', NULL)->latest()->paginate(6)->through(function ($pedido) {
                $intervalo = $pedido->fecha_inicio->diff($pedido->fecha_cierre);
                return [
                    'id' => $pedido->id,
                    
                    'ruta' => $pedido->ruta->nombre,
                    'bdr' => $pedido->bdr,
                    'repartidor' => $pedido->repartidor->name,
                    'cantidad_devuelto' =>  $pedido->cantidad_devuelto,
                    'cantidad_pedido' => $pedido->cantidad_pedido,
                    'fecha' => $pedido->fecha_inicio->format('d-m-Y h:iA'),
                    'tiempo' => $intervalo->format('%H:%I'),
                    
                    
                ];
            }), 
    
        ]);
    } 

    public function reporte() 
    {
        return Excel::download(new PedidoExport, 'Pedidos '.Carbon::now()->format('d-m-Y').'.xlsx');
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('User/RegistroPedido', [
            'rutas' => Ruta::all(),
            
         ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
        $request->validate([
            'nombre' => ['required', 'max:10','exists:rutas'],
            'cantidad_pedido' => ['required', 'integer','min:1'],
            'bdr' => ['required', 'string','max:30'],
        ]);
        $ruta = Ruta::firstWhere('nombre', $request->nombre);
        $pedido = new Pedido();
        $pedido->cantidad_pedido = $request->cantidad_pedido;
        $pedido->ruta_id = $ruta->id;
        $pedido->user_id = Auth::id();
        $pedido->bdr = $request->bdr;
        $pedido->save();
        

        return to_route('pedidos.edit',$pedido->id);
    }


    public function edit(Pedido $pedido)
    {
        return Inertia::render('User/CierrePedido', [
           'pedido' => $pedido,
           
          
        ]);
    }



    public function update(Request $request, Pedido $pedido)
    {
        $request->validate([
            'cantidad_devuelto' => ['required', 'integer'],
        ]);

        $pedido->fecha_cierre = now();
        $pedido->cantidad_devuelto = $request->cantidad_devuelto;
        //$pedido->fecha_inicio = now();
        $pedido->update();
        return to_route('dashboard');
        
    }
}
