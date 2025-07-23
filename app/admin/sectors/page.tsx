import AdminSectorList from "@/components/Sections/admin/AdminSectorList";
import { getSectors } from "@/lib/db/sectors";
import { SectorProps } from "@/lib/interfaces";
import React, { Suspense } from "react";

const page = () => {
  const sectors = getSectors();

  return (
    <section className="p-8">
      <Suspense>
        <AdminSectorList sectorList={sectors} />
      </Suspense>
    </section>
  );
};

export default page;
