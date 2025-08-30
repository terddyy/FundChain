"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function createSupabaseServerClient() {
  return createServerComponentClient({ cookies });
}