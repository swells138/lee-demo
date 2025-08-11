import Link from 'next/link';

export default function MobileActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur border-t">
      <div className="max-w-wrap mx-auto px-4 py-3 grid grid-cols-2 gap-3">
        <Link
          href="/services#catering"
          className="text-center rounded-xl px-4 py-3 bg-[#D32F2F] text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D32F2F]/50"
        >
          Book Catering
        </Link>
        <Link
          href="/classes"
          className="text-center rounded-xl px-4 py-3 ring-2 ring-[#FFC107] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC107]/50"
        >
          ServSafe® Classes
        </Link>
      </div>
    </div>
  );
}
