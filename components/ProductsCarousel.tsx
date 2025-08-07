"use client";

import { useRef, useState } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // Ajuste a "velocidade" do scroll
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className={`relative group px-4 sm:px-10 ${className}`}>
      {title && (
        <h2 className="text-2xl sm:text-3xl font-lora text-[#AD5C51] mb-2 font-semibold">
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className="text-xl sm:text-2xl font-lora text-zinc-600 mb-6 font-medium">
          {subtitle}
        </h3>
      )}

      <div className="relative">
        {!hideArrows && (
          <>
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
          </>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar pr-4 cursor-grab active:cursor-grabbing select-none "
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
