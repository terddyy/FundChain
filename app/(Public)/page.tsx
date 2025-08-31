"use client";
import Footer from "@/app/components/Layout/Footer";
import LandingNav from "@/app/components/Layout/Nav";
import About from "@/app/components/Sections/landingPage/About";
import Banner from "@/app/components/Sections/landingPage/Developers";
import Hero from "@/app/components/Sections/landingPage/Hero";
import HowItWorks from "@/app/components/Sections/landingPage/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingNav />
      <Hero />
      <About />
      <HowItWorks />
      <Banner />
      <Footer />
    </>
  );
}
