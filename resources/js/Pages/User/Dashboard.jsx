import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {Timeline} from 'flowbite-react';
import { CalendarIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";;

export default function Dashboard({ auth, pedidos }) {
    
    return (
       
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Bienvenido
                </h2>
            }
        >
            <Head title="Dashboard" />
            {/*  {pedidos.length <= 0 && (
                <div>No tienes pedidos</div>
            )} */}
            <div className=" relative py-12 min-h-full">
                <div className="w-2/3 sm:w-1/2 mx-auto h-full sm:px-6 lg:px-8">
                    <Timeline>
                        {
                            pedidos.map((pedido) => (
                                
                                <Timeline.Item key={pedido.id.toString()}>
                                    {console.log(pedido.editable)}
                                    <Timeline.Point icon={CalendarIcon} />
                                    <Timeline.Content>
                                        <Timeline.Time className="text-lg dark:text-white">{pedido.fecha}</Timeline.Time>
                                        <h1 className="text-lg dark:text-white">
                                            Pedido {pedido.id}
                                        </h1>
                                        <Timeline.Body>
                                        <p className="font-normal text-gray-700 dark:text-white ">
                                            Ruta: {pedido.ruta}
                                        </p>
                                        <p className="font-normal text-gray-700 dark:text-white">
                                            Cantidad Pedido: {pedido.cantidad_pedido}
                                        </p>
                                        <p className="font-normal text-gray-700 dark:text-white">
                                            Cantidad Devuelto: {pedido.cantidad_devuelto}
                                        </p>
                                        </Timeline.Body>
                                        <Link 
                                            className={pedido.editable ? 'hidden'  :'flex bg-white rounded-lg p-2 w1/3 sm:w-1/4  items-center border-gray-300 border'}
                                            href={route('pedidos.edit',pedido.id)}
                                        >
                                            Continuar Entrega
                                            <ArrowLongRightIcon className="ml-2 h-3 w-3" />
                                        </Link>
                                    </Timeline.Content>
                                </Timeline.Item>
                            ))
                        }
                    </Timeline>
                </div>
                
                <Link
                    href={route("pedidos.create")}
                    className="fixed right-8 bottom-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Registrar Entrega
                </Link>
              
            </div>
        </AuthenticatedLayout>
    );
}
