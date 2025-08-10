import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-brand-beige/80 border-b border-brand-beige/80 backdrop-blur-xl">
      <nav className="container mx-auto py-6">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/sue-logo.svg"
                alt="Sehen und Ernten Logo"
                width={120}
                height={235}
              />
              <span className="text-2xl font-bold sr-only">
                sehen und ernten e.V.
              </span>
            </Link>
          </div>
          <div className="flex flex-row justify-end items-center gap-4">
            <Button variant="link" className="text-md font-bold">
              <Link href="/#angebot">Angebote</Link>
            </Button>
            <Button variant="link" className="text-md font-bold">
              <Link href="/#was-wir-machen">Was wir machen</Link>
            </Button>
            <Button variant="link" className="text-md font-bold">
              <Link href="/#ueber-uns">Über uns</Link>
            </Button>
            <Button variant="link" className="text-md font-bold">
              <Link href="/#mitglied-werden">Mitglied werden</Link>
            </Button>
            <Button variant="primary" size="primary">
              <Link href="/#kontakt">Kontakt</Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
