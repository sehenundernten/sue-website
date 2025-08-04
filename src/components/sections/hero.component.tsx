import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pb-24">
      <div className="absolute bottom-0 right-0 w-full h-full scale-60 translate-x-[40%] -z-10">
        <Image
          className="object-cover"
          src="/hero-bg.png"
          alt="Hero Background"
          width={2000}
          height={2000}
        />
      </div>
      <section className="container mx-auto py-28">
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
            <Button variant="outline">
              <Link href="/">Kontakt</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
