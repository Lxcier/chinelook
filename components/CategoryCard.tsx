// components/CategoryCard.tsx
import Link from "next/link";
import Image from "next/image";

type Category = {
  title: string;
  href: string;
  imageUrl: string;
};

export default function CategoryCard({ title, href, imageUrl }: Category) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
    >
      <div className="relative w-full h-56 sm:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white text-xl sm:text-2xl font-lora font-bold drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
