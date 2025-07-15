import Footer from "@/components/Layout/Footer";
import LandingNav from "@/components/Layout/LandingNav";
import About from "@/components/Sections/About";
import Hero from "@/components/Sections/Hero";
import HowItWorks from "@/components/Sections/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <LandingNav />
      <Hero />
      <About />
      <HowItWorks />
      <Footer />
    </main>
  );
}
