import Link from "next/link";
import { Button } from "../ui/button";

export default function Offers() {
  return (
    <section
      id="angebot"
      aria-labelledby="angebot-title"
      className="container mx-auto px-8 xl:px-0 pt-48 pb-28 flex flex-col gap-16"
    >
      <h2
        id="angebot-title"
        className="text-2xl xl:text-4xl font-bold text-brand-blue"
      >
        Unsere Angebote
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-16"
      >
        <li className="flex flex-col w-full gap-6">
          <h3 className="text-xl xl:text-2xl font-bold">Für Studierende</h3>
          <div className="pl-4 xl:pl-10">
            <p className="text-lg">
              Ergänze dein Studium mit praktischer Erfahrung! Nimm an Workshops
              teil, arbeite an Projekten mit und erweitere dein Netzwerk. Nutze
              unsere Räume, um eigene Ideen zu verwirklichen, und lerne von
              erfahrenen Kreativen.
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <Button variant="secondary" asChild showArrow>
              <Link href="/#mitglied-werden">Mitglied werden</Link>
            </Button>
          </div>
        </li>
        <li className="flex flex-col w-full gap-6">
          <h3 className="text-xl xl:text-2xl font-bold">
            Für Alumni und Selbstständige
          </h3>
          <div className="pl-4 xl:pl-10">
            <p className="text-lg">
              Bleib auch nach dem Studium kreativ verbunden! Nutze unser Büro
              als Arbeitsplatz, finde Kooperationspartner oder engagiere dich
              als Mentor*in.
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <Button variant="secondary" asChild showArrow>
              <Link href="/#mitglied-werden">Mitglied werden</Link>
            </Button>
          </div>
        </li>
        <li className="flex flex-col w-full gap-6">
          <h3 className="text-xl xl:text-2xl font-bold">
            Für Hochschulen & Partner
          </h3>
          <div className="pl-4 xl:pl-10">
            <p className="text-lg">
              Wir stehen für den Austausch zwischen Lehre und Praxis. Gerne
              kooperieren wir mit Hochschulen und Unternehmen, um kreative
              Projekte umzusetzen und Talente zu fördern.
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <Button variant="primary" size="primary" asChild showArrow>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </li>
      </ul>
    </section>
  );
}
