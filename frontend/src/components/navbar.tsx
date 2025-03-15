import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#1B1A1A] opacity-85 sticky top-0 z-50">
      {/* Logo */}
      <div className="w-40">
        <Image src="/logo.png" alt="Logo" width={20} height={20} />
      </div>

      {/* Links */}
      <div className="flex-1 text-[#D1D1D1] space-x-8 text-sm">
        <Link href="#">Home</Link>
        <Link
          href="#"
          className="text-blue-600 font-bold underline underline-offset-[1.5rem]"
        >
          <span className="text-[#F6F6F6]">Portfolio</span>
        </Link>
        <Link href="#">Mutual Funds</Link>
        <Link href="#">Tools</Link>
        <Link href="#">Transactions</Link>
      </div>

      {/* Nav icons */}
      <div>
        <Image src="/icons.png" alt="Icons" width={180} height={16} />
      </div>
    </nav>
  );
};

export default Navbar;
