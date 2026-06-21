import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
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
    <main className="overflow-x-hidden bg-bg text-[#1a1a1a]">
      <Nav />
      <Hero />
      <LightDivider className="py-6" />
      <Services />
      <WhyHdr />
      <LightDivider className="py-6" />
      <Portfolio />
      <Gallery />
      <LightDivider className="py-6" />
      <Testimonials />
      <Process />
      <LightDivider className="py-6" />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
