import UserDashboard from "@/app/components/Sections/user/UserDashboard";
import { Skeleton } from "@/app/components/ui/skeleton";
import { getUserDashboardData } from "@/lib/supabase/queries/userDashBoard";
import React, { Suspense } from "react";

const page = async () => {
  const stats = await getUserDashboardData();

  return (
    <>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg shadow bg-gray-800 animate-pulse"
                >
                  <div className="flex justify-between items-center mb-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-10 rounded-lg" />
                  </div>
                  <Skeleton className="h-6 w-12 mb-1" />
                  <Skeleton className="h-3 w-20" />
                </div>
              ))}
          </div>
        }
      >
        <UserDashboard stats={stats} />
      </Suspense>
    </>
  );
};

export default page;
