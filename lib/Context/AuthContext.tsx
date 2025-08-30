"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../supabase/supabaseClient";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userInfo: any | null; // row from "Users" table
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<any | null>(null);
  const [isLoading, setisLoading] = useState(true);

  // fetch current user session and user info
  useEffect(() => {
    const init = async () => {
      setisLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        const { data, error } = await supabase
          .from("Users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (!error) setUserInfo(data);
        else console.error("Failed to fetch user info:", error.message);
      }

      setisLoading(false);
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // login function
  const signIn = async (email: string, password: string) => {
    setisLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      const { data: userData } = await supabase
        .from("Users")
        .select("*")
        .eq("id", data.user?.id)
        .single();

      setUserInfo(userData ?? null);
      router.push("/"); // redirect after login
    } catch (err) {
      console.error("Login error:", (err as Error).message);
    } finally {
      setisLoading(false);
    }
  };

  // logout function
  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setUserInfo(null);
    router.push("/auth");
  };

  return (
    <AuthContext.Provider
      value={{ user, session, userInfo, isLoading, signIn, signOut }}
    >
      {isLoading ? <div>isLoading...</div> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
