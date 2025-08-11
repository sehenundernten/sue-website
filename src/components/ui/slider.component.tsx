"use client";

import { Suspense, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMembers } from "@/hooks/useMembers";
import MemberSliderItem from "./slider-item.component";

export default function MemberSlider() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const { members } = useMembers();

  return (
    <Carousel
      orientation="horizontal"
      opts={{
        loop: true,
        align: "center",
        duration: 50,
      }}
      plugins={[plugin.current]}
      className="w-full flex flex-col gap-16"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {members.map(member => (
          <Suspense
            key={member.name}
            fallback={<p className="text-center">Lade Mitglieder...</p>}
          >
            <MemberSliderItem member={member} />
          </Suspense>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
