import { supabase } from "@/lib/supabase/supabaseClient";
import { redirect } from "next/navigation";

export async function handleSignUp(currentState: unknown, formData: FormData) {
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
      .insert([{ id: userData?.id, name: name, email: email }])
      .select();

    if (error) {
      return { message: "Error inserting to users table", success: false };
    } else {
      return redirect("/auth/sign-in");
    }
  } catch (error) {
    console.log(error);
    return { message: "Server Error", success: false };
  }
}
