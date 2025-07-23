"use client";
import { Input } from "@/components/ui/input";
import { handleChange } from "@/lib/getIndicatory";
import React, { use, useState } from "react";
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
import { supabase } from "@/lib/supabase/supabaseClient";
import { SectorProps } from "@/lib/interfaces";
import { DialogClose } from "@radix-ui/react-dialog";

interface Props {
  sectorList: Promise<SectorProps[]>;
}

const AdminSectorList = ({ sectorList }: Props) => {
  const [search, setSearch] = useState("");

  const sectors = use(sectorList);

  return (
    <div>
      {/* heading */}
      <div className="text-white flex flex-col md:flex-row gap-5 items-center md:items-start justify-between">
        <h1 className="text-3xl font-semibold">Project Management</h1>

        <div className="flex gap-2">
          {/* dialog add sector form */}
          <Dialog>
            <DialogTrigger className="bg-violet-600">
              Add Sector <Plus />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new sector</DialogTitle>
              </DialogHeader>
              <CreateSectorForm />
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
            search ? s.name.toLowerCase().includes(search.toLowerCase()) : s
          )
          .map((sector, index) => (
            <SectorCard key={index} sector={sector} />
          ))}
      </div>
    </div>
  );
};

export default AdminSectorList;

// Sector card
export function SectorCard({ sector }: { sector: SectorProps }) {
  const { created_at, id, description, funds, name, projects, votes } = sector;

  async function deleteSector(id: string) {
    const { data: deletedSector, error } = await supabase
      .from("Sectors")
      .delete()
      .eq("id", id);

    if (error) throw error;

    window.location.reload()
  }

  return (
    <div className="p-4 rounded-xl border border-gray-600 bg-grayish-blue grid grid-cols-3 grid-rows-[repeat(3,_fit-content(100%))] gap-2 w-full max-w-lg">
      {/* title */}
      <h1 className="text-white col-span-2 text-2xl font-semibold">{name}</h1>

      {/* icons */}
      <div className="text-white justify-self-end flex gap-2">
        <Dialog>
          <DialogTrigger>
            <Edit2Icon className="bg-none" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit sector</DialogTitle>
            </DialogHeader>
            <EditSectorForm id={id as string} />
          </DialogContent>
        </Dialog>

        <Trash2 onClick={() => deleteSector(id as string)} />
      </div>

      {/* description */}
      <p className="text-gray-300 col-span-2 text-md font-medium my-2">
        {description}
      </p>

      <div className="col-start-1 flex gap-2 col-span-3">
        <h2 className="col-start-1 text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Projects: </span>
          {projects}
        </h2>
        <h2 className="text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Votes: </span>
          {votes}
        </h2>
        <h2 className="text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Funds: </span>${funds}
        </h2>
      </div>
    </div>
  );
}

// create sector form
function CreateSectorForm() {
  // creation of new sector
  async function handleCreateSector(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const description = formData.get("description");

    const { data: newSector, error } = await supabase
      .from("Sectors")
      .insert({ name, description });

    if (error) throw error;

    return newSector;
  }

  return (
    <form
      onSubmit={handleCreateSector}
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
          name="name"
          placeholder="Enter sector name"
        />
      </div>
      {/* sector description */}
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="name">Description</Label>
        <Textarea
          name="description"
          className="bg-white"
          id="description"
          placeholder="Enter sector description/purpose"
        />
      </div>

      <Button className="bg-violet-700">Add new sector</Button>
    </form>
  );
}

// edit sector form
function EditSectorForm({ id }: { id: string }) {
  // creation of new sector
  async function handleEditSector(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("updatedName");
    const description = formData.get("updatedDescription");

    const { data: updatedSector, error } = await supabase
      .from("Sectors")
      .update({ name: name, description: description })
      .eq("id", id);

    if (error) console.log(error);

    console.log(updatedSector);
    return updatedSector;
  }

  return (
    <form
      onSubmit={handleEditSector}
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
          name="updatedName"
          placeholder="Enter sector name"
        />
      </div>
      {/* sector description */}
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="name">Description</Label>
        <Textarea
          name="updatedDescription"
          className="bg-white"
          id="description"
          placeholder="Enter sector description/purpose"
        />
      </div>

      <Button className="bg-violet-700">Update sector</Button>
    </form>
  );
}
