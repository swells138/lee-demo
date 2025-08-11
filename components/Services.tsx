import Link from 'next/link';

type Card = { title: string; body: string; cta: string; href: string; };
const cards: Card[] = [
  { title: 'Food Trailer', body: 'Fairs & festivals.', cta: 'Book Now', href: '/contact?type=trailer' },
  { title: 'Catering', body: 'Corporate & private events.', cta: 'Get a Quote', href: '/contact?type=catering' },
  { title: 'ServSafe® Training', body: 'Instructor/Proctor sessions.', cta: 'See Dates', href: '/classes' },
];

export default function Services() {
  return (
    <section className="max-w-wrap mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center">Featured Services</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
          >
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{c.body}</p>
            <Link
              href={c.href}
              className="mt-auto inline-block px-5 py-2 rounded-xl bg-[#D32F2F] text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D32F2F]/50"
            >
              {c.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
