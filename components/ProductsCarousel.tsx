import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // caminho do componente shadcn, ajuste conforme seu projeto
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { ProductCarouselProps } from "@/lib/types";

export default function ProductCarousel({
  title,
  subtitle,
  products,
  className = "",
  hideArrows = false,
}: ProductCarouselProps) {
  return (
    <section className={`relative group px-6 sm:px-12 ${className}`}>
      {title && (
        <h2 className="text-3xl font-semibold font-lora text-[#AD5C51] mb-2 text-center">
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className="text-xl font-medium font-lora text-zinc-700 mb-6 text-center">
          {subtitle}
        </h3>
      )}

      <Carousel>
        <CarouselContent className="select-none">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="Scroll Left" className="text-[#AD5C51]" />
        <CarouselNext aria-label="Scroll Right" className="text-[#AD5C51]" />
      </Carousel>
    </section>
  );
}
