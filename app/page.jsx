import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <div className="relative mx-auto h-100 max-w-5xl">
          <Image
            src="/images/trailer.png"
            alt="Food trailer"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
            <h1 className="text-3xl font-bold">
              Professional Food Service, Catering & ServSafe Training in Ohio
            </h1>
            <div className="mt-4 space-x-4">
              <Link
                href="/contact"
                className="rounded bg-[#FFD700] px-4 py-2 font-bold text-[#FF0000]"
              >
                Book a Service
              </Link>
              <Link
                href="/classes"
                className="rounded bg-[#FF0000] px-4 py-2 font-bold text-white"
              >
                Sign Up for a Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-[#FF0000]">About Us</h2>
        <p className="mt-2">
          Learn about our story and commitment to professional food service.
        </p>
        <Link href="/about" className="mt-2 inline-block font-bold text-[#FF0000]">
          Read More →
        </Link>
      </section>

      <section className="bg-[#FFD700] py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl font-bold text-[#FF0000]">Featured Services</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded bg-white p-4">
              <h3 className="font-bold">Food Trailer</h3>
              <p>Bring our red and yellow trailer to your next event.</p>
              <Link href="/contact" className="text-[#FF0000] hover:underline">
                Book Now →
              </Link>
            </div>
            <div className="rounded bg-white p-4">
              <h3 className="font-bold">Catering</h3>
              <p>Delicious spreads for parties and corporate events.</p>
              <Link href="/contact" className="text-[#FF0000] hover:underline">
                Book Now →
              </Link>
            </div>
            <div className="rounded bg-white p-4">
              <h3 className="font-bold">ServSafe Training</h3>
              <p>Certified classes to keep your staff compliant.</p>
              <Link href="/classes" className="text-[#FF0000] hover:underline">
                View Classes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl font-bold text-[#FF0000]">Testimonials</h2>
        <p className="mt-2">Customer reviews coming soon.</p>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-[#FF0000]">Shop</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ProductCard
            title="Box Lunch"
            image="/images/tenderloin.png"
            description="Perfect individual meals for any gathering."
            price="$12"
          />
          <ProductCard
            title="Party Tray"
            image="/images/pretzel.png"
            description="Feeds the whole crowd with ease."
            price="$45"
          />
        </div>
        <Link href="/shop" className="mt-4 inline-block font-bold text-[#FF0000]">
          View All →
        </Link>
      </section>

      <section className="bg-[#FF0000] py-8 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to work with us?</h2>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded bg-white px-4 py-2 font-bold text-[#FF0000]"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
