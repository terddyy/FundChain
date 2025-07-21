import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ClockFading } from "lucide-react";
import { supabase } from "@/lib/supabase/supabaseClient";

const SignUpForm = () => {
  // handles sign up of new user
  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: { name },
        },
      }
    );

    if (signUpError) {
      console.error(signUpError.message);
      return;
    }

    // adds user to the Users table
    const userData = signUpData.user;
    const { data, error } = await supabase
      .from("Users")
      .insert([
        { id: userData?.id, name: name, email: email, password: password },
      ])
      .select();

    if (error) {
      console.error("Error inserting to users table:", error.message);
    } else {
      console.log("User added to custom users table:", data);
    }

    console.log(data);
  }

  return (
    <form
      onSubmit={handleSignUp}
      className=" text-white flex flex-col items-center justify-center gap-15 w-full"
    >
      {/* main form */}
      <div className=" p-5 rounded-xl space-y-5  text-center w-full  ">
        <h1 className="text-3xl font-semibold my-12 text-center">Sign Up</h1>
        {/* name */}
        <div className="grid w-full max-w-sm items-center gap-1 mx-auto">
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
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

export default SignUpForm;
