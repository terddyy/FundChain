import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-34 text-white flex flex-col items-center gap-3 " id="About">
      <h1 className=" font-bold text-3xl">About FundChain</h1>
      <div className="relative w-full max-w-sm min-h-48 rounded-xl shadow-center mt-8">
        <Image
          className="rounded-xl object-cover "
          src={"/images/aboutPic.png"}
          alt="bitcoin"
          fill
          loading="lazy"
        />
      </div>

      <p className="max-w-sm text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, dicta, laudan distinctio, dolorem quaerat quibusdam! Suscipit perferendis aperiam quos, tempora temporibus facilis sit, consectetur quia ea eveniet accusamus eaque. Necessitatibus, quaerat enim optio molestias minima corporis expedita.</p>
    </section>
  );
};

export default About;
