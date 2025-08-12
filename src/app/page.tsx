import Hero from "@/components/sections/hero.component";
import Offers from "@/components/sections/offers.component";
import Work from "@/components/sections/work.component";
import About from "@/components/sections/about.component";
import Support from "@/components/sections/support.component";

export default function Home() {
  return (
    <main id="main-content" role="main" className="overflow-hidden">
      <Hero />
      <Offers />
      <Work />
      <About />
      <Support />
    </main>
  );
}
