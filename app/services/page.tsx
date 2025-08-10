import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Food Trailer",
      description: "Our classic red and yellow trailer serves crowds at events across Ohio.",
    },
    {
      title: "Catering",
      description: "Customized menus and professional service for parties and corporate events.",
    },
    {
      title: "ServSafe Training",
      description: "Certified instruction to keep your team compliant and safe.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4">
      <h1 className="text-3xl font-bold text-[#FF0000]">Services</h1>
      {services.map((s) => (
        <div key={s.title} className="space-y-2">
          <h2 className="text-2xl font-bold">{s.title}</h2>
          <p>{s.description}</p>
          <Link href="/contact" className="font-bold text-[#FF0000]">
            Book Now →
          </Link>
        </div>
      ))}
    </div>
  );
}
