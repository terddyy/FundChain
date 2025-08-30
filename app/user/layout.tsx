import UserNav from "@/components/Layout/UserNav";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/lib/Context/AuthContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider role="user">
      <main
        className={`${poppins.className} bg-dark-violet antialiased h-[100vh]`}
      >
        <UserNav />

        <section className="p-8">{children}</section>

        {/* toaster notif */}
        <Toaster className="bg-gray-900" />
      </main>
    </AuthProvider>
  );
}
