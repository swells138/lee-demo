import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#FF0000] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/LeesLOGO.JPG"
            alt="Lee's Concessions Logo"
            width={48}
            height={48}
            className="rounded"
          />
          <span className="font-bold">Lee's Concessions</span>
        </Link>
        <nav className="space-x-4 font-semibold">
          <Link href="/about" className="hover:text-[#FFD700]">
            About
          </Link>
          <Link href="/services" className="hover:text-[#FFD700]">
            Services
          </Link>
          <Link href="/classes" className="hover:text-[#FFD700]">
            Classes
          </Link>
          <Link href="/shop" className="hover:text-[#FFD700]">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-[#FFD700]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
