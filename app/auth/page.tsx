"use client";
import LogInForm from "@/components/Auth/LogInForm";
import SignUpForm from "@/components/Auth/SignUpForm";
import { handleMove } from "@/lib/getIndicatory";
import { GetIndicatorStyle } from "@/lib/interfaces";
import React, { useState } from "react";

const page = () => {
  const [indicatorStyle, setIndicatorStyle] = useState<GetIndicatorStyle>({
    left: 8,
    width: 70,
    name: "Log In",
  });

  return (
    <main className="bg-[radial-gradient(circle,_#A261F2,_#52327A,_#020202)] flex flex-col items-center justify-center gap- h-[100vh]">
      <h1 className="text-4xl text-white font-semibold text-center">
        FundChain
      </h1>

      <div className="w-full max-w-sm md:max-w-lg overflow-hidden mx-auto py-10 ">
        <div
          className={`flex transiton-all duration-300 ${
            indicatorStyle.name === "Sign Up" ? "-ml-[100%]" : ""
          }`}
        >
          <LogInForm />
          <SignUpForm />
        </div>
      </div>

      <div className="relative bg-white/10 text-white rounded-xl flex items-center gap-2 p-2">
        {/* moving bg */}
        <span
          className="bg-violet rounded-lg absolute h-8 transition-all duration-300"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        ></span>

        <h1
          onClick={(e) => handleMove(e, setIndicatorStyle)}
          className=" px-3 cursor-pointer z-10"
        >
          Log In
        </h1>
        <h1
          onClick={(e) => handleMove(e, setIndicatorStyle)}
          className=" px-3 cursor-pointer z-10"
        >
          Sign Up
        </h1>
      </div>
    </main>
  );
};

export default page;
