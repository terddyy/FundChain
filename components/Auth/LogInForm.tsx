"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const LogInForm = () => {
  const [logIn, setLogIn] = useState(true);

  return (
    <form className="text-white flex flex-col items-center justify-center gap-10 h-[100vh]">
      {/* email */}

      {/* main form */}
      <div className="w-full max-w-sm p-5 rounded-xl space-y-5 bg-white/30 shadow-center-white">
      <h1 className="text-4xl font-semibold my-20 text-center">Log In</h1>
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

        <Button className="w-full max-w-sm mx-auto bg-dark-violet my-10">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default LogInForm;
