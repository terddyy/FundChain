import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SignUpForm = () => {
  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSignUp}
      className=" text-white flex flex-col items-center justify-center gap-15 w-full min-w-sm px-5"
    >
      {/* main form */}
      <div className=" p-5 rounded-xl space-y-5 bg-transparent shadow-center-white text-center w-full max-w-sm md:max-w-lg ">
        <h1 className="text-3xl font-semibold my-12 text-center">Sign Up</h1>
        {/* name */}
        <div className="grid w-full max-w-sm items-center gap-1 mx-auto">
          <Label htmlFor="name">Name</Label>
          <Input
            required
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
            required
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
            required
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
