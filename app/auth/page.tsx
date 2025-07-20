"use client";
import LogInForm from "@/components/Auth/LogInForm";
import SignUpForm from "@/components/Auth/SignUpForm";
import { handleMove } from "@/lib/getIndicatory";
import { GetIndicatorStyle } from "@/lib/interfaces";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  const [indicatorStyle, setIndicatorStyle] = useState<GetIndicatorStyle>({
    left: 8,
    width: 70,
    name: "Log In",
  });

  return (
    <main className="bg-dark-violet flex flex-col items-center justify-center gap- h-[100vh]">
      <Tabs defaultValue="sign-in" className="w-[400px]">
        <h1 className="text-5xl text-violet-600 font-semibold text-center mb-8">
          FundChain
        </h1>

        <TabsContent
          className="bg-grayish-blue border border-gray-600 rounded-2xl"
          value="sign-in"
        >
          <LogInForm />
        </TabsContent>
        <TabsContent
          className="bg-grayish-blue border border-gray-600 rounded-2xl"
          value="sign-up"
        >
          <SignUpForm />
        </TabsContent>
        <TabsList className="mx-auto bg-grayish-blue border border-gray-600 text-white ">
          <TabsTrigger value="sign-in">Sign In </TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
      </Tabs>
    </main>
  );
};

export default page;

//  <div className="w-full max-w-sm md:max-w-lg overflow-hidden mx-auto py-10 ">
//         <div
//           className={`flex transiton-all duration-300 ${
//             indicatorStyle.name === "Sign Up" ? "-ml-[100%]" : ""
//           }`}
//         >
//           <LogInForm />
//           <SignUpForm />
//         </div>
//       </div>

//       <div className="relative bg-white/10 text-white rounded-xl flex items-center gap-2 p-2">
//         {/* moving bg */}
//         <span
//           className="bg-violet rounded-lg absolute h-8 transition-all duration-300"
//           style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
//         ></span>

//         <h1
//           onClick={(e) => handleMove(e, setIndicatorStyle)}
//           className=" px-3 cursor-pointer z-10"
//         >
//           Log In
//         </h1>
//         <h1
//           onClick={(e) => handleMove(e, setIndicatorStyle)}
//           className=" px-3 cursor-pointer z-10"
//         >
//           Sign Up
//         </h1>
//       </div>
