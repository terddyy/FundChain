import { supabase } from "../supabase/supabaseClient";

export const fetcher = async (table: string) => {
  const { data, error } = await supabase.from(table).select("*");

  if (error) throw error;

  return data;
};

export const projectFetcher = async (table: string) => {
  const { data, error } = await supabase.from(table).select(`*,
      sector(
      name)
    `);

  if (error) throw error;

  return data;
};
