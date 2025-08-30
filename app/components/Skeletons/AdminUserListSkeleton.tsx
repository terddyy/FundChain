import { Skeleton } from "../ui/skeleton";

export function AdminUserListSkeleton() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-2 w-full">
      <div className="flex items-center justify-between w-full mb-10">
        <Skeleton className="h-[40px] w-sm rounded-xl" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-[40px] w-md rounded-xl" />
        </div>
      </div>
      <Skeleton className="h-[700px] w-7xl rounded-xl" />
    </section>
  );
}
