import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto py-16">
    <div className="flex flex-col max-w-2xl">
        <h1 className="text-6xl font-bold text-brand-blue">Das Kreativnetzwerk für Studierende, Alumni und Selbständige.</h1>
        <p className="text-lg">Wir bieten dir Raum, Inspiration und Unterstützung, um kreative Ideen in die Praxis umzusetzen. Ob Mode-, Kommunikationsdesign oder Informatik – bei uns arbeiten verschiedene Disziplinen zusammen, um voneinander zu lernen und sich weiterzuentwickeln.</p>
        <div className="flex flex-row gap-2">
            <Button variant="outline">
                <Link href="/">Kontakt</Link>
            </Button>
        </div>
    </div>
    </div>
  );
}