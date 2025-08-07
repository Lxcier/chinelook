"use client";

import { useRef } from "react";
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
  const velocity = useRef(0);
  const lastMoveX = useRef(0);
  const lastTime = useRef(0);
  const momentumId = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const stopMomentum = () => {
    if (momentumId.current) {
      clearInterval(momentumId.current);
      momentumId.current = null;
    }
  };

  const applyMomentum = () => {
    if (!scrollRef.current) return;

    let currentVelocity = velocity.current;

    stopMomentum();

    momentumId.current = setInterval(() => {
      if (Math.abs(currentVelocity) < 0.5) {
        stopMomentum();
        return;
      }

      scrollRef.current!.scrollLeft -= currentVelocity;
      currentVelocity *= 0.95; // Diminui gradualmente a velocidade
    }, 16); // aproximadamente 60fps
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    stopMomentum();
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    lastMoveX.current = e.pageX;
    lastTime.current = Date.now();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();

    const currentX = e.pageX;
    const delta = currentX - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - delta;

    const now = Date.now();
    const dx = currentX - lastMoveX.current;
    const dt = now - lastTime.current;

    velocity.current = (dx / dt) * 16; // velocity ajustada pra 60fps

    lastMoveX.current = currentX;
    lastTime.current = now;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    applyMomentum();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      applyMomentum();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    stopMomentum();
    isDragging.current = true;
    const x = e.touches[0].pageX;
    startX.current = x;
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    lastMoveX.current = x;
    lastTime.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;

    const currentX = e.touches[0].pageX;
    const delta = currentX - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - delta;

    const now = Date.now();
    const dx = currentX - lastMoveX.current;
    const dt = now - lastTime.current;

    velocity.current = (dx / dt) * 16;
    lastMoveX.current = currentX;
    lastTime.current = now;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    applyMomentum();
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
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar pr-4 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
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
