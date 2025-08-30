import AdminSectorList from "@/app/components/Sections/admin/AdminSectorList";
import AdminSectorLIstSkeleton from "@/app/components/Skeletons/AdminSectorLIstSkeleton";
import { getSectors } from "@/lib/db/sectors";
import { fetcher } from "@/lib/db/supabaseFetcher";
import { SectorProps } from "@/lib/interfaces";
import React, { Suspense } from "react";
import useSWR from "swr";

const page = () => {
  return (
    <section className="p-8">
      <Suspense fallback={<AdminSectorLIstSkeleton quantity={10} />}>
        <AdminSectorList />
      </Suspense>
    </section>
  );
};

export default page;
