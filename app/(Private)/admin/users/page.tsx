import AdminUsersList from "@/app/components/Sections/admin/AdminUsersList";
import { AdminUserListSkeleton } from "@/app/components/Skeletons/AdminUserListSkeleton";

import React, { Suspense } from "react";

const page = async () => {
  return (
    <section className="p-8">
      <Suspense fallback={<AdminUserListSkeleton />}>
        <AdminUsersList />
      </Suspense>
    </section>
  );
};

export default page;
