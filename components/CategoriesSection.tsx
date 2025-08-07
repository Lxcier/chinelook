// components/CategoriesSection.tsx
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Modelos Femininos",
    href: "/categorias/feminino",
    imageUrl: "/images/categories/feminino.png",
  },
  {
    title: "Modelos Masculinos",
    href: "/categorias/masculino",
    imageUrl: "/images/categories/masculino.png",
  },
  {
    title: "Modelos Infantis",
    href: "/categorias/infantil",
    imageUrl: "/images/categories/infantil.png",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-12 px-6 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-lora text-[#AD5C51] mb-2 font-semibold">
          Brilho com personalidade
        </h2>

        <h3 className="text-xl sm:text-2xl font-lora text-zinc-600 mb-8 text-center font-medium">
          Descubra modelos únicos para cada estilo e idade
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.href} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
