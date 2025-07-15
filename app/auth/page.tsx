"use client";
import LogInForm from "@/components/Auth/LogInForm";
import SignUpForm from "@/components/Auth/SignUpForm";
import React, { useState } from "react";

const page = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 8,
    width: 70,
    form: "Log In",
  });

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget;
    const left = target.offsetLeft;
    const width = target.offsetWidth;
    const value = target.textContent;

    setIndicatorStyle({ width: width, left: left, form: value });
  }

 

  return (
    <main className="bg-[radial-gradient(circle,_#A261F2,_#52327A,_#020202)] flex flex-col items-center justify-center gap- h-[100vh]">
      <h1 className="text-4xl text-white font-semibold text-center">
        FundChain
      </h1>

      <div className="w-full max-w-sm overflow-hidden mx-auto py-10 ">
        <div
          className={`flex transiton-all duration-300 ${
            indicatorStyle.form === "Sign Up" ? "-ml-[100%]" : ""
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

        <h1 onClick={handleMove} className=" px-3 cursor-pointer z-10">
          Log In
        </h1>
        <h1 onClick={handleMove} className=" px-3 cursor-pointer z-10">
          Sign Up
        </h1>
      </div>
    </main>
  );
};

export default page;
