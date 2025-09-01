import UserDashboard from "@/app/components/Sections/user/UserDashboard";
import { getUserDashboardData } from "@/lib/supabase/queries/userDashBoard";
import React, { Suspense } from "react";

const page = async () => {
 
  const stats = await getUserDashboardData();


  return (
    <>
      <Suspense fallback={<>TITE</>}>
        <UserDashboard stats={stats} />
      </Suspense>
    </>
  );
};

export default page;
