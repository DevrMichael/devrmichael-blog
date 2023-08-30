import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../icons/logo.png';

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={35} height={35} alt="logo" />
        </Link>
        <nav className="flex items-center gap-x-8">
          <Link href="/about" className="hover:text-purple-400 duration-300">
            About
          </Link>
          <Link href="/blog" className="hover:text-purple-400 duration-300">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
