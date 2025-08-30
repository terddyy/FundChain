import AdminDashBoardList from "@/components/Sections/admin/AdminDashBoardList";
import { StatCardSkeleton } from "@/components/Skeletons/StatCardSkeleton";
import React, { Suspense } from "react";

const page = () => {
  return (
  <main className="text-white p-8">
    <Suspense fallback={<StatCardSkeleton quantity={4} />}>
        <AdminDashBoardList/>
    </Suspense>
  </main>);
};

export default page;
