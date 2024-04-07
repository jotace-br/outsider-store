import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='text-gray-600 body-font fixed top-0 left-0 w-full bg-white z-10 shadow-md'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          href='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <Image
            src='/outsider-logo.png'
            alt='Outsider logo'
            width={24}
            height={24}
            priority
          />
          <span className='ml-3 text-xl'>Outsider Store</span>
        </Link>

        <nav className='md:ml-auto flex flex-wrap gap-4 items-center text-base justify-center'>
          <Link href='/' className='hover:text-gray-900'>
            Menu Principal
          </Link>
          <Link href='#produtos' className='hover:text-gray-900'>
            Nossos Produtos
          </Link>
        </nav>
      </div>
    </header>
  );
}
