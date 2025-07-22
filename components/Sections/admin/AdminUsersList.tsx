"use client";
import React, { useState } from "react";
import { handleChange } from "@/lib/getIndicatory";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, OctagonMinus } from "lucide-react";
import { Input } from "@/components/ui/input";
const users = [
  {
    user: "SarahJ",
    status: "Approved",
    contributions: 12,
    lastActive: "2025-07-15",
    totalFunded: 5200,
  },
  {
    user: "MikeD",
    status: "Pending",
    contributions: 3,
    lastActive: "2025-07-12",
    totalFunded: 850,
  },
  {
    user: "JasmineK",
    status: "Approved",
    contributions: 27,
    lastActive: "2025-07-17",
    totalFunded: 12400,
  },
  {
    user: "TylerZ",
    status: "Rejected",
    contributions: 0,
    lastActive: "2025-06-20",
    totalFunded: 0,
  },
  {
    user: "AnnaM",
    status: "Approved",
    contributions: 19,
    lastActive: "2025-07-16",
    totalFunded: 7300,
  },
  {
    user: "LeoP",
    status: "Pending",
    contributions: 8,
    lastActive: "2025-07-10",
    totalFunded: 2900,
  },
  {
    user: "ClaraB",
    status: "Approved",
    contributions: 34,
    lastActive: "2025-07-17",
    totalFunded: 15120,
  },
  {
    user: "NateX",
    status: "Rejected",
    contributions: 1,
    lastActive: "2025-06-28",
    totalFunded: 120,
  },
  {
    user: "EmilyR",
    status: "Approved",
    contributions: 23,
    lastActive: "2025-07-16",
    totalFunded: 9800,
  },
  {
    user: "VictorW",
    status: "Pending",
    contributions: 5,
    lastActive: "2025-07-14",
    totalFunded: 1600,
  },
];

const AdminUsersList = () => {
  const [search, setSearch] = useState("");

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
          <TableCaption className="text-gray-300">
            A list of users.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Contributions</TableHead>
              <TableHead>Total Funded</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users
              .filter((user) =>
                search
                  ? user.user.toLowerCase().includes(search.toLowerCase())
                  : user
              )
              .map((user, index) => (
                <TableRow className="text-gray-300" key={index}>
                  <TableCell className="text-md font-medium tracking-wide">
                    {user.user}
                  </TableCell>
                  <TableCell>
                    <h5
                      className={`w-fit py-1 px-2 rounded-xl ${
                        user.status === "Approved"
                          ? "bg-green-600/40 text-green-500"
                          : user.status === "Pending"
                          ? "bg-yellow-600/30 text-yellow-500"
                          : "bg-red-600/30 text-red-500"
                      }`}
                    >
                      {user.status}
                    </h5>
                  </TableCell>
                  <TableCell>{user.contributions}</TableCell>
                  <TableCell className="text-violet-400">
                    ${user.totalFunded}
                  </TableCell>
                  <TableCell className="flex gap-2 items-center h-max">
                    <Eye
                      className="cursor-pointer hover:text-gray-200"
                      width={20}
                      height={40}
                    />
                    <OctagonMinus
                      className="cursor-pointer hover:text-gray-200"
                      width={20}
                      height={40}
                    />
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
