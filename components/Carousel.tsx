"use client";

import React from "react";
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const ArrowPrev = () => (
  <svg
    width="48px"
    height="48px"
    viewBox="0 0 17.00 17.00"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(270)"
  >
    <path
      d="M15.812,9.896 C15.587,9.896 15.361,9.834 15.162,9.699 L8.932,5.543 L2.895,9.74 C2.354,10.099 1.625,9.953 1.266,9.412 C0.905,8.873 1.051,8.142 1.592,7.783 L8.28,3.152 C8.673,2.888 9.188,2.888 9.583,3.15 L16.464,7.74 C17.005,8.099 17.152,8.832 16.792,9.371 C16.564,9.713 16.191,9.896 15.812,9.896 L15.812,9.896 Z"
      fill="#434343"
    />
  </svg>
);

const ArrowNext = () => (
  <svg
    width="48px"
    height="48px"
    viewBox="0 0 17.00 17.00"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(90)"
  >
    <path
      d="M15.812,9.896 C15.587,9.896 15.361,9.834 15.162,9.699 L8.932,5.543 L2.895,9.74 C2.354,10.099 1.625,9.953 1.266,9.412 C0.905,8.873 1.051,8.142 1.592,7.783 L8.28,3.152 C8.673,2.888 9.188,2.888 9.583,3.15 L16.464,7.74 C17.005,8.099 17.152,8.832 16.792,9.371 C16.564,9.713 16.191,9.896 15.812,9.896 L15.812,9.896 Z"
      fill="#434343"
    />
  </svg>
);

interface CarouselProps {
  children: React.ReactNode;
  carouselId?: string; // Kept for compatibility
}

export default function Carousel({ children }: CarouselProps) {
  return (
    <ShadcnCarousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4 h-full items-stretch gap-4">
        {React.Children.map(children, (child) => (
          <CarouselItem className="pl-4 basis-[280px] md:basis-[320px] lg:basis-[360px] h-full">
            <div className="h-full">{child}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex bg-transparent border-none hover:bg-transparent -left-12">
        <ArrowPrev />
      </CarouselPrevious>
      <CarouselNext className="hidden md:flex bg-transparent border-none hover:bg-transparent -right-12">
        <ArrowNext />
      </CarouselNext>
    </ShadcnCarousel>
  );
}
