"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { fetcher, projectFetcher } from "@/lib/db/supabaseFetcher";
import { DropDownProps, Projects, SectorProps } from "@/lib/interfaces";
import { ThumbsUp, BanknoteArrowUp, FolderDot } from "lucide-react";
import useSWR from "swr";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { supabase } from "@/lib/supabase/supabaseClient";
import { useAuth } from "@/lib/Context/AuthContext";

interface Props {
  projects: Promise<Projects[]>;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tFunds: number;
  cFunds: number;
  sector: string;
}

const UserProjectsList = () => {
  const [selectedSector, setSelectedSector] = useState("");

  const {
    data: allProjects = [],
    error,
    mutate,
  } = useSWR("Projects", projectFetcher, { suspense: true });

  const sectors = Array.from(new Set(allProjects.map((p) => p.sector.name)));

  const closeRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section>
      {/* sectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 w-full max-w-lg md:max-w-xl mx-auto">
        {sectors.map((sector, index) => (
          <h1
            onClick={() =>
              setSelectedSector((prev) => (prev === sector ? "" : sector))
            }
            key={index}
            className={`text-white transition-colors cursor-pointer ${
              selectedSector === sector ? "bg-violet" : "bg-violet/50"
            } py-1 px-2 rounded-lg`}
          >
            {sector}
          </h1>
        ))}
      </div>

      {/* projects */}
      <div className="flex flex-wrap items-center justify-center  mt-10 gap-4">
        <div className="w-full">
          <Dialog>
            <DialogTrigger className="ml-auto bg-violet-600 px-3 py-2 font-medium cursor-pointer">
              Submit Project <FolderDot />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Submit Project</DialogTitle>
              </DialogHeader>

              <ProjectForm mutate={mutate} closeRef={closeRef} />
              <DialogClose ref={closeRef} className="hidden" />
            </DialogContent>
          </Dialog>
        </div>
        {allProjects
          .filter((project) =>
            selectedSector ? project.sector.name === selectedSector : project
          )
          .map((project, index) => {
            return (
              // project
              <ProjectCard
                key={index}
                title={project.name}
                description={project.description}
                tFunds={project.targetFunds}
                cFunds={project.currentFunds}
                sector={project.sector.name}
              />
            );
          })}
        ;
      </div>
    </section>
  );
};

export default UserProjectsList;

export function ProjectCard({
  title,
  description,
  tFunds,
  cFunds,
  sector,
}: ProjectCardProps) {
  console.log(sector);

  const currentFunds = cFunds ?? 0;
  const targetFunds = tFunds ?? 0;

  return (
    <div className=" w-full max-w-sm ">
      {/* image */}
      {/* <div className="bg-white/20 text-white w-full text-center rounded-t-xl p-10 border">
                  <Icon className="w-20 h-20 mx-auto" /> pwedeng conditional rendering depending on its sector
                </div> */}
      {/* texts */}
      <div className="text-left bg-white rounded-xl p-4 space-y-2">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="font-light text-sm text-slate-700">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <h3 className="bg-violet/10 py-1 px-2 rounded-xl text-violet">
            {sector}
          </h3>
          <h3 className="text-violet">
            {currentFunds < targetFunds ? "Active" : "Inactive"}
          </h3>
        </div>

        {/* progress bar */}
        <div className="w-full space-y-2">
          <Progress value={(currentFunds / targetFunds) * 100} />
          <div className="flex items-center justify-between">
            <h1>{((currentFunds / targetFunds) * 100).toFixed(2)}% Funded</h1>
            <h1>
              {currentFunds}/{targetFunds}
            </h1>
          </div>
        </div>
        {/* actions */}
        <div className="flex items-center justify-between gap-2 w-max">
          <Button className="w-full">
            <ThumbsUp /> Vote
          </Button>
          <Button className="w-full">
            <BanknoteArrowUp /> Fund
          </Button>
        </div>
      </div>
    </div>
  );
}

// Submit project form
export function ProjectForm({
  mutate,
  closeRef,
}: {
  mutate: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const user = useAuth();
  const [sector, setSector] = useState("");

  async function handleSubmitProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const description = formData.get("description");
    const funds = formData.get("funds");

    const { data: project, error } = await supabase.from("Projects").insert({
      name: name,
      description: description,
      targetFunds: funds,
      sector: sector,
      userId: user.id,
    });

    if (error) throw error;

    closeRef?.current?.click();
  }

  return (
    <form
      onSubmit={handleSubmitProject}
      className="flex flex-col items-center justify-center gap-5 mt-8 "
    >
      {/* project name */}
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="name">Name</Label>
        <Input
          required
          className="bg-white "
          type="name"
          id="name"
          name="name"
          placeholder="Enter project name"
        />
      </div>

      {/* sector and target funds field */}
      <div className="flex items-center justify-center gap-2 max-w-sm w-full">
        {/* sector dropdown */}
        <DropdownSector value={sector} setter={setSector} />

        {/* Funds needed */}
        <Input
          required
          className="bg-white w-full"
          type="number"
          id="name"
          name="funds"
          placeholder="Extimated Funds"
        />
      </div>

      {/* project description */}
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="name">Description</Label>
        <Textarea
          required
          name="description"
          className="bg-white"
          id="description"
          placeholder="Enter project description/purpose"
        />
      </div>

      <Button className="bg-violet-600" size={"lg"}>
        Submit Project
      </Button>
    </form>
  );
}

export function DropdownSector({ value, setter }: DropDownProps) {
  const { data: sectors, mutate } = useSWR<SectorProps[]>("Sectors", fetcher, {
    suspense: true,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-violet-600 w-max" asChild>
        <Button className="hover:bg-violet-600/70 cursor-pointer">
          Select Sector
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-grayish-blue text-gray-300 p-2 rounded-md">
        <DropdownMenuLabel>Select Sector</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(item) =>
            setter((prev) => (prev === item ? "" : item))
          }
        >
          {sectors?.map((sector, index) => (
            <DropdownMenuRadioItem
              className="my-2 cursor-pointer hover:bg-gray-500 p-2 rounded-xl"
              key={index}
              value={sector.id ?? ""}
            >
              {sector.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
