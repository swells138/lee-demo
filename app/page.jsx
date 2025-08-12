import Image from "next/image";
import Link from "next/link";
import ShopSection from "@/components/ShopSection";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/trailer.png"
            alt="Lee’s Concessions food trailer at an event"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
              🍴 Family-owned • Ohio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Professional Food Service, Catering &amp; ServSafe Training in Ohio
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              From festivals to private events—plus certified food safety classes.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-[#FFD700] px-5 py-3 font-bold text-[#B00000] shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                Book a Service
              </Link>
              <Link
                href="/classes"
                className="rounded-xl bg-[#FF0000] px-5 py-3 font-bold text-white shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                Sign Up for a Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold text-[#FF0000]">About Us</h2>
        <p className="mt-2 text-gray-700">
          Learn about our story and commitment to professional food service.
        </p>
        <Link
          href="/about"
          className="mt-3 inline-block font-bold text-[#FF0000] underline-offset-4 hover:underline"
        >
          Read More →
        </Link>
      </section>

      {/* FEATURED SERVICES */}
      <section className="bg-[#FFD700] py-10">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-extrabold text-[#B00000]">
            Featured Services
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Food Trailer",
                text: "Bring our red and yellow trailer to your next event.",
                href: "/contact?message=Food%20Trailer%20booking%20inquiry",
              },
              {
                title: "Catering",
                text: "Delicious spreads for parties and corporate events.",
                href: "/contact?message=Catering%20inquiry",
              },
              {
                title: "ServSafe Training",
                text: "Certified classes to keep your staff compliant.",
                href: "/classes",
                cta: "View Classes →",
              },
            ].map(({ title, text, href, cta }) => (
              <article
                key={title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-gray-700">{text}</p>
                <Link
                  href={href}
                  className="mt-3 inline-block font-semibold text-[#FF0000] underline-offset-4 hover:underline"
                >
                  {cta ?? "Book Now →"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold text-[#FF0000] text-center">What People Say</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Taylor R.", quote: "The trailer was a hit—fast lines and amazing food!" },
            { name: "Jordan P.", quote: "Professional catering. Setup to cleanup was flawless." },
            { name: "Casey M.", quote: "ServSafe class was clear and practical. Highly recommend." },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-gray-900">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <div className="bg-gradient-to-b from-white to-gray-50/60 py-12">
        <ShopSection />
      </div>

      {/* CTA */}
      <section className="bg-[#FF0000] py-10 text-center text-white">
        <h2 className="text-2xl font-extrabold">Ready to work with us?</h2>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-white px-5 py-3 font-bold text-[#B00000] shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
