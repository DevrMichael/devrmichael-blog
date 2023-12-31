import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import logo from './icons/logo.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevrMichael',
  description: 'A personal portfolio site built with Sanity and Next.js',
  openGraph: {
    images: 'add-your-open-graph-image-url-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
