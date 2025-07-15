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
    <section className="flex flex-col items-center gap-3 text-white pt-30" id="How">
      <h1 className="font-bold text-3xl">How it works?</h1>

      {/* fund projects */}
      <div className="mt-4 w-full max-w-sm text-center">
        {/* heading */}
        <h1 className="font-semibold text-xl">Fund projects</h1>
        {/* description */}
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          doloremque?
        </p>
        {/* image */}
        <div className="relative w-full max-w-sm min-h-48 rounded-xl shadow-center mt-4">
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
      <div className="mt-6 w-full max-w-sm text-center">
        {/* heading */}
        <h1 className="font-semibold text-xl">Vote for projects</h1>
        {/* description */}
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          doloremque?
        </p>
        {/* image */}
        <div className="flex flex-wrap items-center justify-center gap-10 mt-8">
          {sectors.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/10 border border-white/20 max-w-43"
              >
                <Icon className="w-14 h-14" />

                <h1 className="font-medium text-lg">{item.sector}</h1>
                <p className="text-xs">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
