"use client";
import Footer from "@/app/components/Layout/Footer";
import About from "@/app/components/Sections/landingPage/About";
import Banner from "@/app/components/Sections/landingPage/Developers";
import Hero from "@/app/components/Sections/landingPage/Hero";
import HowItWorks from "@/app/components/Sections/landingPage/HowItWorks";
import Image from "next/image";
import Nav from "../components/Layout/Nav";

export default function Home() {
  return (
    <>
      <Nav navlinks={[]} />
      <Hero />
      <About />
      <HowItWorks />
      <Banner />
      <Footer />
    </>
  );
}
