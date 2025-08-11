import Image from "next/image";
import MemberSlider from "../ui/slider.component";

export default function About() {
  return (
    <section
      id="ueber-uns"
      aria-labelledby="ueber-uns-title"
      className="container mx-auto py-28 flex flex-col gap-16"
    >
      <h2 id="ueber-uns-title" className="text-4xl font-bold text-brand-blue">
        Über uns
      </h2>
      <div className="flex flex-row gap-8">
        <Image
          src="/about-icon.svg"
          alt=""
          aria-hidden="true"
          width={120}
          height={235}
        />
        <div className="flex flex-col gap-4 max-w-2xl">
          <p>
            Wir sind ein gemeinnütziger Verein, der Designstudierenden die
            Möglichkeit gibt, über das Studium hinaus Praxiserfahrung zu
            sammeln. Unser Ziel ist es, eine Brücke zwischen Hochschule und
            Beruf zu bauen, indem wir interdisziplinäre Zusammenarbeit fördern
            und kreative Projekte ermöglichen.
          </p>
          <p>
            Unser Büro in der Nähe der Hochschule bietet einen Ort zum Arbeiten,
            Netzwerken und Experimentieren. Wir organisieren Workshops,
            unterstützen Projekte und fördern den Austausch zwischen
            verschiedenen Disziplinen.
          </p>
        </div>
      </div>
      <MemberSlider />
    </section>
  );
}
