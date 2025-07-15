import LogInForm from "@/components/Auth/LogInForm";
import SignUpForm from "@/components/Auth/SignUpForm";
import React from "react";

const page = () => {
  return (
    <main className="bg-[radial-gradient(circle,_#A261F2,_#52327A,_#020202)] flex flex-col items-center justify-center gap-15">
      <h1 className="text-4xl text-white font-semibold text-center">FundChain</h1>

      <div className="flex gap-10 w-full max-w-sm overflow-hidden mx-auto">
        <LogInForm />
        <SignUpForm />
      </div>
    </main>
  );
};

export default page;
