'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const shopEnabled = process.env.NEXT_PUBLIC_SHOP_ENABLED === 'true';

  const links = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/classes', label: 'Classes' },
    ...(shopEnabled ? [{ href: '/shop', label: 'Shop' }] : []),
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#D32F2F] text-white shadow-sm">
      <div className="max-w-wrap mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/LeesLOGO.JPG" alt="Lee's Concessions logo" width={40} height={40} sizes="40px" className="rounded" />
          <span className="font-bold">Lee's Concessions</span>
        </Link>
        <nav className="hidden md:flex gap-6 font-semibold">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-2 py-1 rounded hover:bg-red-700/40 focus:outline-none focus:ring-2 focus:ring-white/50">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav id="mobile-nav" className={`${open ? 'max-h-60' : 'max-h-0'} overflow-hidden transition-all md:hidden bg-[#D32F2F]`}>
        <div className="flex flex-col px-4 pb-4 gap-2 font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block px-2 py-2 rounded hover:bg-red-700/40" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
