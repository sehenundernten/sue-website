import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

export default function Work() {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 w-full h-full translate-x-[60vw] -z-10 hidden lg:block">
        <Image
          src="/star-icon.svg"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
        />
      </div>
      <section
        id="was-wir-machen"
        aria-labelledby="was-wir-machen-title"
        className="container mx-auto px-8 xl:px-0 pt-48 pb-28 flex flex-col gap-16"
      >
        <h2
          id="was-wir-machen-title"
          className="text-2xl xl:text-4xl font-bold text-brand-blue"
        >
          Was wir machen
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center justify-between">
          <Card className="w-full sm:w-2/3 lg:w-full p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src="/work_design-projects.png"
                alt="Sehen und Ernten Design Projekt mit der KI-Werkstatt der HTW-Berlin"
                width={544}
                height={363}
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 justify-between">
              <h3 className="text-xl xl:text-2xl font-bold">Design</h3>
              <p className="text-brand-gray/70">
                #CD #Konzeption #Webdesign #Programmierung
              </p>
              <div className="flex justify-end py-4">
                <Button variant="secondary" asChild showArrow>
                  <Link href="/projekte/htw-ki-werkstatt">Zum Projekt</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-2/3 lg:w-full p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src="/work_workshops.png"
                alt="Sehen und Ernten Workshops"
                width={544}
                height={363}
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 justify-between">
              <h3 className="text-xl xl:text-2xl font-bold">Workshops</h3>
              <p className="text-brand-gray/70">
                #Weiterbildung #Theorie #Praxis
              </p>
              <div className="flex justify-end py-4">
                <Button variant="secondary" asChild showArrow>
                  <Link href="/workshops">Mehr erfahren</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-2/3 lg:w-full p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src="/work_co-working.png"
                alt="Sehen und Ernten Co-Working"
                width={544}
                height={363}
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 justify-between">
              <h3 className="text-xl xl:text-2xl font-bold">Co-Working</h3>
              <p className="text-brand-gray/70">#Kreativnetzwerk #NewWork</p>
              <div className="flex justify-end py-4">
                <Button variant="secondary" asChild showArrow>
                  <Link href="/co-working">Mehr erfahren</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
