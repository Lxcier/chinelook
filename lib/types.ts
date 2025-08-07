// types.ts

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: string; // opcional: útil para a seção de categorias
  createdAt?: string; // opcional: pode vir do Appwrite
  updatedAt?: string; // opcional: controle de atualização
};

export interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  className?: string; // margem ou padding externa
  hideArrows?: boolean;
}
