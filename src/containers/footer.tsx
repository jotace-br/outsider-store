import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <Link
          href='/'
          className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'
        >
          <Image
            src='/outsider-logo.png'
            alt='Outsider logo'
            width={24}
            height={24}
          />
          <span className='ml-3 text-xl'>Outsider Store</span>
        </Link>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2024 Outsider Store —
          <a
            href='https://www.linkedin.com/in/juliocesardev/'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            @juliocesardev
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a
            href='https://www.linkedin.com/in/juliocesardev/'
            className='ml-3 text-gray-500'
          >
            <svg
              fill='currentColor'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='0'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path
                stroke='none'
                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
              ></path>
              <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
