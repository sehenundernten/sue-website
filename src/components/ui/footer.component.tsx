import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer-bg.png"
          priority
          loading="eager"
          alt=""
          className="w-full h-full object-cover object-top"
          aria-hidden="true"
          width={2000}
          height={2000}
        />
      </div>
      <footer
        id="footer"
        role="contentinfo"
        className="container mx-auto px-4 xl:px-0 pt-48 md:pt-80 xl:pt-128 pb-48 relative z-10"
      >
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
          <div className="flex flex-row gap-16">
            <Link
              href="https://www.instagram.com/sehenundernten/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full backdrop-blur-xs bg-transparent hover:bg-brand-blue/60 transition-colors"
              aria-label="Instagram Profil öffnen"
            >
              <Image
                src="/instagram-logo.svg"
                alt="Instagram Logo"
                width={32}
                height={32}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="sr-only">Instagram Profil</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/sehen-und-ernten/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full backdrop-blur-xs bg-transparent hover:bg-brand-blue/60 transition-colors"
              aria-label="LinkedIn Profil öffnen"
            >
              <Image
                src="/linkedin-logo.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="sr-only">LinkedIn Profil</span>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-1 text-center">
            <p className="text-sm font-light">
              &copy; {new Date().getFullYear()} sehen und ernten e.V. Alle
              Rechte vorbehalten.
            </p>
            <div className="flex flex-row items-center">
              <Button variant="link" asChild>
                <Link
                  className="text-white text-sm font-light"
                  href="/impressum"
                >
                  Impressum
                </Link>
              </Button>
              <span className="text-sm">|</span>
              <Button variant="link" asChild>
                <Link
                  className="text-white text-sm font-light"
                  href="/datenschutz"
                >
                  Datenschutz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
