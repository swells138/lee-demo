export default function TrustStrip() {
  const items = [
    'Ohio ServSafe® Instructor/Proctor',
    'Food Trailer & Catering',
    'Friendly, Professional Service',
  ];
  return (
    <section className="bg-[#FFF8E1]">
      <div className="max-w-wrap mx-auto px-4 py-6 grid gap-4 sm:grid-cols-3 text-center text-sm font-medium">
        {items.map(t => <div key={t} className="py-2">{t}</div>)}
      </div>
    </section>
  );
}
