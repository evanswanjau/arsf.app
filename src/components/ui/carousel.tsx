import * as React from "react";
import { cn } from "@/lib/utils";

interface CarouselContextValue {
  viewportRef: React.RefObject<HTMLDivElement>;
  scrollByItems: (delta: number) => void;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

export function Carousel({
  className,
  children,
  auto = true,
  intervalMs = 3000,
}: React.PropsWithChildren<{
  className?: string;
  auto?: boolean;
  intervalMs?: number;
}>) {
  const viewportRef = React.useRef<HTMLDivElement>(null);

  const getStep = React.useCallback(() => {
    const firstItem = viewportRef.current?.querySelector<HTMLElement>(
      "[data-carousel-item]"
    );
    return firstItem ? firstItem.getBoundingClientRect().width + 24 : 300; // width + gap(1.5rem)
  }, []);

  const scrollByItems = React.useCallback(
    (delta: number) => {
      const step = getStep();
      viewportRef.current?.scrollBy({ left: step * delta, behavior: "smooth" });
    },
    [getStep]
  );

  React.useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => {
      scrollByItems(1);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [auto, intervalMs, scrollByItems]);

  return (
    <div className={cn("relative", className)}>
      <CarouselContext.Provider value={{ viewportRef, scrollByItems }}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
}

export function CarouselContent({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) return null;
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollStart = React.useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = ctx.viewportRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    if (ctx.viewportRef.current) {
      ctx.viewportRef.current.scrollLeft = scrollStart.current - dx;
    }
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollStart.current = ctx.viewportRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].pageX - startX.current;
    if (ctx.viewportRef.current) {
      ctx.viewportRef.current.scrollLeft = scrollStart.current - dx;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };
  return (
    <div
      ref={ctx.viewportRef}
      className={cn(
        "flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 select-none cursor-grab active:cursor-grabbing",
        "scroll-smooth",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}

export function CarouselItem({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("snap-start shrink-0", className)} data-carousel-item>
      {children}
    </div>
  );
}

export function CarouselPrevious({ className }: { className?: string }) {
  const ctx = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      onClick={() => ctx?.scrollByItems(-1)}
      aria-label="Previous"
      className={cn(
        "absolute -left-5 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center",
        "w-10 h-10 rounded-full bg-white text-[#02463D] shadow-sm hover:bg-white/90",
        className
      )}
    >
      ←
    </button>
  );
}

export function CarouselNext({ className }: { className?: string }) {
  const ctx = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      onClick={() => ctx?.scrollByItems(1)}
      aria-label="Next"
      className={cn(
        "absolute -right-5 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center",
        "w-10 h-10 rounded-full bg-white text-[#02463D] shadow-sm hover:bg-white/90",
        className
      )}
    >
      →
    </button>
  );
}
