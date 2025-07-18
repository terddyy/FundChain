import { Skeleton } from "../ui/skeleton";

export function AdminProjectListSkeleton({ quantity }: { quantity: number }) {
  return (
    <section className="flex flex-wrap items-center justify-center gap-2 w-full">
      <div className="flex items-center justify-between w-full mb-10">
        <Skeleton className="h-[40px] w-sm rounded-xl" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-[40px] w-xs rounded-xl" />
          <Skeleton className="h-[40px] w-20 rounded-xl" />
        </div>
      </div>

      {Array.from({ length: quantity }).map((_, i) => (
        <div key={i} className="w-full max-w-lg ">
          <Skeleton className="h-[140px] w-full   rounded-xl" />
        </div>
      ))}
    </section>
  );
}
