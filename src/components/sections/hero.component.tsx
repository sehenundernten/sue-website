"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ScrollBanner } from "../ui/banner.component";
import { bannerItems } from "@/data/banner-items";
import React, { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute bottom-0 right-0 w-full h-full scale-80 translate-x-[50%] -z-10">
        <Image
          className="object-cover"
          aria-hidden="true"
          src="/hero-bg.png"
          alt=""
          width={2000}
          height={2000}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full scale-90 translate-y-[20%] translate-x-[60%] -z-10">
        <Image
          className="object-cover rounded-3xl"
          src="/work_workshops.png"
          alt="Workshop Aufnahme mit Teilnehmern im sehen und ernten Büro"
          width={720}
          height={480}
        />
      </div>
      <section className="container mx-auto pt-48 pb-28">
        <div className="flex flex-col max-w-2xl gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-bold text-brand-blue">
              Das Kreativnetzwerk für Studierende, Alumni und Selbständige.
            </h1>
            <p className="text-lg">
              Wir bieten dir Raum, Inspiration und Unterstützung, um kreative
              Ideen in die Praxis umzusetzen. Ob Mode-, Kommunikationsdesign
              oder Informatik – bei uns arbeiten verschiedene Disziplinen
              zusammen, um voneinander zu lernen und sich weiterzuentwickeln.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button variant="primary" size="primary" asChild>
              <Link href="/#kontakt">Kontakt</Link>
            </Button>
          </div>
        </div>
      </section>
      <ScrollBanner items={bannerItems} containerRef={containerRef} />
    </div>
  );
}
