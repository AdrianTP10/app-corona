<?php

namespace App\Http\Controllers;

use App\Models\Ruta;
use Inertia\Inertia;

use Illuminate\Http\Request;

class RutaController extends Controller
{
    public function __construct(){
        $this->middleware('role:admin');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/RutasIndex', [
            'rutas' => Ruta::paginate(10)->through(function ($ruta) {
                return [
                    'id' => $ruta->id,
                    'nombre' => $ruta->nombre,
                ];
            }),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/RutasCreate', [
            
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        Ruta::create(
            $request->validate([
                'nombre' => ['required', 'max:10','unique:rutas,nombre'],
            ])
        );

        //return to_route('pedidos.edit');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ruta $ruta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ruta $ruta)
    {
        return Inertia::render('Admin/RutasEdit', [
            'ruta' => $ruta,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ruta $ruta)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'max:10','unique:rutas,nombre'],
        ]);
        $ruta->update($validated);

        return to_route('admin.rutas.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ruta $ruta)
    {
        //
    }
}
