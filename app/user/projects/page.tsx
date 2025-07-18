import UserProjectsList from "@/components/Sections/UserProjectsList";
import { SkeletonCard } from "@/components/Skeletons/SkeletonCard";
import { getProjects } from "@/lib/getProjects";
import { Suspense } from "react";

const page = () => {
  const projects = getProjects();
  return (
    <Suspense fallback={<SkeletonCard quantity={10} />}>
      <UserProjectsList projects={projects} />
    </Suspense>
  );
};

export default page;
