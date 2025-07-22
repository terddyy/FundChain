import { supabase } from "@/lib/supabase/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, role } = await req.json();
  console.log(userId, role);

  const { data, error } = await supabase.auth.admin.updateUserById(userId, {
    user_metadata: {
      "https://fundChain.com/claims": { role },
    },
  });

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
