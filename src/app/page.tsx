import Footer from "@/components/footer.component";
import Hero from "@/components/sections/hero.component";
import Navigation from "@/components/navigation.component";
import Offers from "@/components/sections/offers.component";
import Work from "@/components/sections/work.component";
import About from "@/components/sections/about.component";
import Support from "@/components/sections/support.component";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Offers />
        <Work />
        <About />
        <Support />
      </main>
      <Footer />
    </>
  );
}
