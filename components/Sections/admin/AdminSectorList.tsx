"use client";
import { Input } from "@/components/ui/input";
import { handleChange } from "@/lib/getIndicatory";
import React, { useState } from "react";
import { Edit2Icon, Plus, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface SectorCardProps {
  title: string;
  description: string;
  activeProjects: number;
  totalVotes: number;
  totalFunds: number;
}

const AdminSectorList = () => {
  const [search, setSearch] = useState("");

  // sample data
  const sectors = [
    {
      title: "Healthcare",
      description:
        "Improving access to quality medical services and facilities.",
      activeProjects: 12,
      totalVotes: 1824,
      totalFunds: 250000,
    },
    {
      title: "Education",
      description:
        "Enhancing educational resources, schools, and training centers.",
      activeProjects: 8,
      totalVotes: 1340,
      totalFunds: 180000,
    },
    {
      title: "Agriculture",
      description:
        "Supporting farmers and modernizing agricultural techniques.",
      activeProjects: 15,
      totalVotes: 920,
      totalFunds: 140000,
    },
    {
      title: "Infrastructure",
      description:
        "Building and maintaining roads, bridges, and public facilities.",
      activeProjects: 6,
      totalVotes: 2150,
      totalFunds: 320000,
    },
    {
      title: "Environment",
      description: "Preserving natural resources and promoting sustainability.",
      activeProjects: 5,
      totalVotes: 870,
      totalFunds: 95000,
    },
    {
      title: "Technology",
      description: "Advancing digital access, innovation, and tech education.",
      activeProjects: 9,
      totalVotes: 1645,
      totalFunds: 210000,
    },
    {
      title: "Tourism",
      description: "Promoting local attractions and cultural heritage.",
      activeProjects: 4,
      totalVotes: 540,
      totalFunds: 78000,
    },
    {
      title: "Public Safety",
      description: "Improving emergency services and community protection.",
      activeProjects: 7,
      totalVotes: 1200,
      totalFunds: 160000,
    },
    {
      title: "Transportation",
      description: "Developing efficient public and rural transportation.",
      activeProjects: 10,
      totalVotes: 980,
      totalFunds: 195000,
    },
    {
      title: "Energy",
      description: "Investing in renewable energy and power infrastructure.",
      activeProjects: 6,
      totalVotes: 1035,
      totalFunds: 230000,
    },
  ];

  return (
    <div>
      {/* heading */}
      <div className="text-white flex flex-col md:flex-row gap-5 items-center md:items-start justify-between">
        <h1 className="text-3xl font-semibold">Project Management</h1>

        <div className="flex gap-2">
          {/* dialog add sector form */}
          <Dialog>
            <DialogTrigger >
              Add Sector <Plus />
            </DialogTrigger>
            <DialogContent >
              <DialogHeader>
                <DialogTitle>Add new sector</DialogTitle>
              </DialogHeader>
              <SectorForm />
            </DialogContent>
          </Dialog>

          {/* seach and filter */}
          <div className="flex items-center gap-2">
            <Input
              className="w-full max-w-xs bg-grayish-blue border border-gray-600"
              placeholder="Search Projects.."
              onChange={(e) => handleChange(e, setSearch)}
            />
          </div>
        </div>
      </div>

      {/* sector list */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        {sectors
          .filter((s) =>
            search ? s.title.toLowerCase().includes(search.toLowerCase()) : s
          )
          .map((sector, index) => (
            <SectorCard
              key={index}
              title={sector.title}
              description={sector.description}
              activeProjects={sector.activeProjects}
              totalVotes={sector.totalVotes}
              totalFunds={sector.totalFunds}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminSectorList;

export function SectorCard({
  title,
  description,
  activeProjects,
  totalVotes,
  totalFunds,
}: SectorCardProps) {
  return (
    <div className="p-4 rounded-xl border border-gray-600 bg-grayish-blue grid grid-cols-3 grid-rows-[repeat(3,_fit-content(100%))] gap-2 w-full max-w-lg">
      {/* title */}
      <h1 className="text-white col-span-2 text-2xl font-semibold">{title}</h1>

      {/* icons */}
      <div className="text-white justify-self-end flex gap-2">
        <Edit2Icon />
        <Trash2 />
      </div>

      {/* description */}
      <p className="text-gray-300 col-span-2 text-md font-medium my-2">
        {description}
      </p>

      <div className="col-start-1 flex gap-2 col-span-3">
        <h2 className="col-start-1 text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Projects: </span>
          {activeProjects}
        </h2>
        <h2 className="text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Votes: </span>
          {totalVotes}
        </h2>
        <h2 className="text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Funds: </span>${totalFunds}
        </h2>
      </div>
    </div>
  );
}

export function SectorForm() {
  return (
    <form
      action=""
      className="flex flex-col items-center justify-center gap-5 mt-8 "
    >
      {/* sector name */}
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="name">Name</Label>
        <Input
          className="bg-white "
          type="name"
          id="name"
          placeholder="Enter sector name"
        />
      </div>
      {/* sector description */}
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="name">Description</Label>
        <Textarea
          className="bg-white"
          id="description"
          placeholder="Enter sector description/purpose"
        />
      </div>

      <Button className="bg-violet-700">Add new sector</Button>
    </form>
  );
}
