import ApplicationLogo from '@/Components/ApplicationLogo';
import LoginLogo from '@/Components/LoginLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#11284B] dark:bg-slate-600">
            <div>
                <Link href="/">
                    <LoginLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-5/6 border sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-slate-800 shadow-md overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}
