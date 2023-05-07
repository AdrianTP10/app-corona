import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";




import TextInput from "@/Components/TextInput";

function RegistroPedido({ auth, rutas}) {
  const { data, setData, post, proccesing, reset, errors } = useForm({
    bdr: "",
    nombre: "",
    cantidad_pedido: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("pedidos.store"), { onSucces: () => reset() });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <>
          <Link href={route('dashboard')}>
            <ChevronDoubleLeftIcon className="h-6 w-6 text-white" />
          </Link>
          <div className="text-white text-2xl font-bold">
            Registrar Entrega
          </div>
        </>
      }
     
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="w-2/3 sm:w-1/2 mx-auto sm:px-6 lg:px-8">
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
                    value={rutas.id}
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
            <InputError
              message={errors.bdr}
              className="mt-2"
            />
            <InputLabel>Cajas del Pedido</InputLabel>
              {/* <input 
              value={data.descripcion}
              onChange={e => setData('descripcion', e.target.value)}
              type='text'
              autoFocus
              className="mb-3 block w-full border-gray-300 rounded-lg"
              name="descripcion"
              /> */}
            <TextInput
              type="number"
              min = "1"
              onChange={(e) =>
                  setData("cantidad_pedido", e.target.value)
              }
              className="w-full text-lg mt-2"
            >
            </TextInput>
            <InputError
              message={errors.cantidad_pedido}
              className="mt-2"
            />

            

            {/* <Link
                href={route("pedidos.index")}
                className="mt-4 font-semibold text-xs text-white bg-red-600 hover:bg-red-700 rounded-md mr-2 mb-2 px-4 py-2 uppercase"
            >
                Cancelar
            </Link> */}
            <PrimaryButton
                className="mt-8 text-white  hover:bg-[#f9de81] hover:text-gray-600 font-medium rounded-lg  mb-2"
                disabled={proccesing}
            >
                Comenzar Entrega
            </PrimaryButton>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
    
  );
}

export default RegistroPedido;
