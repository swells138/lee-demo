import Link from "next/link";
import ShopSection from "@/components/ShopSection";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

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

      <div className="bg-gradient-to-b from-white to-gray-50/40 py-10 sm:py-12">
        <ShopSection />
      </div>

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
