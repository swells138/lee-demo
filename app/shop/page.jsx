"use client";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/money";

export default function Shop() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("featured"); // featured | price-asc | price-desc

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category || "Other"));
    return ["All", ...Array.from(set)];
  }, []);

  const visible = useMemo(() => {
    let list = products.filter(p => {
      const text = (p.title + " " + (p.description || "")).toLowerCase();
      const matchQ = q.trim() ? text.includes(q.trim().toLowerCase()) : true;
      const matchCat = cat === "All" ? true : (p.category || "Other") === cat;
      return matchQ && matchCat;
    });
    if (sort === "price-asc") list.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
    if (sort === "price-desc") list.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
    return list;
  }, [q, cat, sort]);

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4">
      <h1 className="text-3xl font-bold text-[#FF0000]">Shop</h1>

      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition
                ${cat === c ? "bg-[#FF0000] text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search menu…"
            className="w-full sm:w-64 rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF0000]/60"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF0000]/60"
            aria-label="Sort"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.length ? (
          visible.map((p) => (
            <ProductCard key={p.id} product={{ ...p, price: formatPrice(p.priceValue) }} />
          ))
        ) : (
          <p className="text-gray-600">No items match your search.</p>
        )}
      </div>

      <p className="text-sm text-gray-500">
        Prices are estimates; final quotes provided upon confirmation. Sales tax may apply.
      </p>
    </div>
  );
}
