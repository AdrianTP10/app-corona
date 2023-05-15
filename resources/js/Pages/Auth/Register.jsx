import { useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Toast } from 'flowbite-react';
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";





export default function Register({auth}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        /* password: '',
        password_confirmation: '', */
    });

    /* useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []); */

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            preserveScroll: true,
            onSuccess: () => reset('name','username'),
        })
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="text-white text-2xl font-bold">
                    Registrar Repartidor
                </h2>
            }
        >
            <Head title="Registrar Repartidor" />

            <div className="py-12">
                   
                <div className="w-2/3 sm:w-1/2 mx-auto sm:px-6 lg:px-8">
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-200 dark:bg-green-800 dark:text-green-200">
                        {/* <ShieldCheckIcon className="h-6 w-6 text-gray-500" /> */}
                        
                        <ShieldExclamationIcon className="h-6 w-6 text-gray-500" />
                        </div>
                        <div className="ml-3 text-sm font-normal">
                        Contraseña por defecto: password
                        </div>
                        <Toast.Toggle />
                    </Toast>
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

                       {/*  <div className="mt-4">
                            <InputLabel htmlFor="password" value="Contraseña" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div> */}

                <div className="flex items-center justify-end mt-4">
                   {/*  <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link> */}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Registrar
                    </PrimaryButton>
                </div>
                    </form>

                    
                </div>
            </div>
           
        </AdminLayout>
    );
}
