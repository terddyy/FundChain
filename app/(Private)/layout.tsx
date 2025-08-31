import Nav from "@/app/components/Layout/Nav";
import AuthProvider from "@/lib/Context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Nav  />
      <main className="w-full">{children}</main>
    </AuthProvider>
  );
}
