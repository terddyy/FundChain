"use client"
import { DashboardData } from "@/lib/supabase/queries/userDashBoard";
import React from "react";
import UserStatCard from "../../Cards/UserStatCard";
import {
  ChartBarIcon,
  DollarSignIcon,
  FileSliders,
  PackageIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/Context/AuthContext";

const UserDashboard = ({ stats }: { stats: DashboardData }) => {
  const user = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-muted-foreground">
          Here's your project funding overview and activity summary.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Projects Funded */}
        <UserStatCard
          icon={PackageIcon}
          title={"Projects Funded"}
          color={"text-indigo-600"}
          bgColor={"bg-indigo-100"}
          value={stats.projectsFunded}
          trend={"Total projects"}
          index={0}
        />

        {/* Total Contribution */}
        <UserStatCard
          icon={DollarSignIcon}
          title={"Total Contribution"}
          color={"text-green-600"}
          bgColor={"bg-green-100"}
          value={stats.totalContribution}
          trend={"Total contributions"}
          index={1}
        />

        {/* Total Votes Cast */}
        <UserStatCard
          icon={ChartBarIcon}
          title={"Total Votes Cast"}
          color={"text-amber-600"}
          bgColor={"bg-amber-100"}
          value={stats.totalVotesCast}
          trend={"Total votes cast"}
          index={2}
        />

        {/* Active Voted Projects */}
        <UserStatCard
          icon={FileSliders}
          title={"Active Voted Projects"}
          color={"text-red-600"}
          bgColor={"bg-red-100"}
          value={stats.ActiveVotedProject}
          trend={"Total active voted projects"}
          index={3}
        />
      </div>
    </motion.div>
  );
};

export default UserDashboard;
