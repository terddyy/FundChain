import AuthProvider from "@/lib/Context/AuthContext";
import { redirect } from "next/navigation";
import Nav from "@/app/components/Layout/Nav";
import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) redirect("/login"); // SSR guard
  return (
    <>
      <Nav navlinks={[]} />
      <main className="w-full">{children}</main>
    </>
  );
}
