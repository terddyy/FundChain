"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { createBrowserClientSupabase } from "../supabase/supabaseBrowser";

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch user data
    const fetchUserData = async () => {
      const supabase = await createBrowserClientSupabase();
      const userEmail = (await supabase.auth.getSession()).data.session?.user
        .email;

      console.log(userEmail);
      const { data: user, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", userEmail)
        .single();

      setUserData(user);
      setIsLoading(false);
    };

    fetchUserData();
    console.log(userData);
  }, []);


  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
