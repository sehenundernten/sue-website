"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface BannerItem {
  text: string;
  icon: React.ReactNode;
}

interface ScrollBannerProps {
  items: BannerItem[];
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function ScrollBanner({ items, containerRef }: ScrollBannerProps) {
  const defaultRef = useRef<HTMLDivElement>(null);
  const ref = containerRef || defaultRef;

  // Framer Motion Scroll-Animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bannerX = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <motion.div style={{ x: bannerX }}>
      <div
        className="flex flex-row w-full items-center gap-8 py-12"
        role="region"
        aria-label="Unsere Vorteile auf einem Blick"
      >
        {/* Erste Gruppe - wird beim Scrollen bewegt */}
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className="flex flex-row w-full items-center space-x-8"
            role="listitem"
          >
            <span className="whitespace-nowrap text-md font-bold uppercase">
              {item.text}
            </span>
            {item.icon}
          </div>
        ))}

        {/* Zweite Gruppe - für nahtlosen Übergang */}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className="flex flex-row w-full items-center space-x-8"
            role="listitem"
          >
            <span className="whitespace-nowrap text-md font-bold uppercase">
              {item.text}
            </span>
            {item.icon}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
