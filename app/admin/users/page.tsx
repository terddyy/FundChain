import AdminUsersList from "@/components/Sections/admin/AdminUsersList";
import { AdminUserListSkeleton } from "@/components/Skeletons/AdminUserListSkeleton";

import React, { Suspense } from "react";

const page = () => {
 
  return (
    <section className="p-8">
      <Suspense fallback={<AdminUserListSkeleton />}>
        <AdminUsersList />
      </Suspense>
    </section>
  );
};

export default page;
