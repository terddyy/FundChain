"use client";
import React, { useEffect, useState } from "react";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { handleMove } from "@/lib/getIndicatory";
import { usePathname } from "next/navigation";
import { GetIndicatorStyle } from "@/lib/interfaces";

const UserNav = () => {
  const [indicatorStyle, setIndicatorStyle] = useState<GetIndicatorStyle>({
    left: 8,
    width: 105,
    name: "Dasboard",
  });
  const path = usePathname();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const pathName = path.split("/");
    const lastIndex = pathName[pathName.length - 1];

    if (lastIndex.toLowerCase() === "projects") {
      setIndicatorStyle({ width: 79, left: 117, name: "Projects" });
    } else {
      setIndicatorStyle({ width: 105, left: 8, name: "Dashboard" });
    }
  }, [path]); // prevents hydration error

  return (
    <nav className="text-white grid grid-cols-2 grid-rows-[repeat(2,_auto)] px-5 h-fit place-content-center py-4">
      <h1 className="text-2xl font-semibold">Hello, User</h1>

      <CircleUser width={30} height={30} className=" justify-self-end" />

      <div className="relative flex items-center justify-center text-white gap-1 bg-violet rounded-lg col-span-2 w-fit px-2 justify-self-center p-2 mt-10 md:justify-self-end">
        <span
          className="absolute h-9 bg-dark-violet z-10 rounded-lg transition-all duration-300"
          style={{ width: indicatorStyle.width, left: indicatorStyle.left }}
        ></span>
        <Link
          className="px-2 py-1 z-10"
          onClick={(e) => handleMove(e, setIndicatorStyle)}
          href={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          className="px-2 py-1 z-10"
          onClick={(e) => handleMove(e, setIndicatorStyle)}
          href={"/dashboard/projects"}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default UserNav;
