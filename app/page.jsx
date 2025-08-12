import Image from "next/image";
import Link from "next/link";
import ShopSection from "@/components/ShopSection";

export default function Home() {
  return (
    <div className="space-y-14 sm:space-y-20">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="relative aspect-[4/3] sm:aspect-[16/7] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/10">
          <Image
            src="/images/trailer.png"
            alt="Lee’s Concessions food trailer at an event"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur">
              🍴 Family-owned • Ohio
            </span>
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Professional Food Service, Catering &amp; ServSafe Training in Ohio
            </h1>
            <p className="mt-2 max-w-[34ch] text-white/90">
              From festivals to private events—plus certified food safety classes.
            </p>
            <div className="mt-5 flex w-full max-w-xs flex-col gap-3 sm:mt-6 sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-xl bg-[#FFD700] px-5 py-3 font-bold text-[#B00000] shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                Book a Service
              </Link>
              <Link
                href="/classes"
                className="w-full sm:w-auto rounded-xl bg-[#FF0000] px-5 py-3 font-bold text-white shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
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
        <p className="mt-2 text-gray-700 leading-relaxed">
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
      <section className="bg-[#FFD700] py-8 sm:py-10">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-extrabold text-[#B00000]">Featured Services</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 md:grid-cols-3">
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
        <h2 className="text-center text-2xl font-extrabold text-[#FF0000]">What People Say</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Taylor R.", quote: "The trailer was a hit—fast lines and amazing food!" },
            { name: "Jordan P.", quote: "Professional catering. Setup to cleanup was flawless." },
            { name: "Casey M.", quote: "ServSafe class was clear and practical. Highly recommend." },
          ].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-gray-900">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <div className="bg-gradient-to-b from-white to-gray-50/60 py-10 sm:py-12">
        <ShopSection />
      </div>

      {/* CTA */}
      <section className="bg-[#FF0000] py-8 sm:py-10 text-center text-white">
        <h2 className="text-2xl font-extrabold">Ready to work with us?</h2>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-white px-5 py-3 font-bold text-[#B00000] shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Contact Us
        </Link>
        {/* Safe area for iOS home indicator */}
        <div className="pt-[env(safe-area-inset-bottom)]" />
      </section>
    </div>
  );
}
