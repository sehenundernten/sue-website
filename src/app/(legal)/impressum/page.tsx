import Link from "next/link";

export default function Impressum() {
  return (
    <main id="main-content" role="main" className="overflow-hidden">
      <section className="container max-w-4xl mx-auto px-8 xl:px-0 pt-48 pb-28">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl xl:text-6xl font-bold text-brand-blue">
            Impressum
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p>
                sehen und ernten e.V.
                <br />
                Mathildenstraße 10
                <br />
                12459 Berlin
              </p>
              <p>
                Vereinsregister: VR 31744 B <br />
                Registergericht: Amtsgericht Charlottenburg
              </p>
              <p>
                <strong>Vertreten durch:</strong>
                <br /> Nathanael Dehn
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl xl:text-2xl font-bold text-brand-blue">
                Kontakt
              </h2>
              <p>
                E-Mail:{" "}
                <Link href="mailto:mail@sehenundernten.org">
                  mail@sehenundernten.org
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl xl:text-2xl font-bold text-brand-blue">
                Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
            <p>
              Quelle:{" "}
              <a href="https://www.e-recht24.de/impressum-generator.html">
                https://www.e-recht24.de/impressum-generator.html
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
