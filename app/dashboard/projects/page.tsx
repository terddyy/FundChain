import ProjectsList from "@/components/Sections/ProjectsList";
import { SkeletonCard } from "@/components/Skeletons/SkeletonCard";
import { getProjects } from "@/lib/getProjects";
import { Suspense } from "react";

const page = () => {
  const projects = getProjects();
  return (
    <Suspense fallback={<SkeletonCard quantity={10} />}>
      <ProjectsList projects={projects} />
    </Suspense>
  );
};

export default page;
