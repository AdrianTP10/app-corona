import {React, useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import {Button, Modal} from 'flowbite-react'
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

import TextInput from "@/Components/TextInput";
function CierrePedido({ auth, pedido}) {
    const { data, setData, patch, proccesing, reset, errors } = useForm({
        cantidad_devuelto: 0,
    });

    const submit = (e) => {
        
        
        e.preventDefault();
        patch(route("pedidos.update", pedido.id), { onSucces: () => reset() });
        
        
        
    };

    const [showingForm, setShowingForm] = useState(false)
    /* const [isConfirmed, setisConfirmed] = useState(false)
    const [showingModal, setShowingModal] = useState(false) */

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <Link href={route('dashboard')}>
                    <ChevronDoubleLeftIcon className="h-6 w-6 text-white" />
                    </Link>
                    <div className="text-white text-2xl font-bold">
                        Atención a devoluciones
                    </div>
                </>
            }
           
        >
            <Head title="Dashboard" />

            <div className="py-12 mt-24 ">
                <div className="w-2/3 sm:w-1/2 mx-auto sm:px-6 lg:px-8">
                    <div className="text-black text-center text-2xl font-bold w-full">
                        ¿Se efectuó la devolución?
                    </div>
                    <div className="flex justify-between">
                        <button
                            className={`mt-8 w-1/2 text-white bg-[#215bac] px-4 py-3 text-sm  tracking-widest uppercase hover:bg-[#f9de81] hover:text-gray-600 font-semibold rounded-md mr-2 mb-2 ${showingForm && 'bg-[#f9de81]' } `}
                            onClick={()=>setShowingForm(true)}
                        >
                            Si
                        </button>
                        <button
                            className={`mt-8 w-1/2 text-white bg-[#215bac] px-4 py-3 text-sm  tracking-widest uppercase hover:bg-[#f9de81] hover:text-gray-600 font-semibold rounded-md mr-2 mb-2 ${!showingForm && 'bg-[#f9de81]'}`}
                            onClick={()=>{setShowingForm(false); setData("cantidad_devuelto", 0)}}
                        >
                            No
                        </button>
                    </div>
                    
                   
                    <form onSubmit={submit}>
                        {showingForm &&
                            <>
                                <InputLabel>Cajas Devueltas</InputLabel>
                                
                                <TextInput
                                    type="number"
                                    min="0"
                                    max={parseInt(pedido.cantidad_pedido)}
                                    value={data.cantidad_devuelto}
                                    onChange={(e) =>
                                        setData("cantidad_devuelto", e.target.value)
                                    }
                                    className="w-full text-lg mt-2"
                                ></TextInput>
                                <InputError
                                    message={errors.cantidad_devuelto}
                                    className="mt-2"
                                />
                            </>
                        }

                        
                        <PrimaryButton
                            className="absolute right-8 bottom-8 mt-8 text-white  hover:bg-[#f9de81] hover:text-gray-600 font-medium rounded-lg mr-2 mb-2"
                            disabled={proccesing}
                        >
                            Finalizar entrega
                        </PrimaryButton>
                        {/* <button  onClick={() => setShowingModal(true)} className="mt-8 text-white bg-indigo-500 p-3  hover:bg-[#f9de81] hover:text-gray-600 font-medium rounded-lg mr-2 mb-2">
                            Finalizar entrega
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
                                    <ExclamationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                        ¿Deseas confirmar la entrega?
                                    </h3>
                                    <div className="flex justify-center gap-4">
                                        <Button
                                            className="mt-4 text-white  hover:bg-indigo-700 font-medium rounded-lg mr-2 mb-2"
                                            disabled={proccesing}
                                            onClick={() =>setisConfirmed(true)}
                                        >
                                            Confirmar entrega
                                        </Button> 

                                        <Button
                                            color="gray"
                                            onClick={() => setShowingModal(false)} 
                                        >
                                            No, cancelar
                                        </Button>
                                        </div>
                                </div>
                            </Modal.Body>
                        </Modal>  */}
                    </form>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default CierrePedido;
