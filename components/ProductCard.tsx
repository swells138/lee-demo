import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  description: string;
  price: string;
}

export default function ProductCard({ title, image, description, price }: Props) {
  return (
    <div className="rounded border p-4 text-center">
      <Image src={image} alt={title} width={400} height={300} className="mx-auto" />
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <p className="mt-1">{description}</p>
      <p className="mt-1 font-semibold">{price}</p>
      <Link
        href={`/contact?product=${encodeURIComponent(title)}`}
        className="mt-2 inline-block rounded bg-[#FF0000] px-4 py-2 font-bold text-white hover:bg-[#cc0000]"
      >
        Order Inquiry
      </Link>
    </div>
  );
}
