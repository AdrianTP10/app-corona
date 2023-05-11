import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import {Table, Modal} from 'flowbite-react'
import { useState } from "react";



export default function RutasIndex({ auth, rutas}) {
   
    
    return(
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="text-white text-2xl font-bold">
                    Tabla de Rutas
                </h2>
            }
        
        >
            <Head title="Rutas" />

            <div className=" relative py-12 min-h-full">
            <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
                <div className="my-8">
                    <Link 
                        href={route('admin.rutas.create')}
                        className="px-4 py-3  justify-self-end bg-[#215bac] border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-[#f9de81] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Crear Ruta</Link>
                </div>

               
                <Table  className="overflow-x-scroll" hoverable={true}  striped={true} >
                    <Table.Head >
                        <Table.HeadCell className="text-base">ID</Table.HeadCell>
                        <Table.HeadCell className="text-base">Ruta</Table.HeadCell>
                        
                        
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        
                        {
                        rutas.map((ruta)=>(
                            <Table.Row key={ruta.id.toString()} className="bg-white text-gray-600 dark:text-white dark:border-gray-700 dark:bg-gray-800 text-base " >
                                <Table.Cell className="whitespace-nowrap font-medium ">
                                    {ruta.id}
                                </Table.Cell>
                                <Table.Cell>{ruta.nombre}</Table.Cell>
                                
                                
                                
                                
                                <Table.Cell>
                                    <a
                                        href="/tables"
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Editar
                                    </a>
                                </Table.Cell>
                        </Table.Row>
                        ))
        
                        }
                        
                    </Table.Body>
                </Table>

                
            </div>
            </div>
        </AdminLayout>
   );
}
