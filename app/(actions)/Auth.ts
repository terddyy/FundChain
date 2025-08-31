"use server"
import { createClient } from "@/lib/supabase/supabaseServer";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export async function handleSignUp(currentState: unknown, formData: FormData) {
  const supabase = await createClient();
  try {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    console.log(password, confirmPassword);
    // checks password
    if (password !== confirmPassword) {
      return { message: "Password Mismatch", success: false };
    }

    // checks password length
    if (password.length < 6) {
      return {
        message: "Password must be at least 6 characters long.",
        success: false,
      };
    }

    // sign ups the use
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: { name },
        },
      }
    );

    // after signUp, update app_metadata role
    if (signUpData.user) {
      await supabase.auth.admin.updateUserById(signUpData.user.id, {
        app_metadata: {
          "https://fundChain.com/claims": { role: "user" },
        },
      });
    }

    if (signUpError) {
      return { message: signUpError.message, success: false };
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
      return { message: "Error inserting to users table", success: false };
    } else {
      redirect("/auth/sign-in");
    }
  } catch (error) {
    console.log(error);
    return { message: "Server Error", success: false };
  }
}

export async function handleSignIn(currentState: unknown, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  const userRole =
    data.user?.app_metadata["https://fundChain.com/claims"]?.role;

  if (!userRole) {
    return { success: false, error: "Unknown role. No valid role assigned." };
  }

  return { success: true, role: userRole };
}
