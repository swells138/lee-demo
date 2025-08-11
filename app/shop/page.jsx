import ProductCard from "@/components/ProductCard";
import products from "@/lib/products";

export default function Shop() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4">
      <h1 className="text-3xl font-bold text-[#FF0000]">Shop</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
