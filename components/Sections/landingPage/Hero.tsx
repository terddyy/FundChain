import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col xl:flex-row-reverse items-center justify-center gap-8 2xl:gap-30 pt-30" id="Home">
      {/* image */}
      <div className="relative w-full max-w-sm md:max-w-xl 2xl:max-w-2xl min-h-48 md:h-72 2xl:h-96 rounded-xl shadow-center">
        <Image
          className="rounded-xl object-cover "
          src={"/images/hero.jpg"}
          alt="bitcoin"
          fill
          priority
        />
      </div>

      {/* texts */}
      <div className="text-white text-center space-y-3 max-w-md md:max-w-xl xl:text-left">
        <h1 className="font-bold text-4xl md:text-5xl leading-10 md:leading-14">
          Vote for projects! <br /> Fund via{" "}
          <span className="text-violet text-shadow-xl text-shadow-white/10">
            Blockchain
          </span>
        </h1>
        <p>
          FundChain is a platform where users can fund projects for community
          and can funds for projects.
        </p>

        <Link href="/auth">
          {" "}
          <Button className="bg-violet text-xl mt-6" size={"lg"}>
            Try it now!{" "}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
