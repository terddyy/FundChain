"use client";
import { handleSignOut } from "@/lib/helperFunctions";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { User2, ChevronUp } from "lucide-react";
import React, { useRef, useState } from "react";
import { SidebarMenuButton } from "../ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/Context/AuthContext";

import { mutate } from "swr";
import { supabase } from "@/lib/supabase/supabaseServer";

const UserSettings = () => {
  const [open, setOpen] = useState(false);
  const user = useAuth();

  async function handleChangeCredentials(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newName = formData.get("name");
    const newPassword = formData.get("password");

    const { data, error } = await supabase
      .from("Users")
      .update({ name: newName, password: newPassword })
      .eq("id", "user.id");

    if (error) throw error;

    setOpen(false);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-none hover:bg-transparent hover:text-white">
          {/* <SidebarMenuButton className="p-0"> */}
          <User2 />
          {/* </SidebarMenuButton> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="left"
          className="bg-gray-800 mt-10 p-4 rounded-xl border-gray-600 border z-40 w-full space-y-1"
        >
          <DropdownMenuRadioGroup>
            <DropdownMenuItem
              className="px-6 py-2 rounded-md w-full hover:bg-gray-800"
              onSelect={() => setOpen(true)}
            >
              Change credentials
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleSignOut}
              className="px-6 py-2  rounded-md w-full hover:bg-gray-800"
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          {/* name */}

          <form
            action=""
            onSubmit={handleChangeCredentials}
            className="text-center"
          >
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input
                  className="text-white"
                  required
                  id="name-1"
                  name="name"
                />
              </div>

              {/* password */}
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="text-white"
                  required
                  id="password"
                  type="password"
                  name="password"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="bg-white text-black w-full max-w-xs mt-12"
            >
              Save changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserSettings;
