import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="bg-white/20 mt-30 text-white text-2xl  font-semibold text-center p-10 xl:p-16 space-y-3 md:flex items-center justify-between">
      <h1 className="max-w-lg md:text-3xl md:text-left">
        Wanna start helping community now?
      </h1>
      <Link href={"/auth"}>
        <Button className="bg-violet xl:w-2xs xl:h-14">Start now!</Button>
      </Link>
    </section>
  );
};

export default Banner;
