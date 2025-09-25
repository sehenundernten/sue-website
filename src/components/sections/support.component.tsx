import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function Support() {
  return (
    <section
      id="mitglied-werden"
      aria-labelledby="mitglied-werden-title"
      className="container relative mx-auto px-8 xl:px-0 pt-48 pb-28 flex flex-col gap-16"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 hidden lg:block">
        <Image
          className="object-cover"
          src="/support-bg.png"
          alt=""
          aria-hidden="true"
          width={2000}
          height={2000}
        />
      </div>
      <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center justify-center">
        <h2
          id="mitglied-werden-title"
          className="text-3xl xl:text-5xl font-bold text-brand-blue"
        >
          Werde jetzt Mitglied
        </h2>
        <p className="text-lg">
          Möchtest du Teil unseres Netzwerks werden? Wir bieten verschiedene
          Mitgliedsmodelle an:
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch max-w-6xl mx-auto gap-12 xl:gap-24">
        <Card className="w-full sm:w-2/3 lg:w-full">
          <CardContent className="flex flex-col justify-between h-full gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center w-12 h-12">
                <Image
                  src="/student-icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={42}
                  height={42}
                />
              </div>
              <h3 className="text-xl xl:text-2xl font-bold uppercase text-brand-blue">
                Studierende
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-baseline gap-2">
                <span className="text-6xl font-bold text-brand-blue">20€</span>
                <span className="text-lg font-bold text-brand-blue/70">
                  /Monat
                </span>
              </div>
              <p className="text-lg">
                Nutze unsere Workshops und Netzwerkangebote.
              </p>
            </div>
            <div className="flex w-full flex-row gap-2 justify-end">
              <Button variant="secondary" asChild showArrow>
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full sm:w-2/3 lg:w-full">
          <CardContent className="flex flex-col justify-between h-full gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center w-12 h-12">
                <Image
                  src="/coworking-icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl xl:text-2xl font-bold uppercase text-brand-blue">
                Büro-Mitgliedschaft
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-baseline gap-2">
                <span className="text-lg font-bold text-brand-blue/70">ab</span>
                <span className="text-6xl font-bold text-brand-blue">100€</span>
                <span className="text-lg font-bold text-brand-blue/70">
                  /Monat
                </span>
              </div>
              <p className="text-lg">
                Erhalte einen festen Arbeitsplatz und werde Teil unserer
                kreativen Arbeitsgemeinschaft.
              </p>
            </div>
            <div className="flex w-full flex-row gap-2 justify-end">
              <Button variant="secondary" asChild showArrow>
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full sm:w-2/3 lg:w-full">
          <CardContent className="flex flex-col justify-between h-full gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center w-12 h-12">
                <Image
                  src="/supporter-icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={42}
                  height={42}
                />
              </div>
              <h3 className="text-xl xl:text-2xl font-bold uppercase text-brand-blue">
                Unterstützende
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-baseline gap-2">
                <span className="text-lg font-bold text-brand-blue/70">ab</span>
                <span className="text-6xl font-bold text-brand-blue">1€</span>
                <span className="text-lg font-bold text-brand-blue/70">
                  /Monat
                </span>
              </div>
              <p className="text-lg">
                Fördere unsere Arbeit mit einem Beitrag und trage dazu bei,
                unser Angebot aufrechtzuerhalten.
              </p>
            </div>
            <div className="flex w-full flex-col gap-1 items-end">
              <div className="text-center mr-1">
                <span className="text-xs">paypal.me/sehenundernten</span>
              </div>
              <Button
                variant="paypal"
                asChild
                className="bg-brand-blue text-white px-12"
              >
                <Link
                  href="https://paypal.me/sehenundernten"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/paypal-icon.svg"
                    alt="PayPal Logo"
                    aria-hidden="true"
                    width={100}
                    height={100}
                    className="w-fit h-fit"
                  />
                  <span className="sr-only">Spenden über PayPal Me</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
