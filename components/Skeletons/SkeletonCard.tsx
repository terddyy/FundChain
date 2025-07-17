import { Skeleton } from "../ui/skeleton";

export function SkeletonCard({ quantity }: { quantity: number }) {
  return (
    <section className="flex flex-wrap items-center justify-center gap-2 w-full">
      {Array.from({ length: quantity }).map((_, i) => (
        <div key={i} className="w-full max-w-sm ">
          <Skeleton className="h-[180px] w-full rounded-xl" />
          <div className="p-2 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
            <Skeleton className="h-4 w-full" />
            <div className="flex items-center justify-between gap-2">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
