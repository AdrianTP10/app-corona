import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {Timeline} from 'flowbite-react';
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";;
import { CubeIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";



export default function Dashboard({ auth, pedidos}) {
    
    return (
       
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="flex text-2xl items-center overflow-x-hidden max-w-full font-bold text-white ">
                    Bienvenido <ChevronRightIcon className="h-5 w-6 stroke-2 text-white" />   {auth.user.name}
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
                                    
                                    <Timeline.Point  icon={CubeIcon} />
                                    <Timeline.Content>
                                        <Timeline.Time ><h1 className="text-xl ">{pedido.fecha} </h1></Timeline.Time>
                                        <h1 className="text-xl font-bold ">
                                            Pedido {pedido.id}
                                        </h1>
                                        <Timeline.Body>
                                            <p className="text-xl text-gray-700 ">
                                                Ruta: {pedido.ruta}
                                            </p>
                                            <p className="text-xl text-gray-700 ">
                                                Cantidad Pedido: {pedido.cantidad_pedido}
                                            </p>
                                            <p className="text-xl text-gray-700 ">
                                                Cantidad Devuelto: {pedido.cantidad_devuelto}
                                            </p>
                                        </Timeline.Body>
                                        <Link 
                                            className={pedido.editable ? 'hidden'  :'flex bg-white rounded-lg p-2 w-5/6 md:w-2/3 lg:w-1/3 text-lg items-center border-gray-300 border'}
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
                    className="fixed right-8 bottom-8 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-md"
                >
                    Registrar Entrega
                </Link>
              
            </div>
        </AuthenticatedLayout>
    );
}
