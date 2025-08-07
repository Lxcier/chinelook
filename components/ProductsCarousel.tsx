"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/lib/mock/products";

export default function ProductCarousel({
  title = "Novidades para brilhar",
  subtitle = "Acabaram de chegar na Chinelook",
}: {
  title?: string;
  subtitle?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Início do Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };

  // Fim do Drag
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Movimento do Drag
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX.current) * 1.5; // *1.5 é a velocidade do arraste
    scrollRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  // Touch
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative group px-4 sm:px-10 mt-16 bg-white">
      <h2 className="text-2xl sm:text-3xl font-lora text-[#AD5C51] mb-2 font-semibold">
        {title}
      </h2>
      <h3 className="text-xl sm:text-2xl font-lora text-zinc-600 mb-6 font-medium">
        {subtitle}
      </h3>

      <div className="relative">
        {/* Setas */}
        <button
          onClick={() => scroll("left")}
          className="absolute cursor-pointer z-10 top-1/2 -translate-y-1/2 left-0 bg-white/90 p-2 rounded-full shadow-md hidden group-hover:block transition"
        >
          <ChevronLeft className="text-[#AD5C51]" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute cursor-pointer z-10 top-1/2 -translate-y-1/2 right-0 bg-white/90 p-2 rounded-full shadow-md hidden group-hover:block transition"
        >
          <ChevronRight className="text-[#AD5C51]" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar pr-4 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] sm:min-w-[280px] max-w-[280px] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
