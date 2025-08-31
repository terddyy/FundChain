"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/supabaseServer";
interface Props {
  children: React.ReactNode;
  role?: "admin" | "user";
}

export const AuthContext = createContext<any>(null);

const AuthProvider = async ({ children, role }: Props) => {
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const supabase = await createSupabaseServerClient();

  useEffect(() => {
    // fetch user data
    const fetchUserData = async () => {
      const userEmail = (await supabase.auth.getSession()).data.session?.user
        .email;

      console.log(userEmail);
      const { data: user, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", userEmail)
        .single();


      if (error) {
        console.log(error.message);
        router.push("/auth/sign-in");
        return;
      }

      if (user?.role !== role) {
        return router.push("/auth/sign-in");
      }
      setUserData(user);
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
