'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[56vh] md:h-[70vh]">
      <Image
        src="/images/hero-trailer.jpg"
        alt="Lee's Concessions food trailer"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Food Trailer, Catering & ServSafe® Classes
        </h1>
        <p className="mt-3 text-lg opacity-90">
          Ohio provider. Book services or enroll in the next class.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/classes"
            className="px-6 py-3 rounded-2xl bg-[#D32F2F] hover:bg-red-700 font-semibold focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            Sign Up for a Class
          </Link>
          <Link
            href="/services#catering"
            className="px-6 py-3 rounded-2xl ring-2 ring-[#FFC107] bg-yellow-400/10 hover:bg-yellow-400/20 font-semibold focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
          >
            Book Catering
          </Link>
        </div>
      </div>
    </section>
  );
}
