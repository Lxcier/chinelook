// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-[#e8d6cc] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition min-h-[...]">
      <Link href={`/produto/${product.id}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </Link>

      <div className="p-4 flex flex-col justify-center">
        <h3 className="font-lora text-lg text-[#AD5C51] font-semibold mb-1">
          {product.name}
        </h3>
        <p className="text-sm min-h-10 font-quicksand text-gray-600 mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between bottom-0">
          <span className="text-[#AD5C51] font-bold text-base font-quicksand">
            R$ {product.price.toFixed(2)}
          </span>

          <Link
            href={`/produto/${product.id}`}
            className="text-sm font-quicksand bg-[#AD5C51] text-white px-4 py-1 rounded-full hover:bg-[#944d44] transition"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
