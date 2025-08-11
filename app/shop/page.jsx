import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Shop() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50/40 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-red-600">Shop</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
