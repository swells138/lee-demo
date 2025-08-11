import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ShopSection() {
  return (
    <section aria-labelledby="shop-heading" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="shop-heading" className="text-2xl sm:text-3xl font-extrabold text-red-600">Shop</h2>
        <Link href="/shop" className="text-sm font-medium hover:underline">View All →</Link>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
