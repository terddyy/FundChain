import AdminUsersList from "@/components/Sections/AdminUsersList";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section  className="p-8">
      <Suspense>
        <AdminUsersList />
      </Suspense>
    </section>
  );
};

export default page;
