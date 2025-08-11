"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { title, description, price, imageSrc, imageAlt = "", href = "/contact" } = product;

  return (
    <article className="group bg-white/95 backdrop-blur rounded-2xl shadow-md ring-1 ring-black/10 hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative w-full aspect-square md:aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority={false}
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <p className="mt-2 text-lg font-bold text-red-600">{price}</p>

        <div className="mt-4">
          <Link
            href={href}
            aria-label={`Order inquiry for ${title}`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 transition"
          >
            Order Inquiry
          </Link>
        </div>
      </div>
    </article>
  );
}
