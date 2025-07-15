import LogInForm from "@/components/Auth/LogInForm";
import SignUpForm from "@/components/Auth/SignUpForm";
import React from "react";

const page = () => {
  return (
    <main className="bg-[radial-gradient(circle,_#A261F2,_#52327A,_#020202)]">
      <div className="flex  gap-10">
        <LogInForm />
        <SignUpForm />
      </div>
    </main>
  );
};

export default page;
