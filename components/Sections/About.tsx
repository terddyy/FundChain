import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-34 lg:pt-58 text-white gap-3 " id="About">
      <h1 className=" font-bold text-3xl md:text-4xl 2xl:text-5xl col-span-2 text-center">
        About FundChain
      </h1>
      <div className="flex flex-col items-center justify-center xl:flex-row xl:gap-10 mt-10">
        <div className="relative w-full max-w-sm md:max-w-xl 2xl:max-w-2xl min-h-48 md:h-64 2xl:h-80 rounded-xl shadow-center mt-8">
          <Image
            className="rounded-xl object-cover "
            src={"/images/aboutPic.png"}
            alt="bitcoin"
            fill
            loading="lazy"
          />
        </div>

        <p className="max-w-sm md:max-w-xl md:text-lg 2xl:text-xl p-1 text-justify 2xl:tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, dicta,
          laudan distinctio, dolorem quaerat quibusdam! Suscipit perferendis
          aperiam quos, tempora temporibus facilis sit, consectetur quia ea
          eveniet accusamus eaque. Necessitatibus, quaerat enim optio molestias
          minima corporis expedita.
        </p>
      </div>
    </section>
  );
};

export default About;
