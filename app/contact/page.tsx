import ContactForm from "@/components/ContactForm";
import EventBookingForm from "@/components/EventBookingForm";

export default function Contact({ searchParams }: { searchParams?: { product?: string } }) {
  const message = searchParams?.product
    ? `Interested in ${searchParams.product}`
    : "";

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4">
      <h1 className="text-3xl font-bold text-[#FF0000]">Contact Us</h1>
      <p>
        Email us at <a href="mailto:mlee2@woh.rr.com" className="underline">mlee2@woh.rr.com</a>
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Send a Message</h2>
          <ContactForm defaultMessage={message} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Book an Event</h2>
          <EventBookingForm />
        </div>
      </div>
    </div>
  );
}
