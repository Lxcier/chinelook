// components/FeaturedProducts.tsx
import ProductCard from "./ProductCard";
import { products } from "@/lib/mock/products";
import ProductCarousel from "./ProductsCarousel";

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-[#fdf8f5]">
      <div className="w-full mx-auto">
        <ProductCarousel
          products={products}
          title="Destaques que encantam"
          subtitle="Modelos feitos à mão com carinho, brilho e estilo — escolha o seu
          favorito"
          className="bg-transparent"
        />
      </div>
    </section>
  );
}
