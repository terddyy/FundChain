import AdminSectorList from "@/components/Sections/admin/AdminSectorList";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section className="p-8">
      <Suspense>
        <AdminSectorList />
      </Suspense>
    </section>
  );
};

export default page;
