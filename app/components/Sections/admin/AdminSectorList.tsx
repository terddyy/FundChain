"use client";
import { Input } from "@/app/components/ui/input";
import { handleChange } from "@/lib/helperFunctions";
import React, { use, useRef, useState } from "react";
import { Edit2Icon, Plus, Trash2, Vote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { supabase } from "@/lib/supabase/supabaseClient";
import { SectorProps } from "@/lib/interfaces";
import { DialogClose } from "@radix-ui/react-dialog";

import { adminSectorFetcher } from "@/lib/db/supabaseFetcher";
import useSWR from "swr";

export default function AdminSectorList() {
  const [search, setSearch] = useState("");

  // fetcher
  const { data: sectors, mutate } = useSWR<SectorProps[]>(
    "Sectors",
    adminSectorFetcher,
    {
      suspense: true,
    }
  );

  console.log(sectors);

  const closeRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div>
      {/* heading */}
      <div className="text-white flex flex-col md:flex-row gap-5 items-center md:items-start justify-between">
        <h1 className="text-3xl font-semibold">Project Management</h1>

        <div className="flex gap-2">
          {/* dialog add sector form */}
          <Dialog>
            <DialogTrigger className="bg-violet-600 text-black">
              Add Sector <Plus />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new sector</DialogTitle>
              </DialogHeader>
              <CreateSectorForm closeRef={closeRef} mutate={mutate} />
              <DialogClose ref={closeRef} className="hidden" />
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
        {sectors!
          .filter((s) =>
            search ? s.name.toLowerCase().includes(search.toLowerCase()) : s
          )
          .map((sector, index) => (
            <SectorCard mutate={mutate} key={index} sector={sector} />
          ))}
      </div>
    </div>
  );
}

// Sector card
export function SectorCard({
  sector,
  mutate,
}: {
  sector: SectorProps;
  mutate: () => void;
}) {
  const { created_at, id, description, funds, name, Projects, Votes } = sector;
  const closeRef = useRef<HTMLButtonElement | null>(null);

  // handles deletion of secrtor
  async function deleteSector(id: string) {
    const { data: deletedSector, error } = await supabase
      .from("Sectors")
      .delete()
      .eq("id", id);

    if (error) throw error;

    //reloads the fetcher
    mutate();
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
            <EditSectorForm
              id={id as string}
              mutate={mutate}
              closeRef={closeRef}
            />
            <DialogClose asChild>
              <button ref={closeRef} className="hidden" />
            </DialogClose>
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
          {Projects.length}
        </h2>
        <h2 className="text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Votes: </span>
          {Votes.length}
        </h2>
        <h2 className="text-violet-300 bg-violet-600/20 h-fit w-fit px-2 py-1 rounded-xl">
          <span className="text-gray-200">Funds: </span>${funds ? funds : 0}
        </h2>
      </div>
    </div>
  );
}

// create sector form
function CreateSectorForm({
  mutate,
  closeRef,
}: {
  mutate: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
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

    //reloads the fetcher
    mutate();
    closeRef?.current?.click();

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
          required
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
          required
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
function EditSectorForm({
  id,
  mutate,
  closeRef,
}: {
  id: string;
  mutate: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
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

    //reloads the fetcher
    mutate();
    closeRef?.current?.click();
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
          required
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
          required
          name="updatedDescription"
          className="bg-white"
          id="description"
          placeholder="Enter sector description/purpose"
        />
      </div>

      <Button>Update sector</Button>
    </form>
  );
}
