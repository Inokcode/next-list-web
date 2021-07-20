import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo-only.png" width={80} height={80} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/inoks">
        <a>Inok Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
