import Footer from "@/components/footer.component";
import Hero from "@/components/sections/hero.component";
import Navigation from "@/components/navigation.component";
import Offers from "@/components/sections/offers.component";
import Work from "@/components/sections/work.component";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Offers />
        <Work />
      </main>
      <Footer />
    </>
  );
}
