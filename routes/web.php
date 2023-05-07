<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PedidoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Pedido;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//URL::forceScheme('https');  //at the top of the file
Route::redirect('/', '/login');

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); */



Route::get('/dashboard', function () {
    return Inertia::render('User/Dashboard', [
        'pedidos' => Pedido::where('user_id', Auth::id())->orderBy('id', 'desc')->get()->map(function ($pedido) {
            return [
                'id' => $pedido->id,
                'ruta' => $pedido->ruta->nombre,
                'cantidad_devuelto' =>  $pedido->cantidad_devuelto,
                'cantidad_pedido' => $pedido->cantidad_pedido,
                'fecha' => $pedido->fecha_inicio->format('d-m-Y'),
                'editable' => $pedido->fecha_cierre != null,
            ];
        }), 
        'can' =>[
            'gestion_pedidos' => Auth::user()->hasPermissionTo('gestionar pedidos'),
            'gestion_usuarios' => Auth::user()->hasPermissionTo('gestionar usuarios'),
            'gestion_rutas' => Auth::user()->hasPermissionTo('gestionar rutas'),
        ]

    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::redirect('/admin', '/admin/pedidos');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/admin/pedidos', PedidoController::class)->only(['index'])->names('admin.pedidos');
    Route::resource('/pedidos', PedidoController::class);
});



require __DIR__.'/auth.php';
