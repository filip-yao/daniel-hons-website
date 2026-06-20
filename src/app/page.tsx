import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyHdr } from "@/components/sections/WhyHdr";
import { Portfolio } from "@/components/sections/Portfolio";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LightDivider } from "@/components/ui/LightDivider";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-bg text-text">
      <Nav />
      <Hero />
      <LightDivider className="py-10" />
      <Stats />
      <LightDivider className="py-10" />
      <Services />
      <LightDivider className="py-10" />
      <WhyHdr />
      <LightDivider className="py-10" />
      <Portfolio />
      <LightDivider className="py-10" />
      <Gallery />
      <LightDivider className="py-10" />
      <Testimonials />
      <LightDivider className="py-10" />
      <Process />
      <LightDivider className="py-10" />
      <About />
      <LightDivider className="py-10" />
      <Contact />
      <Footer />
    </main>
  );
}
