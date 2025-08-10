import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const products = [
    {
      title: "Box Lunch",
      image: "/images/bologna.png",
      description: "Perfect individual meals for any gathering.",
      price: "$12",
    },
    {
      title: "Party Tray",
      image: "/images/hot-dog.png",
      description: "Feeds the whole crowd with ease.",
      price: "$45",
    },
  ];

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
