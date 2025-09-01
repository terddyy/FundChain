"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";
import { fetcher, projectFetcher } from "@/lib/db/supabaseFetcher";
import { DropDownProps, Projects, SectorProps } from "@/lib/interfaces";
import {
  Calendar,
  DollarSign,
  Filter,
  Heart,
  Search,
  TrendingUp,
  Users,
  Vote,
} from "lucide-react";
import useSWR from "swr";

import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
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
import { toast } from "sonner";
import {
  calculateFundingProgress,
  formatCurrency,
  formatDate,
  getSectorById,
} from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "../../ui/badge";
import UserProjectCard from "../../Cards/UserProjectCard";

interface Props {
  projects: Promise<Projects[]>;
}

const UserProjectsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");
  const user = useAuth();

  // fetcher
  const {
    data: allProjects = [null],
    error,
    mutate,
  } = useSWR("Projects", projectFetcher, { suspense: true });

  const filteredProjects = allProjects.filter(
    (project: {
      name: string;
      description: string;
      sector: { name: string };
    }) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSector =
        selectedSector === "all" || project.sector.name === selectedSector;
      return matchesSearch && matchesSector;
    }
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "funding":
        return (
          calculateFundingProgress(b.raisedAmount, b.requestedAmount) -
          calculateFundingProgress(a.raisedAmount, a.requestedAmount)
        );
      case "votes":
        return b.votes - a.votes;
      default:
        return 0;
    }
  });

  const sectors: string[] =
    Array.from(
      new Set(allProjects.map((p: { sector: { name: any } }) => p.sector.name))
    ) || null;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl font-bold text-gradient">Explore Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover innovative projects seeking funding from our global
            community
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="All Sectors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                {sectors.map((item, index) => (
                  <SelectItem value={item} key={index}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <TrendingUp className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="funding">Funding Progress</SelectItem>
                <SelectItem value="votes">Most Voted</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{sortedProjects.length} projects found</span>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <UserProjectCard project={project} index={index} key={index} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg mb-4">
              No projects found matching your criteria
            </p>
            <Button variant="cyber" asChild>
              <Link href="/propose">Propose Your Project</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserProjectsList;
