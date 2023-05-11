import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

function RutasCreate({ auth}) {
  const { data, setData, post, proccesing, reset, errors } = useForm({
    nombre: "",
  });

  
  const submit = (e) => {
    e.preventDefault();
    post(route("admin.rutas.store"), {
        preserveScroll: true,
        onSuccess: () => reset('nombre'),
      })
  };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <>
                <Link href={route('admin.pedidos.index')}>
                    <ChevronDoubleLeftIcon className="h-6 w-6 text-white" />
                </Link>
                <div className="text-white text-2xl font-bold">
                    Registrar Ruta
                </div>
                </>
            }
        >
        <Head title="Crear Ruta" />

        <div className="py-12">
            <div className="w-2/3 sm:w-1/2 mx-auto sm:px-6 lg:px-8">
            <form onSubmit={submit}>
                <InputLabel  >Ruta</InputLabel>
                
                <TextInput
                type="text"
                value={data.nombre}
                onChange={(e) =>
                    setData("nombre", e.target.value)
                }
                className="w-full text-lg mt-2"
                >
                </TextInput>
                <InputError
                message={errors.nombre}
                className="mt-2"
                />
            
                <PrimaryButton
                    className="mt-8 text-white   hover:text-gray-600 font-medium rounded-lg  mb-2"
                    disabled={proccesing}
                >
                    Registrar Ruta
                </PrimaryButton>

            
            </form>
            </div>
        </div>
        </AdminLayout>
  );
}

export default RutasCreate;
