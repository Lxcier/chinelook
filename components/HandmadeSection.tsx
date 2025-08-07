// components/HandmadeSection.tsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HandmadeSection() {
  return (
    <section className="relative bg-[#fdf8f5] px-6 sm:px-10 py-12 mt-16 overflow-hidden">
      <svg
        className="absolute top-2 right-2 w-64 h-64 opacity-10"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#AD5C51" />
      </svg>
      <svg
        className="absolute bottom-3 left-3 w-64 h-64 opacity-10"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#AD5C51" />
      </svg>
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-lora text-[#AD5C51] font-bold mb-4">
            Cada detalhe é feito à mão com amor 💕
          </h2>

          <h3 className="text-xl sm:text-2xl font-lora text-zinc-700 font-medium mb-4">
            Um toque artesanal em cada passo
          </h3>

          <p className="text-base font-quicksand text-zinc-600 mb-6">
            Desde a aplicação cuidadosa das joias até o acabamento final, nossos
            chinelos são criados com atenção, carinho e dedicação. Cada par é
            único — como você.
          </p>

          <Link
            href="/processo"
            className="flex items-center w-fit gap-1 bg-[#AD5C51] text-white px-6 py-2 rounded-full text-sm font-quicksand hover:bg-[#944d44] transition"
          >
            Descubra nosso processo
            <ArrowRight width={16} height={16} />
          </Link>
        </div>

        {/* Imagem/Vídeo */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/sections/handmade.png"
              alt="Artesã aplicando joias em chinelos"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
