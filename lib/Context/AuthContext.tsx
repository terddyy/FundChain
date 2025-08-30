"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { supabase } from "../supabase/client";
// import { createClient } from "../supabase/server";

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  user: any;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // log in
  async function login(email: string, password: string) {
    setIsLoading(true);
    // const supabase = await createClient();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast("Login failed", { description: error.message });
        return;
      }

      setUser(data.user);

      console.log(data.session);

      const userRole =
        data.user?.app_metadata["https://fundChain.com/claims"]?.role;

      if (userRole) {
        toast.success("Login successful", {
          description: `Redirecting to ${userRole} dashboard...`,
        });
        router.push(`/${userRole}`);
      } else {
        toast.error("Unknown role", {
          description: "Your account does not have a valid role assigned.",
        });
      }
    } catch (err) {
      toast.error("Unexpected error", {
        description: (err as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    // await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
