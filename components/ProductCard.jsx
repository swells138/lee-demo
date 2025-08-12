"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const {
    title,
    description,
    price,          // already formatted text
    priceValue,     // keep if you still want numeric
    imageSrc,
    imageAlt = "",
    href = "/contact",
    badge,          // e.g., "Best Seller"
    inStock = true, // boolean
    serves,         // e.g., "Serves 8–10"
  } = product;

  const contactHref = `${href}?subject=${encodeURIComponent("Order Inquiry: " + title)}`;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-white/95 ring-1 ring-black/10 shadow-md transition
      ${inStock ? "hover:shadow-lg" : "opacity-70"}`}
      aria-disabled={!inStock}
    >
      {/* Badges */}
      <div className="absolute left-3 top-3 z-10 flex gap-2">
        {badge && (
          <span className="rounded-full bg-[#FFD700] px-3 py-1 text-xs font-bold text-[#B00000] shadow">
            {badge}
          </span>
        )}
        {!inStock && (
          <span className="rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white shadow">
            Out of stock
          </span>
        )}
      </div>

      <div className="relative w-full aspect-square md:aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-red-600">{price}</p>
          {serves && <span className="text-xs text-gray-500">{serves}</span>}
        </div>

        <div className="mt-4">
          <Link
            href={inStock ? contactHref : "#"}
            aria-label={`Order inquiry for ${title}`}
            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition
              ${inStock
                ? "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
            tabIndex={inStock ? 0 : -1}
          >
            {inStock ? "Order Inquiry" : "Unavailable"}
          </Link>
        </div>
      </div>
    </article>
  );
}
