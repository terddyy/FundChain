"use client"
import Footer from "@/components/Layout/Footer";
import LandingNav from "@/components/Layout/LandingNav";
import About from "@/components/Sections/landingPage/About";
import Banner from "@/components/Sections/landingPage/Developers";
import Hero from "@/components/Sections/landingPage/Hero";
import HowItWorks from "@/components/Sections/landingPage/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    < >
      <LandingNav />
      <Hero />
      <About />
      <HowItWorks />
      <Banner />
      <Footer />
    </>
  );
}
