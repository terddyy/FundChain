"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { supabase } from "@/lib/supabase/supabaseClient";

const LogInForm = () => {
  // log in
  async function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log(email, password);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log(data.user);
      console.log(session);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleLogIn}
      className=" text-white flex flex-col items-start justify-center gap-15 w-full h-[498px]"
    >
      {/* main form */}
      <div className=" p-5 rounded-xl space-y-5  text-center w-full ">
        <h1 className="text-3xl font-semibold my-12 text-center">Log In</h1>
        {/* email */}
        <div className="grid w-full max-w-sm items-center gap-1 mx-auto">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
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
            name="password"
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
