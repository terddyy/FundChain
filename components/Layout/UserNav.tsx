"use client";
import React, {useState } from "react";
import Link from "next/link";
import { handleMove } from "@/lib/helperFunctions";

import { GetIndicatorStyle } from "@/lib/interfaces";

import UserSettings from "../Sections/UserSettings";
import { useAuth } from "@/lib/Context/AuthContext";

const UserNav = () => {
  const [indicatorStyle, setIndicatorStyle] = useState<GetIndicatorStyle>({
    left: 8,
    width: 105,
    name: "Dasboard",
  });

  const user = useAuth()

  return (
    <nav className="text-white grid grid-cols-2 grid-rows-[repeat(2,_auto)] px-5 h-fit place-content-center py-4">
      <h1 className="text-2xl font-semibold">Hello, {user.name}</h1>

      <div className="w-fit justify-self-end">
        <UserSettings />
      </div>

      <div className="relative flex items-center justify-center text-white gap-1 bg-violet rounded-lg col-span-2 w-fit px-2 justify-self-center p-2 mt-10 md:justify-self-end">
        <span
          className="absolute h-9 bg-dark-violet z-10 rounded-lg transition-all duration-300"
          style={{ width: indicatorStyle.width, left: indicatorStyle.left }}
        ></span>
        <Link
          className="px-2 py-1 z-10"
          onClick={(e) => handleMove(e, setIndicatorStyle)}
          href={"/user"}
        >
          Dashboard
        </Link>
        <Link
          className="px-2 py-1 z-10"
          onClick={(e) => handleMove(e, setIndicatorStyle)}
          href={"/user/projects"}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default UserNav;


