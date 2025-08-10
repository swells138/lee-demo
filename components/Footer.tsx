import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFD700] text-[#FF0000]">
      <div className="mx-auto max-w-6xl p-4 text-center">
        <p className="font-bold">
          Mdl Professional Food Service LLC DBA Lee's Concessions
        </p>
        <p>
          <a href="mailto:mlee2@woh.rr.com" className="underline">
            mlee2@woh.rr.com
          </a>
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="#" className="hover:underline">
            Facebook
          </Link>
          <Link href="#" className="hover:underline">
            Instagram
          </Link>
        </div>
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} Lee's Concessions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
