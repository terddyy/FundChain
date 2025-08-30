import UserProjectsList from "@/app/components/Sections/user/UserProjectsList";
import { SkeletonCard } from "@/app/components/Skeletons/SkeletonCard";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<SkeletonCard quantity={10} />}>
      <UserProjectsList />
    </Suspense>
  );
};

export default page;
