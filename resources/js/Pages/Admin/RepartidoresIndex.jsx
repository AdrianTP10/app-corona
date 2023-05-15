import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import {Table, Modal} from 'flowbite-react'
import { useState } from "react";



export default function RutasIndex({ auth, repartidores}) {
   
    
    return(
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="text-white text-2xl font-bold">
                    Tabla de Repartidores
                </h2>
            }
        
        >
            <Head title="Repartidores" />

            <div className=" relative py-12 min-h-full">
            <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        
                <Link 
                    href={route('register')}
                    className="px-4 py-3  justify-self-end bg-[#215bac] border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-[#f9de81] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                >
                    Registrar Repartidor
                </Link>
              

                <div className="overflow-y-auto h-[500px] my-10">
                    <Table  className="overflow-x-scroll" hoverable={true}  striped={true} >
                        <Table.Head >
                            <Table.HeadCell className="text-base">ID</Table.HeadCell>
                            <Table.HeadCell className="text-base">Código/Usuario</Table.HeadCell>
                            <Table.HeadCell className="text-base">Nombre</Table.HeadCell>
                            
                            
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            
                            {
                            repartidores.map((repartidor)=>(
                                <Table.Row key={repartidor.id.toString()} className="bg-white text-gray-600 dark:text-white dark:border-gray-700 dark:bg-gray-800 text-base " >
                                    <Table.Cell className="whitespace-nowrap font-medium ">
                                        {repartidor.id}
                                    </Table.Cell>
                                    <Table.Cell>{repartidor.username}</Table.Cell>
                                    <Table.Cell>{repartidor.name}</Table.Cell>
                                    
                                    
                                    
                                    <Table.Cell>
                                        <Link
                                            href={route('admin.repartidores.edit',repartidor.id)}
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Editar
                                        </Link>
                                    </Table.Cell>
                            </Table.Row>
                            ))
            
                            }
                            
                        </Table.Body>
                    </Table>
                </div>
                
            </div>
            </div>
        </AdminLayout>
   );
}
