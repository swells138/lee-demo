import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import EventBookingForm from "@/components/EventBookingForm";

export default function Contact({ searchParams = {} }) {
  const product = typeof searchParams.product === "string" ? decodeURIComponent(searchParams.product) : "";
  const message = product ? `Interested in ${product}` : "";

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-2xl aspect-[21/9] sm:aspect-[16/7]">
            <Image
              src="/images/trailer.png"
              alt="Lee’s Concessions trailer"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              className="object-cover scale-[1.02]"
            />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6">
                <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#FF0000]">Contact Us</h1>
                <p className="mt-2 text-gray-800/90">
                  We’ll get back to you within 1 business day.
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:mlee2@woh.rr.com"
                    className="font-semibold underline underline-offset-4"
                  >
                    mlee2@woh.rr.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMS */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white/95 p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#FF0000]">Send a Message</h2>
            <p className="mt-1 text-gray-600">General questions, menu requests, anything!</p>
            <div className="mt-5">
              <ContactForm defaultMessage={message} />
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/95 p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#FF0000]">Book an Event</h2>
            <p className="mt-1 text-gray-600">Tell us about your date, location, and crowd size.</p>
            <div className="mt-5">
              <EventBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-[#FF0000] px-6 py-6 text-center text-white shadow-sm">
          <p className="text-lg font-semibold">Prefer to call? (555) 555-5555 • 9am–6pm</p>
        </div>
      </section>
    </div>
  );
}
