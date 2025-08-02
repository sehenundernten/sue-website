import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto py-10">
        <div className="flex flex-col justify-center items-center text-center gap-2">
            <div>
            <p>sehen und ernten e.V.</p>
            <p>Werkstatt für Konzeption und Gestaltung</p>
            </div>
            <div>
            <p>Mathildenstraße 10</p>
            <p>12459 Berlin</p>
            <p>E-Mail: mail@sehenundernten.org</p>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-1 text-center">
            <p>&copy; 2025 Sehen und Ernten. Alle Rechte vorbehalten.</p>
            <div className="flex flex-row gap-2">
            <Link href="/">Impressum</Link>
            <Link href="/">Datenschutzbestimmungen</Link>
        </div>
        </div>
    </footer>
  );
}