import Footer from '@/containers/footer';
import Header from '@/containers/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Outsider store',
  description:
    'Outsider store is a fictional store for demonstration purposes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <Header />
        <main className='mt-28 md:mt-[4.25rem]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
