"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { supabase } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const LogInForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // log in
  async function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      // sign in user
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
      setIsLoading(true);

      // gets the user id
      const userId = data.user?.id;
      // gets the user role in jwt
      const userRole =
        data.user?.app_metadata["https://fundChain.com/claims"].role;

      // redirect user
      if (userRole) {
        router.push(userRole);
      } else {
        return <div className="text-white">Unknown role</div>;
      }
      setIsLoading(false);
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
          {isLoading ? "Loading......" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default LogInForm;
