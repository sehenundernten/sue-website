import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] scale-150 translate-y-[30%] -z-10">
        <Image
          className="object-cover"
          src="/footer-bg.png"
          alt=""
          aria-hidden="true"
          width={2000}
          height={2000}
        />
      </div>
      <footer id="kontakt" className="container mx-auto pt-80 pb-28">
        <div className="flex flex-col justify-center items-center text-center gap-8 text-white">
          <div className="flex flex-col items-center">
            <div className="py-4">
              <Link href="/">
                <Image
                  src="/sue-logo-light.svg"
                  alt="Sehen und Ernten Logo"
                  width={212}
                  height={80}
                />
                <span className="text-2xl font-bold sr-only">
                  sehen und ernten e.V.
                </span>
              </Link>
            </div>
            <p className="text-lg font-bold">
              Werkstatt für Konzeption und Gestaltung
            </p>
          </div>
          <div>
            <p className="text-lg">Mathildenstraße 10</p>
            <p>12459 Berlin</p>
            <p>E-Mail: mail@sehenundernten.org</p>
          </div>
          <div className="flex flex-row gap-16">
            <Link href="https://www.instagram.com/sehenundernten/">
              <Image
                src="/instagram-logo.svg"
                alt="Instagram Logo"
                width={32}
                height={32}
              />
              <span className="sr-only">Instagram Profil</span>
            </Link>
            <Link href="https://www.linkedin.com/company/sehen-und-ernten/">
              <Image
                src="/linkedin-logo.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
              <span className="sr-only">LinkedIn Profil</span>
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-1 text-center">
            <p>&copy; 2025 Sehen und Ernten. Alle Rechte vorbehalten.</p>
            <div className="flex flex-row items-center">
              <Button variant="link" asChild>
                <Link className="font-bold text-white" href="/">
                  Impressum
                </Link>
              </Button>
              <span className="text-lg">|</span>
              <Button variant="link" asChild>
                <Link className="font-bold text-white" href="/">
                  Datenschutzbestimmungen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
