import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Inok List</h1>
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
