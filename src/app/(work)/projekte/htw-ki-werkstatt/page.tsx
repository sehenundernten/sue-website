import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HTWKIWerkstatt() {
  return (
    <main id="main-content" role="main" className="overflow-hidden">
      <section className="container mx-auto px-8 xl:px-0 pt-48 pb-16 xl:pb-28">
        <h1 className="text-3xl xl:text-4xl font-bold text-brand-blue">
          KI-Werkstatt der HTW Berlin
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
          <div className="flex flex-col gap-4 text-lg">
            <p>
              Design-Studierende der HTW beweisen: Wir können geiles Design!
              Unsere Mission für das Projekt: eine repräsentative Website für
              die KI-Werkstatt zu gestalten, eines der neuesten und spannendsten
              Projekte der Hochschule.
            </p>
            <p>
              Unser Ziel war es, ein modernes Design zu entwickeln, das die
              Interdisziplinarität des Projektes an der Hochschule
              widerspiegelt. Die Inhalte sollten verständlich auf Augenhöhe und
              optimistisch sein, um eine einladende Atmosphäre zu schaffen.
            </p>
          </div>
          <ul className="text-brand-blue flex flex-col gap-2 text-lg">
            <li>
              <p>Kunde</p>
              <p className="font-bold italic">
                HTW (Hochschule für Technik und Wirtschaft) Berlin
              </p>
            </li>
            <li>
              <p>Fertigstellung</p>
              <p className="font-bold italic">2024</p>
            </li>
            <li>
              <p>Leistungen</p>
              <p className="font-bold italic">
                Corporate Design, Web Design, Programmierung
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full overflow-hidden pt-16">
          <Image
            src="/projekt_ki-werkstatt-01.png"
            alt="KI-Werkstatt der HTW Berlin"
            className="rounded-2xl"
            width={1680}
            height={700}
          />
        </div>
      </section>
      <section className="container mx-auto px-8 xl:px-0 py-16 xl:pb-28 xl:pt-48">
        <div className="flex flex-col max-w-3xl gap-4 text-lg">
          <p>
            Die Herausforderung lag darin nicht in das KI-Design-Klischee zu
            verfallen, aber das Thema auch nicht zu verfehlen. Wir denken, dass
            uns das wirklich gut gelungen ist!
          </p>
          <p>
            Nach vielen tollen Ideen und erstellten Moodboards fiel die
            Entscheidung auf eine nicht ganz typische Farbwahl für KI- und
            technische Themen. Kombiniert mit verspielten, geometrischen und
            mathematisch anmutenden Formen, ist die Website nicht nur modern,
            sondern strotzt vor Kreativität.
          </p>
        </div>
        <div className="w-full overflow-hidden pt-16">
          <Image
            src="/projekt_ki-werkstatt-02.png"
            alt="KI-Werkstatt der HTW Berlin"
            className="rounded-2xl"
            width={1680}
            height={700}
          />
        </div>
      </section>
      <section className="container mx-auto px-8 xl:px-0 py-16 xl:py-28">
        <div className="flex flex-col max-w-3xl gap-4 text-lg">
          <p>
            Die Umsetzung der Website war eine wertvolle Lernerfahrung für uns
            alle. Nach der langen Lockdown-Zeit war es erfrischend und
            motivierend, ein Projekt von null auf zu entwickeln und zu sehen,
            wie unsere Ideen zum Leben erweckt wurden.
          </p>
          <p>
            Wir sind stolz darauf, euch die fertige Website präsentieren zu
            können! Es war eine spannende Reise, und wir sind dankbar für das
            Vertrauen und den Zuspruch, den wir während des gesamten Prozesses
            von den betreuenden Professoren erhalten haben.
          </p>
        </div>
        <div className="w-full overflow-hidden pt-16">
          <Image
            src="/projekt_ki-werkstatt-03.png"
            alt="KI-Werkstatt der HTW Berlin"
            className="rounded-2xl h-full"
            width={1680}
            height={700}
          />
        </div>
      </section>
      <section className="container mx-auto px-8 xl:px-0 py-28">
        <div className="flex flex-col gap-4">
          <Button variant="secondary" asChild showArrow>
            <Link
              href="https://kiwerkstatt.f2.htw-berlin.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seite der KI-Werkstatt besuchen
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
