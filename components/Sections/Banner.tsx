import React from "react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="bg-white/20 mt-30 text-white text-2xl font-semibold text-center p-10 space-y-3">
      <h1>Wanna start helping community now?</h1>

      <Button className="bg-violet">Start now!</Button>
    </section>
  );
};

export default Banner;
