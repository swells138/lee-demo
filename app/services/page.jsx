import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Food Trailer",
      blurb: "Our classic red & yellow trailer serves crowds at festivals, fairs, and private events across Ohio.",
      points: ["Fast service for large lines", "Self-contained setup", "Crowd-favorite menu"],
      href: "/contact?message=Food%20Trailer%20booking%20inquiry",
      cta: "Book Trailer",
      icon: "🌭",
    },
    {
      title: "Catering",
      blurb: "Customized menus and professional service for parties, weddings, and corporate events.",
      points: ["Menu planning & tastings", "On-site staff available", "Setup & cleanup options"],
      href: "/contact?message=Catering%20inquiry",
      cta: "Get a Quote",
      icon: "🍽️",
    },
    {
      title: "ServSafe Training",
      blurb: "Certified instruction to keep your team compliant and confident with food safety standards.",
      points: ["Instructor-led classes", "Exam prep & proctoring", "Certificates provided"],
      href: "/classes",
      cta: "View Classes",
      icon: "📚",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-extrabold text-[#FF0000]">Services</h1>
        <p className="mt-2 text-gray-700">
          From crowd-pleasing concessions to full-service catering and professional training,
          we’ve got you covered.
        </p>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-black/5 bg-white/95 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFD700]/80 text-xl">
                  {s.icon}
                </span>
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>

              <p className="mt-3 text-gray-700">{s.blurb}</p>

              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF0000]" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link
                  href={s.href}
                  className="inline-flex items-center justify-center rounded-xl bg-[#FF0000] px-4 py-2 font-semibold text-white shadow hover:shadow-md transition hover:-translate-y-0.5"
                >
                  {s.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl bg-[#FFD700]/80 p-6 text-center shadow-sm">
          <p className="text-lg font-semibold text-[#B00000]">
            Not sure which service you need?{" "}
            <Link href="/contact" className="underline underline-offset-4">
              Contact us
            </Link>{" "}
            and we’ll help you plan the perfect setup.
          </p>
        </div>
      </section>
    </div>
  );
}
