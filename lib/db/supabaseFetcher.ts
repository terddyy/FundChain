import { createBrowserClientSupabase } from "../supabase/supabaseBrowser";

const supabase = createBrowserClientSupabase();

// general fetcher
export const fetcher = async (table: string) => {
  const { data, error } = await supabase.from(table).select("*");

  if (error) throw error;

  return data;
};

// Project sector
export const projectFetcher = async (table: string) => {
  const { data, error } = await supabase.from(table).select(`*,
        sector(id, name),
        userId(id, name),
        Votes!projectId(id, userId)
    `);

  if (error) throw error;

  return data;
};

// User fetcher for admin list
export const adminUserFetcher = async () => {
  const { data: users, error } = await supabase
    .from("Users")
    .select(
      "id, name, email, status,Projects(id, name), Funds(id),  Votes!userId(id, userId)"
    )
    .eq("role", "user");

  if (error) throw error;

  return users;
};

// User fetcher for admin list
export const adminSectorFetcher = async () => {
  const { data: users, error } = await supabase
    .from("Sectors")
    .select("*, Projects(name), Votes(id)");

  if (error) throw error;

  return users;
};
