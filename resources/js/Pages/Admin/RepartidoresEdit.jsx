import AdminLayout from '@/Layouts/AdminLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Toast } from 'flowbite-react';
import { ShieldCheckIcon } from "@heroicons/react/24/outline";




export default function RepartidoresEdit({auth, repartidor}) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: repartidor.name,
        username: repartidor.username,
    });

    /* useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []); */

    const submit = (e) => {
        e.preventDefault();
        patch(route('admin.repartidores.update',repartidor.id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        })
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="text-white text-2xl font-bold">
                    Editar cuenta
                </h2>
            }
        >
            <Head title="Editar Repartidor" />

            <div className="py-12">
                   
                <div className="w-2/3 sm:w-1/2 mx-auto sm:px-6 lg:px-8">
                    {/* <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-200 dark:bg-green-800 dark:text-green-200">
                        <ShieldCheckIcon className="h-6 w-6 text-gray-500" />
                        </div>
                        <div className="ml-3 text-sm font-normal">
                        Usuario Creado Correctamente
                        </div>
                        <Toast.Toggle />
                    </Toast> */}
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nombre" />

                            <TextInput
                               id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                               
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="username" value="Código/Usuario" />

                            <TextInput
                               id="username"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full"
                                
                                onChange={(e) => setData('username', e.target.value)}
                                required
                            />

                            <InputError message={errors.username} className="mt-2" />
                        </div>

                   

                <div className="flex items-center justify-end mt-4">
             

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Actualizar Repartidor
                    </PrimaryButton>
                </div>
                    </form>

                    
                </div>
            </div>
           
        </AdminLayout>
    );
}