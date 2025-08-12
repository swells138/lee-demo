import Image from "next/image";
import ClassSignupForm from "@/components/ClassSignupForm";

function formatDate(iso) {
  // e.g., 2025-07-15 -> Jul 15, 2025
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export default function Classes() {
  const schedule = [
    { date: "2025-06-01", location: "Dayton, OH" },
    { date: "2025-07-15", location: "Columbus, OH" },
  ].sort((a, b) => +new Date(a.date) - +new Date(b.date));

  return (
    <div className="mx-auto max-w-5xl space-y-10 p-4">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[21/7] sm:aspect-[16/5]">
          <Image
            src="/images/trailer.png"
            alt="Lee’s Concessions trailer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/80 via-[#FF0000]/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 text-white">
              <h1 className="text-3xl sm:text-4xl font-extrabold">ServSafe Classes</h1>
              <p className="mt-2 max-w-2xl text-white/90">
                Join our certified ServSafe courses so your team meets food safety standards
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-[#FF0000]">Upcoming Schedule</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {schedule.map((s) => (
            <article
              key={s.date}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD700]/80 px-3 py-1 text-sm font-bold text-[#B00000]">
                  {formatDate(s.date)}
                </span>
                <span className="text-sm text-gray-500">Seats limited</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.location}</h3>
              <p className="mt-1 text-gray-700">
                Full-day instructor-led training with proctoring available.
              </p>
              <a
                href="#signup"
                className="mt-4 inline-block rounded-xl bg-[#FF0000] px-4 py-2 font-semibold text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000]/60"
              >
                Reserve a spot
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="space-y-3">
        <h2 className="text-2xl font-extrabold text-[#FF0000]">What You’ll Learn</h2>
        <ul className="grid list-disc gap-2 pl-5 text-gray-700 sm:grid-cols-2">
          <li>Time/temperature control (TCS) and preventing cross-contamination</li>
          <li>Personal hygiene, cleaning & sanitizing best practices</li>
          <li>Receiving, storage, and preparation procedures</li>
          <li>Allergen awareness and consumer advisories</li>
          <li>Exam prep tips and certification steps</li>
        </ul>
      </section>

      {/* SIGN UP */}
      <section id="signup" className="space-y-4">
        <h2 className="text-2xl font-extrabold text-[#FF0000]">Sign Up</h2>
        <p className="text-gray-700">
          Submit the form and we’ll confirm your seat and send class details by email.
        </p>
        <ClassSignupForm />
        <p className="text-sm text-gray-500">
          Need a private group class at your location?{" "}
          <a
            href="/contact"
            className="font-semibold text-[#FF0000] underline-offset-4 hover:underline"
          >
            Contact us
          </a>
          .
        </p>
      </section>
    </div>
  );
}
