// components/HeroSection.tsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[600px] flex items-center justify-start px-6 sm:px-10"
      style={{
        backgroundImage: `url("images/hero-chinelook.png")`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      <div className="relative z-10 max-w-2xl text-center sm:text-left text-white left-0">
        <p className="font-playball text-xl sm:text-2xl mb-2">
          Chine<span className="text-[#EBC0B3]">look</span> – Brilhando a cada
          passo
        </p>

        <h1 className="font-lora text-4xl sm:text-5xl font-bold mb-4">
          Mais que chinelos, uma joia para seus pés.
        </h1>

        <p className="font-quicksand text-base sm:text-lg mb-6">
          Havaianas personalizadas com aplicações exclusivas — feitas à mão com
          carinho pra você brilhar com conforto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
          <Link
            href="/categorias/feminino"
            className="bg-[#AD5C51] text-white px-6 py-2 rounded-full text-sm font-quicksand hover:bg-[#944d44] transition"
          >
            Quero brilhar agora
          </Link>

          <Link
            href="/categorias/infantil"
            className="bg-white text-[#AD5C51] flex items-center gap-1 px-6 py-2 rounded-full text-sm font-quicksand border border-[#AD5C51] hover:bg-[#f3e8e6] transition"
          >
            Ver modelos Infantis
            <ArrowRight width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
