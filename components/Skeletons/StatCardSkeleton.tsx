import { Skeleton } from "../ui/skeleton";

export function StatCardSkeleton({ quantity }: { quantity: number }) {
  return (
    <section className="flex flex-wrap gap-2 items-center justify-center">
      {Array.from({ length: quantity }).map((_, i) => (
        <Skeleton key={i} className="h-[150px] w-full max-w-4xl rounded-xl" />
      ))}
    </section>
  );
}
