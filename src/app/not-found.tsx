'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const NotFoundPage = () => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== '/404') {
            router.replace('/404');
        }
    }, [pathname, router]);

    return (
        <div className="text-center text-white flex flex-col items-center" >
            <div className="flex flex-col items-center pt-12" >
                <Image className='w-full'
                    src="/404Error.jpg"
                    alt="404 Not found"
                    width={800}
                    height={800}
                />
                <p className='pt-8 text-black'>Lo sentimos, no puedo encontrar la página que estás buscando.</p>
            </div>
            <Link href="/" style={{ textDecoration: 'none', color: 'blue', paddingBottom: '4rem' }}>
            Regresar a la página de inicio.
            </Link>
        </div>
    );
};

export default NotFoundPage;
