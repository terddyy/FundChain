import UserProjectsList from "@/components/Sections/user/UserProjectsList";
import { SkeletonCard } from "@/components/Skeletons/SkeletonCard";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<SkeletonCard quantity={10} />}>
      <UserProjectsList />
    </Suspense>
  );
};

export default page;
