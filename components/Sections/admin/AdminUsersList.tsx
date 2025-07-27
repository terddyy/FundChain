"use client";
import React, { useState } from "react";
import { handleChange } from "@/lib/helperFunctions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis, Eye, FilterIcon, OctagonMinus } from "lucide-react";
import { Input } from "@/components/ui/input";
import useSWR from "swr";
import { adminUserFetcher } from "@/lib/db/supabaseFetcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { supabase } from "@/lib/supabase/supabaseClient";

const AdminUsersList = () => {
  const {
    data: users,
    error,
    mutate,
  } = useSWR("admin-users", adminUserFetcher, { suspense: true });
  const [search, setSearch] = useState("");

  async function updateUserStatus(value: string, id: string) {
    const { data, error } = await supabase
      .from("Users")
      .update({ status: value })
      .eq("id", id);

    if (error) throw error;

    console.log(error, data, id, value);
    mutate();
    return data;
  }

  return (
    <div>
      {/* heading */}
      <div className="text-white flex flex-col md:flex-row gap-5 items-center md:items-start justify-between">
        <h1 className="text-3xl font-semibold">Users Management</h1>

        {/* seach and filter */}
        <Input
          className="w-full max-w-sm bg-grayish-blue border border-gray-600"
          placeholder="Search Projects.."
          onChange={(e) => handleChange(e, setSearch)}
        />
      </div>

      {/* table */}
      <div className="mt-10 w-full max-w-7xl mx-auto">
        <Table>
          {/* table caption */}
          <TableCaption className="text-gray-300">
            A list of users.
          </TableCaption>

          {/* table header */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-left pl-10">User</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Projects submitted</TableHead>
              <TableHead>Votes casted</TableHead>
              <TableHead>Total Funded</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          {/* table values */}
          <TableBody>
            {users
              .filter((user) =>
                search
                  ? user.name.toLowerCase().includes(search.toLowerCase())
                  : user
              )
              .map((user, index) => (
                <TableRow className="text-gray-300" key={index}>
                  <TableCell className="text-md font-medium tracking-wide text-left">
                    {user.name}
                  </TableCell>
                  <TableCell>
                    <h5
                      className={`w-fit py-1 px-2 mx-auto rounded-xl ${
                        user.status === "normal"
                          ? "bg-green-600/40 text-green-500"
                          : user.status === "warning"
                          ? "bg-yellow-600/30 text-yellow-500"
                          : "bg-red-600/30 text-red-500"
                      }`}
                    >
                      {user.status}
                    </h5>
                  </TableCell>
                  <TableCell className="text-violet-400">
                    {user.Projects.length ?? 0}
                  </TableCell>
                  <TableCell className="text-violet-400">
                    {user.Votes.length}
                  </TableCell>
                  <TableCell className="text-violet-400">
                    ${user.Funds.length}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="cursor-pointer" asChild>
                        <Ellipsis className="mx-auto" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-grayish-blue text-gray-300">
                        <DropdownMenuLabel>User action</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          onValueChange={(value) =>
                            updateUserStatus(value, user.id)
                          }
                        >
                          <DropdownMenuRadioItem value="restricted">
                            Restrict
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="normal">
                            Unrestrict
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsersList;
