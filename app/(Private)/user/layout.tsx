import Nav from "@/app/components/Layout/Nav";
import AuthProvider from "@/lib/Context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { href: "/user/projects", label: "Projects" },
    { href: "/user/sectors", label: "Sectors" },
    { href: "/user/propose", label: "Propose Project" },
  ];

  return (
    <>
      <Nav  navlinks={navItems} />

      <main className={`$h-[100vh]`}>
        <section className="p-8">{children}</section>
      </main>
    </>
  );
}
