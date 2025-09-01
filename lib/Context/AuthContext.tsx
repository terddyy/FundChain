"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { createBrowserClientSupabase } from "../supabase/supabaseBrowser";
import { Skeleton } from "@/app/components/ui/skeleton";

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
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

  if (isLoading)
    return (
      <div className="p-4 max-w-sm mx-auto">
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-4 w-64 mb-2" />
        <Skeleton className="h-4 w-56 mb-2" />
      </div>
    );

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
