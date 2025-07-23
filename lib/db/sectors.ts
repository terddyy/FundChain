import { supabase } from "../supabase/supabaseClient";

export async function getSectors() {
  const { data: sectors, error } = await supabase.from("Sectors").select("*");

  if(error) throw error

  return sectors
}
