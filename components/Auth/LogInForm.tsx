"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const LogInForm = () => {
  function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleLogIn}
      className=" text-white flex flex-col items-center justify-center gap-15 w-full min-w-sm md:min-w-lg px-5"
    >

      {/* main form */}
      <div className=" p-5 rounded-xl space-y-5 bg-white/10 shadow-center-white text-center w-full ">
        <h1 className="text-3xl font-semibold my-12 text-center">Log In</h1>
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

export default LogInForm;
