import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-brand-beige/80 border-b border-brand-beige/80 backdrop-blur-xl">
      <nav
        className="container mx-auto py-6"
        role="navigation"
        aria-label="Hauptnavigation"
      >
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
          <ul
            role="list"
            className="flex flex-row justify-end items-center gap-4"
          >
            <li>
              <Button variant="link" className="text-md font-bold" asChild>
                <Link href="/#angebot">Angebote</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-md font-bold" asChild>
                <Link href="/#was-wir-machen">Was wir machen</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-md font-bold" asChild>
                <Link href="/#ueber-uns">Über uns</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-md font-bold" asChild>
                <Link href="/#mitglied-werden">Mitglied werden</Link>
              </Button>
            </li>
            <li>
              <Button variant="primary" size="primary" asChild>
                <Link href="/#kontakt">Kontakt</Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
