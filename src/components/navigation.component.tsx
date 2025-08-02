import Link from "next/link";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="container mx-auto py-4">
        <div className="flex flex-row justify-between items-center">
        <div>
            <Link href="/">Sehen und Ernten</Link>
        </div>
        <div className="flex flex-row justify-end items-center gap-4">
            <Link href="/">Angebote</Link>
            <Link href="/">Was wir machen</Link>
            <Link href="/">Über uns</Link>
            <Link href="/">Mitglied werden</Link>
            <Button variant="outline">
            <Link href="/">Kontakt</Link>
            </Button>
        </div>
        </div>
    </nav>
  );
}