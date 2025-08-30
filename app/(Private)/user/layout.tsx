import Nav from "@/app/components/Layout/Nav";
import AuthProvider from "@/lib/Context/AuthContext";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    
    { href: "/user/projects", label: "Projects" },
    { href: "/auth/sign-in", label: "Sectors" },
    { href: "/auth/sign-in", label: "Propose Project" }
  ]

  return (
    <AuthProvider role="user">
      <Nav role={"user"} navlinks={navItems} />

      <main className={`$h-[100vh]`}>
        <section className="p-8">{children}</section>
      </main>
    </AuthProvider>
  );
}
