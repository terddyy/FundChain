import AdminProjectList from "@/app/components/Sections/admin/AdminProjectList";
import { AdminProjectListSkeleton } from "@/app/components/Skeletons/AdminProjectListSkeleton";
import { getProjects } from "@/lib/getProjects";
import React, { Suspense } from "react";

const page = () => {
  const projects = getProjects();

  return (
    <section className="p-8">
      <Suspense fallback={<AdminProjectListSkeleton quantity={10} />}>
        <AdminProjectList />
      </Suspense>
    </section>
  );
};

export default page;
