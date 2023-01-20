import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link
          href="/"
          className="flex items-center justify-between space-x-2 font-bold px-10 py-5"
        >
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src="https://links.papareact.com/1m8"
            alt="logo"
          />
        </Link>
        <h1>Gains Supply</h1>
      </div>
    </header>
  );
}

export default Header;
