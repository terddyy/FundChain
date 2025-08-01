import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SignUpForm = () => {
  return (
    <form className=" text-white flex flex-col items-center justify-center gap-15 h-[100vh]">
      <h1 className="text-4xl font-semibold text-center">FundChain</h1>

      {/* main form */}
      <div className="w-full max-w-sm p-5 rounded-xl space-y-5 bg-transparent shadow-center-white text-center">
        <h1 className="text-3xl font-semibold my-12 text-center">Sign Up</h1>
        {/* name */}
        <div className="grid w-full max-w-sm items-center gap-1 mx-auto">
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            id="name"
            placeholder="Name"
            className="bg-white text-dark-violet"
          />
        </div>
        {/* email */}
        <div className="grid w-full max-w-sm items-center gap-1 mx-auto">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-white text-dark-violet"
          />
        </div>
        {/* password */}
        <div className="grid w-full max-w-sm  items-center gap-1 mx-auto">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-white text-dark-violet"
          />
        </div>

        <Button size={"lg"} className="w-3xs mx-auto bg-violet my-8">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
