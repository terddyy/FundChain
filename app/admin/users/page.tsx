import AdminUsersList from "@/components/Sections/admin/AdminUsersList";
import { AdminUserListSkeleton } from "@/components/Skeletons/AdminUserListSkeleton";
import { getUsers } from "@/lib/db/users";

import React, { Suspense } from "react";

const page = async () => {

  // const users = await getUsers()
  // console.log(users);

  return (
    <section className="p-8">
      <Suspense fallback={<AdminUserListSkeleton />}>
        <AdminUsersList />
      </Suspense>
    </section>
  );
};

export default page;
