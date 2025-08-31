"use client";
import React from "react";
import {
  Users,
  LucideIcon,
  Check,
  Edit,
  Eye,
  Filter,
  FolderOpen,
  Plus,
  Search,
  Settings,
  Trash2,
  UserCheck,
  UserX,
  X,
  BarChart3,
} from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/db/supabaseFetcher";
import {
  mockProjects,
  formatCurrency,
  formatDate,
  mockUsers,
  mockSectors,
} from "@/lib/data";

import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import AdminStatCard from "../../Cards/AdminStatCard";
import { Badge } from "../../ui/badge";
import TableList from "../../Common/TableUI";
import AdminProjectRow from "./AdminProjectRow";
import AdminUserRow from "./AdminUserRow";
import AdminSectorRow from "./AdminSectorRow";

// sample data
const stats = [
  {
    title: "Total Users",
    value: mockUsers.length,
    change: "+12%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Active Projects",
    value: mockProjects.filter((p) => p.status === "approved").length,
    change: "+8%",
    icon: FolderOpen,
    color: "text-green-500",
  },
  {
    title: "Total Funding",
    value: 10,
    change: "+23%",
    icon: BarChart3,
    color: "text-purple-500",
  },
  {
    title: "Pending Reviews",
    value: 10,
    change: "-5%",
    icon: Settings,
    color: "text-orange-500",
  },
];

interface StatCardProps {
  title: string;
  value: string;
  subtext: string;
  Icon: LucideIcon;
}

const AdminDashBoardList = () => {
  const {
    data: projectss,
    error,
    mutate,
  } = useSWR("Projects", fetcher, { suspense: true });

  console.log(projectss);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gradient mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your FundChain platform
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <AdminStatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              color={stat.color}
              icon={stat.icon}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger
                value="projects"
                className="flex items-center space-x-2"
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Users</span>
              </TabsTrigger>
              <TabsTrigger
                value="sectors"
                className="flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                <span>Sectors</span>
              </TabsTrigger>
            </TabsList>

            {/* Projects Management */}
            <TabsContent value="projects" className="space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <FolderOpen className="w-5 h-5" />
                      <span>Project Management</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search projects..."
                          // value={searchQuery}
                          // onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <TableList
                    items={mockProjects}
                    tableHeads={[
                      "Project",
                      "Proposer",
                      "Funding",
                      "Status",
                      "Created",
                      "Actions",
                    ]}
                    tableRow={function (item: any, index: number) {
                      return <AdminProjectRow project={item} key={index} />;
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Management */}
            <TabsContent value="users" className="space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>User Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TableList
                    items={mockUsers}
                    tableHeads={[
                      "Name",
                      "Email",
                      "Role",
                      "Status",
                      "Join Date",
                      "Actions",
                    ]}
                    tableRow={function (item: any, index: number) {
                      return <AdminUserRow user={item} key={index} />;
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sectors Management */}
            <TabsContent value="sectors" className="space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <span>Sector Management</span>
                    </CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="cyber">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Sector
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Sector</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Sector Name
                            </label>
                            <Input placeholder="Enter sector name" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Description
                            </label>
                            <Input placeholder="Enter description" />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline">Cancel</Button>
                            <Button variant="hero">Create Sector</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <TableList
                    items={mockSectors}
                    tableHeads={["Name", "Description", "Projects", "Actions"]}
                    tableRow={function (item: any, index: number) {
                      return <AdminSectorRow sector={item} key={index} />;
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashBoardList;
