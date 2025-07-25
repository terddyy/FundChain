import { supabase } from "../supabase/supabaseClient";

// general fetcher
export const fetcher = async (table: string) => {
  const { data, error } = await supabase.from(table).select("*");

  if (error) throw error;

  return data;
};

// Project sector
export const projectFetcher = async (table: string) => {
  const { data, error } = await supabase.from(table).select(`*,
      sector(
      name)
    `);

  if (error) throw error;

  return data;
};

// User fetcher for admin list
export const adminUserFetcher = async () => {
  const { data: users, error } = await supabase
    .from("Users")
    .select("id, name, email,Projects(id, name), Funds(id), Votes(id), status")
    .eq("role", "user");

  if (error) throw error;

  return users;
};
  