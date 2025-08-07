// app/(root)/page.tsx
import HeroSection from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import ProductCarousel from "@/components/ProductsCarousel";
import HandmadeSection from "@/components/HandmadeSection";
import { products } from "@/lib/mock/products";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <ProductCarousel
        products={products}
        title="Novidades para brilhar"
        subtitle=" Acabaram de chegar na Chinelook"
      />
      <HandmadeSection />
    </>
  );
}
