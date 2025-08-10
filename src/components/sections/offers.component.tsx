import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Offers() {
  return (
    <section
      id="angebot"
      className="container mx-auto py-28 flex flex-col gap-16"
    >
      <h2 className="text-4xl font-bold text-brand-blue">Unsere Angebote</h2>
      <div className="flex flex-row gap-16">
        <div className="flex flex-col w-full gap-6">
          <h3 className="text-2xl font-bold">Für Studierende</h3>
          <div className="pl-10">
            <p className="text-lg">
              Ergänze dein Studium mit praktischer Erfahrung! Nimm an Workshops
              teil, arbeite an Projekten mit und erweitere dein Netzwerk. Nutze
              unsere Räume, um eigene Ideen zu verwirklichen, und lerne von
              erfahrenen Kreativen.
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <Button variant="link">
              <Link href="/#mitglied-werden">Mitglied werden</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-6">
          <h3 className="text-2xl font-bold">Für Alumni und Selbstständige</h3>
          <div className="pl-10">
            <p className="text-lg">
              Bleib auch nach dem Studium kreativ verbunden! Nutze unser Büro
              als Arbeitsplatz, finde Kooperationspartner oder engagiere dich
              als Mentor*in.
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <Button variant="link">
              <Link href="/#mitglied-werden">Mitglied werden</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-6">
          <h3 className="text-2xl font-bold">Für Hochschulen & Partner</h3>
          <div className="pl-10">
            <p className="text-lg">
              Wir stehen für den Austausch zwischen Lehre und Praxis. Gerne
              kooperieren wir mit Hochschulen und Unternehmen, um kreative
              Projekte umzusetzen und Talente zu fördern.
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <Button variant="link">
              <Link href="/#kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
