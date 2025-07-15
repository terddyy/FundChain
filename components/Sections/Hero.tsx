import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-8 pt-30" id="Home">
      {/* image */}
      <div className="relative w-full max-w-sm min-h-48 rounded-xl shadow-center">
        <Image className="rounded-xl object-cover " src={"/images/hero.jpg"} alt="bitcoin" fill priority />
      </div>

      {/* texts */}
      <div className="text-white text-center space-y-3 max-w-md">
        <h1 className="font-bold text-4xl  leading-10">
          Vote for projects! <br /> Fund via <span className="text-violet text-shadow-lg text-shadow-white/10">Blockchain</span>
        </h1>
        <p>
          FundChain is a platform where users can fund projects for community
          and can funds for projects.
        </p>
        
        <Button className="bg-violet text-lg mt-6"  size={'lg'}>Try it now!</Button>
      </div>
    </section>
  );
};

export default Hero;
