import Image from "next/image";
import Link from "next/link";
import ShopSection from "@/components/ShopSection";

export default function Home() {
  return (
    <main className="space-y-16 sm:space-y-24">
      {/* HERO */}
      <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/10">
          {/* Height behavior: tall on mobile, aspect on md+ */}
          <div className="relative min-h-[65vh] md:min-h-0 md:aspect-[16/7]">
            <Image
              src="/images/trailer.png"
              alt="Lee’s Concessions food trailer serving guests at an event"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/20" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-5 py-10 text-center text-white sm:py-14">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur">
                  🍴 Family-owned • Ohio
                </span>

                <h1
                  id="hero-title"
                  className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                >
                  Professional Food Service, Catering &amp; ServSafe Training in Ohio
                </h1>

                <p className="mx-auto mt-3 max-w-[40ch] text-white/90 sm:mt-4">
                  From festivals to private events—plus certified food safety classes.
                </p>

                <div className="mx-auto mt-6 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto rounded-xl bg-[#FFD700] px-5 py-3 font-bold text-[#B00000] shadow transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    aria-label="Book a service"
                  >
                    Book a Service
                  </Link>
                  <Link
                    href="/classes"
                    className="w-full sm:w-auto rounded-xl bg-[#FF0000] px-5 py-3 font-bold text-white shadow transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    aria-label="Sign up for a ServSafe class"
                  >
                    Sign Up for a Class
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* iOS safe area */}
          <div className="pt-[env(safe-area-inset-bottom)]" />
        </div>
      </section>

      {/* ABOUT */}
      <section aria-labelledby="about-title" className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[1fr_auto]">
          <div>
            <h2 id="about-title" className="text-2xl font-extrabold text-[#FF0000]">
              About Us
            </h2>
            <p className="mt-2 max-w-prose leading-relaxed text-gray-700">
              We’re a family-owned, professional food service company offering a crowd-pleasing food
              trailer, full-service catering, and ServSafe® training for Ohio businesses. Our focus
              is simple: great food, smooth service, and safety you can trust.
            </p>
          </div>
          <div className="sm:pt-1">
            <Link
              href="/about"
              className="inline-flex items-center gap-1 font-bold text-[#FF0000] underline-offset-4 hover:underline"
              aria-label="Read more about Lee’s Concessions"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section
        aria-labelledby="services-title"
        className="bg-[#FFD700] py-10 sm:py-14"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="services-title" className="text-center text-2xl font-extrabold text-[#B00000]">
            Featured Services
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Food Trailer",
                text: "Bring our red & yellow trailer to your next festival or fundraiser.",
                href: "/contact?message=Food%20Trailer%20booking%20inquiry",
                cta: "Book the Trailer →",
              },
              {
                title: "Catering",
                text: "From family parties to corporate events—hot, fresh, on time.",
                href: "/contact?message=Catering%20inquiry",
                cta: "Plan Catering →",
              },
              {
                title: "ServSafe Training",
                text: "Certified classes to keep your team compliant and confident.",
                href: "/classes",
                cta: "View Classes →",
              },
            ].map(({ title, text, href, cta }) => (
              <article
                key={title}
                className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-700">{text}</p>
                <Link
                  href={href}
                  className="mt-3 inline-block font-semibold text-[#FF0000] underline-offset-4 group-hover:underline"
                  aria-label={`${cta} for ${title}`}
                >
                  {cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-title" className="mx-auto max-w-6xl px-4">
        <h2 id="testimonials-title" className="text-center text-2xl font-extrabold text-[#FF0000]">
          What People Say
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
      <section aria-labelledby="shop-title" className="bg-gradient-to-b from-white to-gray-50/60 py-12 sm:py-16">
        <h2 id="shop-title" className="sr-only">
          Shop
        </h2>
        <ShopSection />
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-title"
        className="bg-[#FF0000] px-4 py-10 text-center text-white sm:py-14"
      >
        <h2 id="cta-title" className="text-2xl font-extrabold">
          Ready to work with us?
        </h2>
        <p className="mx-auto mt-2 max-w-[42ch] text-white/90">
          Tell us about your event or training needs—our team will follow up fast.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-xl bg-white px-5 py-3 font-bold text-[#B00000] shadow transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Contact Us
        </Link>
        <div className="pt-[env(safe-area-inset-bottom)]" />
      </section>
    </main>
  );
}
