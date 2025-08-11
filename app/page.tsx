import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import MobileActions from '@/components/MobileActions';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <section className="max-w-wrap mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#D32F2F]">About Us</h2>
        <p className="mt-4 text-gray-700">Learn about our story and commitment to professional food service.</p>
        <Link href="/about" className="mt-6 inline-block font-bold text-[#D32F2F] hover:underline">
          Read More →
        </Link>
      </section>
      <section className="bg-[#D32F2F] text-white py-16 text-center">
        <div className="max-w-wrap mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to work with us?</h2>
          <Link href="/contact" className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-[#D32F2F]">
            Contact Us
          </Link>
        </div>
      </section>
      <MobileActions />
    </>
  );
}
