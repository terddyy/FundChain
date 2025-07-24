"use client";
import { DropDownProps, Projects } from "@/lib/interfaces";
import React, { use, useState } from "react";

import { handleChange } from "@/lib/getIndicatory";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit2Icon, FilterIcon, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { fetcher, projectFetcher } from "@/lib/db/supabaseFetcher";
import { supabase } from "@/lib/supabase/supabaseClient";

interface Props {
  projects: Promise<Projects[]>;
}

interface ProjectCardProps {
  mutate?: () => void;
  id: string;
  title: string;
  status: string;
  votes: number;
  funds: number;
  sector: string;
}

const AdminProjectList = () => {
  const {
    data: allProjects,
    error,
    mutate,
  } = useSWR("Projects", projectFetcher, { suspense: true });

  console.log(allProjects);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div>
      {/* heading */}
      <div className="text-white flex flex-col md:flex-row gap-5 items-center md:items-start justify-between">
        <h1 className="text-3xl font-semibold">Project Management</h1>

        {/* seach and filter */}
        <div className="flex items-center gap-2">
          <Input
            className="w-full max-w-xs bg-grayish-blue border border-gray-600"
            placeholder="Search Projects.."
            onChange={(e) => handleChange(e, setSearch)}
          />
          <DropdownStatus value={status} setter={setStatus} />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center mt-10">
        {allProjects
          .filter((p) =>
            search ? p.name.toLowerCase().includes(search.toLowerCase()) : p
          )
          .filter((p) =>
            status ? status.toLowerCase() === p.status.toLowerCase() : p
          )
          .map((p, index) => (
            <ProjectCard
              mutate={mutate}
              id={p.id}
              key={index}
              sector={p.sector.name}
              title={p.name}
              status={p.status}
              votes={p.votes}
              funds={p.funds}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminProjectList;

export function DropdownStatus({ value, setter }: DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-violet-600" asChild>
        <Button className="hover:bg-violet-600/70 cursor-pointer">
          <FilterIcon />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-grayish-blue text-gray-300">
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(item) =>
            setter((prev) => (prev === item ? "" : item))
          }
        >
          <DropdownMenuRadioItem value="Pending">Pending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Approved">
            Approved
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Rejected">
            Rejected
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ProjectCard({
  id,
  title,
  status,
  votes,
  funds,
  sector,
  mutate,
}: ProjectCardProps) {
  async function handleEditStatus(value: string) {
    const { data, error } = await supabase
      .from("Projects")
      .update({ status: value })
      .eq("id", id);

    if (error) throw error;

    mutate!();
  }

  return (
    <div className="bg-grayish-blue border border-gray-700 p-4 rounded-xl grid grid-cols-3 grid-rows-[_repeat(1,_minmax(70px,80px))] gap-2 w-full max-w-lg full space-x-5">
      {/* title */}
      <h1 className="text-2xl font-semibold text-white col-span-2">{title}</h1>

      {/* actions */}
      <div className="space-x-2 ml-auto flex items-start justify-center text-gray-500">

        {/* approved reject a project */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Edit2Icon
              className="cursor-pointer  hover:text-gray-200"
              width={20}
              height={20}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-grayish-blue text-gray-300 p-2 rounded-md">
            <DropdownMenuLabel>Select Sector</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              onValueChange={(value) => handleEditStatus(value)}
            >
              <DropdownMenuRadioItem value={"approved"}>
                Approved
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"rejected"}>
                Reject
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* delete project */}
        <Trash2
          className="cursor-pointer hover:text-gray-200"
          width={20}
          height={20}
        />
      </div>

      {/* other contents */}
      <div className="space-x-2 flex items-center text-sm col-span-3">
        <h5
          className={`w-fit px-2 py-1 rounded-xl ${
            status === "approved"
              ? "bg-green-600/40 text-green-500"
              : status === "pending"
              ? "bg-yellow-600/30 text-yellow-500"
              : "bg-red-600/30 text-red-500"
          }`}
        >
          {status}
        </h5>
        <h5 className="text-gray-300">
          {votes ? votes.toLocaleString() : 0} votes
        </h5>
        <h5 className="text-violet-400">${funds ? funds : 0}</h5>
        <h5 className="text-gray-300 ml-auto">{sector}</h5>
      </div>
    </div>
  );
}
