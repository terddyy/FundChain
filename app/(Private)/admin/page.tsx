import AdminDashBoardList from "@/app/components/Sections/admin/AdminDashBoardList";
import { StatCardSkeleton } from "@/app/components/Skeletons/StatCardSkeleton";
import React, { Suspense } from "react";

const page = () => {
  return (
    <main className="text-white p-8">
      <Suspense fallback={<StatCardSkeleton quantity={4} />}>
        <AdminDashBoardList />
      </Suspense>
    </main>
  );
};

export default page;
