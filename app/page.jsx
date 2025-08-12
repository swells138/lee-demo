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
    {/* darker overlay for small screens */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/15" />
    {/* add inner padding so buttons don’t hug the rounded bottom */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pb-8 sm:pb-0 text-center text-white">
      <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur">
        🍴 Family-owned • Ohio
      </span>
      {/* limit line length + resize on xs */}
      <h1 className="max-w-[16ch] text-[26px] leading-[1.15] font-extrabold tracking-tight sm:max-w-none sm:text-5xl">
        Professional Food Service, Catering &amp; ServSafe Training in Ohio
      </h1>
      <p className="mt-2 max-w-[32ch] text-white/90 sm:max-w-2xl">
        From festivals to private events—plus certified food safety classes.
      </p>
      {/* buttons: medium radius, centered, not full-bleed */}
      <div className="mt-5 flex w-full flex-col items-center gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-center">
        <Link
          href="/contact"
          className="w-[min(320px,90%)] sm:w-auto rounded-lg bg-[#FFD700] px-5 py-3 font-bold text-[#B00000] shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Book a Service
        </Link>
        <Link
          href="/classes"
          className="w-[min(320px,90%)] sm:w-auto rounded-lg bg-[#FF0000] px-5 py-3 font-bold text-white shadow hover:shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Sign Up for a Class
        </Link>
      </div>
    </div>
  </div>
</section>
