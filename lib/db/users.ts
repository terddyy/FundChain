import { supabase } from "../supabase/supabaseClient";


// fetches users for admin page
export async function getUsers() {
  const { data, error } = await supabase.from("Users").select("*");

  if (error) throw error;

  return data;
}

