"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { useRouter } from "next/navigation";
interface Props {
  children: React.ReactNode;
  role: "admin" | "user";
}

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children, role }: Props) => {
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch user data
    const fetchUserData = async () => {
      const { data: user, error } = await supabase.from("Users").select("*");
      // .single();

      console.log();

      if (error) {
        console.log(error.message);
        router.push("/auth");
        return;
      }

      if (user?.[0].role !== role) {
        return router.push("/auth");
      }
      setUserData(user[0]);
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
