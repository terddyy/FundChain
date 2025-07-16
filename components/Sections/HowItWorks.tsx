import Image from "next/image";
import React from "react";
import { GraduationCap, Sprout, Brain, Baby, Laptop } from "lucide-react";

const HowItWorks = () => {
  const sectors = [
    {
      sector: "Education",
      description:
        "Empowering students through scholarships, tools, and access to quality learning.",
      icon: GraduationCap,
    },
    {
      sector: "Agriculture",
      description:
        "Supporting farmers and agri-students with training, tools, and sustainable resources.",
      icon: Sprout,
    },
    {
      sector: "Mental Health",
      description:
        "Promoting emotional well-being through awareness, support, and counseling access.",
      icon: Brain,
    },
    {
      sector: "Single Mothers",
      description:
        "Helping single moms pursue education, career, and stability through focused aid.",
      icon: Baby,
    },
    {
      sector: "Technology",
      description:
        "Unlocking digital opportunities through coding bootcamps, tools, and mentorship.",
      icon: Laptop,
    },
  ];

  return (
    <section
      className=" text-white pt-30 lg:pt-58 flex flex-col justify-center items-center"
      id="How"
    >
      <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl text-center">
        How it works?
      </h1>

      {/* fund projects */}
      <div className="mt-4 w-full xl:mt-10 flex flex-col xl:flex-row justify-center text-center max-xl:items-center gap-5">
        <div className="text-left max-w-sm md:max-w-xl">
          {/* heading */}
          <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl xl:my-3">
            Fund projects
          </h1>
          {/* description */}
          <p className="text-sm md:text-md xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            doloremque?
          </p>
        </div>

        {/* image */}
        <div className="relative w-full max-w-sm md:max-w-xl 2xl:max-w-2xl min-h-48 xl:h-72 md:h-60 rounded-xl shadow-center mt-4 row-span-2">
          <Image
            className="rounded-xl object-cover "
            src={"/images/HowPage.jpg"}
            alt="bitcoin"
            fill
            loading="lazy"
          />
        </div>
      </div>

      {/* vote for projects */}
      <div className="mt-4 w-full xl:mt-10 flex flex-col xl:flex-row-reverse justify-center text-center max-xl:items-center gap-5">
        <div className="text-right max-w-sm md:max-w-xl">
          {/* heading */}
          <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl xl:my-3">
            Vote for projects
          </h1>
          {/* description */}
          <p className="text-sm md:text-md xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            doloremque?
          </p>
        </div>
        {/* image */}
        <div className="flex flex-wrap  items-center justify-center gap-10 xl:gap-2 mt-4 w-full max-w-sm md:max-w-xl xl:max-w-2xl">
          {sectors.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 xl:grid grid-cols-[fit-content(300px)_1fr] grid-rows-2 xl:space-x-2 max-xl:gap-2 p-4 rounded-2xl bg-white/10 border border-white/20 h-max w-full  md:max-w-3xs xl:max-w-xs"
              >
                <Icon className="w-14 xl:w-8 h-auto" />

                <h1 className="font-medium text-lg xl:text-left">{item.sector}</h1>
                <p className="text-xs xl:text-left col-span-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
