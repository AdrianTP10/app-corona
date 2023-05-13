import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import {Timeline,Modal, Button} from 'flowbite-react';
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";;
import { CubeIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Head, Link, useForm } from "@inertiajs/react";


import { useState } from "react";




export default function Dashboard({ auth, pedidos}) {
    const [showingModal, setShowingModal] = useState(false)
    const rutas = [
        {id: '1', nombre: "BD534" }
    ]
    const { data, setData, post, proccesing, reset, errors } = useForm({
        bdr: "",
        nombre: "",
        cantidad_pedido: "",
      });
    
    const submit = (e) => {
        e.preventDefault();
        //post(route("pedidos.store"), { onSucces: () => reset() });
    };
    return (
       
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="flex text-2xl items-center overflow-x-hidden max-w-full font-bold text-white ">
                    Bienvenido <ChevronRightIcon className="h-5 w-6 stroke-2 text-white" />   {auth.user.name}
                </h2>
            }
            
        >
            <Head title="Inicio" />
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
                {/* <button  onClick={() => setShowingModal(true)} className="fixed right-8 bottom-8 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-md">
                    Registrar Entrega
                </button> */}

               {/*  <Modal
                    show={showingModal}
                    size="md"
                    popup={true}
                    onClose={() => setShowingModal(false)} 
                    >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <form onSubmit={submit}>
                                <InputLabel  >Ruta</InputLabel>
                                    <select
                                    defaultValue={999}
                                    id="rutas"
                                    onChange={(e) => setData("nombre", e.target.value)}
                                    className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
                                    >
                                        <option value={999}>Seleciona una ruta</option>
                                        {rutas.map((ruta) => (
                                            <option
                                                key={ruta.id.toString()}
                                                value={ruta.id}
                                                className="bg-gray-200"
                                            >
                                                {ruta.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.nombre} className="mt-2" />
                                
                                <InputLabel>BDR</InputLabel>
                                    <TextInput
                                    type="text"
                                    
                                    onChange={(e) =>
                                        setData("bdr", e.target.value)
                                    }
                                    className="w-full text-lg mt-2"
                                    >
                                    </TextInput>
                                    <InputError message={errors.bdr} className="mt-2"/>

                                    <InputLabel>Cajas del Pedido</InputLabel>
                                    <TextInput
                                        type="number"
                                        min = "1"
                                        onChange={(e) =>
                                            setData("cantidad_pedido", e.target.value)
                                        }
                                        className="w-full text-lg mt-2"
                                    >
                                    </TextInput>
                                    <InputError message={errors.cantidad_pedido} className="mt-2"/>

                

                               
                                
                                <div className="flex justify-center gap-4">
                                    <PrimaryButton
                                        className="mt-8 text-white  hover:bg-[#f9de81] hover:text-gray-600 font-medium rounded-lg  mb-2"
                                        disabled={proccesing}
                                    >
                                        Comenzar Entrega
                                    </PrimaryButton>

                                    <Button
                                        color="gray"
                                        onClick={() => setShowingModal(false)} 
                                    >
                                        No, cancelar
                                    </Button>
                                </div>
                            </form>  
                        </div>
                    </Modal.Body>
                </Modal>  */}
              
            </div>
        </AuthenticatedLayout>
    );
}
