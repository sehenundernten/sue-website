import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

export default function Work() {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 w-full h-full translate-x-[60vw] -z-10">
        <Image
          src="/star-icon.svg"
          alt="Offers Background"
          width={200}
          height={200}
        />
      </div>
      <section className="container mx-auto py-28 flex flex-col gap-16">
        <h2 className="text-4xl font-bold text-brand-blue">Was wir machen</h2>
        <div className="flex flex-row gap-8 justify-between">
          <Card className="w-full p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src="/work_design-projects.png"
                alt="Sehen und Ernten Design Projekt mit der KI-Werkstatt der HTW-Berlin"
                width={544}
                height={363}
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 justify-between">
              <h3 className="text-2xl font-bold">Design</h3>
              <p>#CD #Konzeption #Webdesign #Programmierung</p>
              <div className="flex justify-end py-4">
                <Button variant="link">
                  <Link href="/">Zum Projekt</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src="/work_workshops.png"
                alt="Sehen und Ernten Workshops"
                width={544}
                height={363}
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 justify-between">
              <h3 className="text-2xl font-bold">Workshops</h3>
              <p>#Weiterbildung #Theorie #Praxis</p>
              <div className="flex justify-end py-4">
                <Button variant="link">
                  <Link href="/">Mehr erfahren</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src="/work_co-working.png"
                alt="Sehen und Ernten Co-Working"
                width={544}
                height={363}
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 justify-between">
              <h3 className="text-2xl font-bold">Co-Working</h3>
              <p>#Kreativnetzwerk #NewWork</p>
              <div className="flex justify-end py-4">
                <Button variant="link">
                  <Link href="/">Mehr erfahren</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
