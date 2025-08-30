import { redirect } from "next/navigation";
import { GetIndicatorStyle } from "./interfaces";
import { supabase } from "./supabase/supabaseServer";

export function handleMove(
  e: React.MouseEvent<HTMLElement>,
  setter: React.Dispatch<React.SetStateAction<GetIndicatorStyle>>
) {
  const target = e.currentTarget;
  const left = target.offsetLeft;
  const width = target.offsetWidth;
  const value = target.textContent;

  setter({ width: width, left: left, name: value });
}

export function handleChange<T extends HTMLInputElement | HTMLTextAreaElement>(
  e: React.ChangeEvent<T>,
  setter: React.Dispatch<React.SetStateAction<any>>
) {
  const value = e.target.value;

  setter(value);
}

export async function handleSignOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout error:", error.message);
    return;
  }

  redirect("/auth");
}
