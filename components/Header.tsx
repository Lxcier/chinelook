// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/Logo (Transparente) - Chinelook.png";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname.startsWith(path)
      ? "text-[#AB6A6A] font-semibold border-b-[1px] border-solid border-[#AB6A6A] pb-[1px]"
      : "text-[#D3B45C] border-b-[1px] border-solid border-transparent hover:border-[#AB6A6A] hover:text-[#AB6A6A] pb-[1px] transition ease-in-out duration-[.3s]";

  return (
    <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo da Chinelook" width={100} height={100} />
        </Link>

        {/* Busca */}
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Procure por produtos"
            className="w-full border border-zinc-600 rounded-full px-4 py-2 text-base !text-zinc-800 font-quicksand"
          />
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex gap-4 text-base font-quicksand font-medium">
          <Link
            href="/categorias/feminino"
            className={isActive("/categorias/feminino")}
          >
            Modelos Femininos
          </Link>
          <Link
            href="/categorias/masculino"
            className={isActive("/categorias/masculino")}
          >
            Modelos Masculinos
          </Link>
          <Link
            href="/categorias/infantil"
            className={isActive("/categorias/infantil")}
          >
            Modelos Infantis
          </Link>
        </nav>

        {/* Ações */}
        <div className="flex gap-4 items-center text-sm font-quicksand">
          <Link href="/carrinho" className="relative">
            <ShoppingCart className="w-5 h-5 text-zinc-800" />
            {/* TODO: Badge de quantidade */}
          </Link>

          <Link
            href="/sign-in"
            className="flex items-center gap-1 text-zinc-800"
          >
            <User className="w-5 h-5 " />
            <span>Entre ou Cadastre-se</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
