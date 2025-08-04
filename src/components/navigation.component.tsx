import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="container mx-auto py-8">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/sue-logo.svg"
              alt="Sehen und Ernten Logo"
              width={120}
              height={235}
            ></Image>
            <span className="text-2xl font-bold sr-only">
              sehen und ernten e.V.
            </span>
          </Link>
        </div>
        <div className="flex flex-row justify-end items-center gap-4">
          <Button variant="link">
            <Link href="/">Angebote</Link>
          </Button>
          <Button variant="link">
            <Link href="/">Was wir machen</Link>
          </Button>
          <Button variant="link">
            <Link href="/">Über uns</Link>
          </Button>
          <Button variant="link">
            <Link href="/">Mitglied werden</Link>
          </Button>
          <Button variant="outline">
            <Link href="/">Kontakt</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
