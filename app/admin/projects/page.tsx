import AdminProjectList from "@/components/Sections/AdminProjectList";
import { AdminProjectListSkeleton } from "@/components/Skeletons/AdminProjectListSkeleton";
import { getProjects } from "@/lib/getProjects";
import React, { Suspense } from "react";

const page = () => {
  const projects = getProjects();

  return (
    <section className="p-8">
      <Suspense fallback={<AdminProjectListSkeleton quantity={10}/>}>
        <AdminProjectList projects={projects} />
      </Suspense>
    </section>
  );
};

export default page;
