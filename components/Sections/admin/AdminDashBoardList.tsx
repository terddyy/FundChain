import React from "react";
import {
  Users,
  FolderKanban,
  Vote,
  DollarSign,
  LucideIcon,
} from "lucide-react";

// sample data
const stats = [
  {
    title: "Total Users",
    value: "2,847",
    subtext: "+12% from last month",
    icon: Users,
  },
  {
    title: "Active Projects",
    value: "156",
    subtext: "23 pending approval",
    icon: FolderKanban,
  },
  {
    title: "Total Votes",
    value: "18,492",
    subtext: "+8% from last week",
    icon: Vote,
  },
  {
    title: "Funds Raised",
    value: "$1.2M",
    subtext: "$145K this month",
    icon: DollarSign,
  },
];

interface StatCardProps {
  title: string;
  value: string;
  subtext: string;
  Icon: LucideIcon;
}

const AdminDashBoardList = () => {
  return (
    <section className="">
      {/* dashboard cards */}
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              subtext={stat.subtext}
              Icon={Icon}
            />
          );
        })}
      </div>

      {/* dashboard chart */}
      <div></div>
    </section>
  );
};

export default AdminDashBoardList;

export function StatCard({ title, value, subtext, Icon }: StatCardProps) {
  return (
    <div className="bg-grayish-blue border border-gray-600 rounded-2xl px-4 py-3 flex items-center justify-between w-full max-w-4xl">
      {/* stats */}
      <div className="space-y-2">
        <h1 className="text-gray-300">{title}</h1>
        <h1 className="text-white text-3xl font-semibold">{value}</h1>
        <h1 className="text-violet-400">{subtext}</h1>
      </div>

      <Icon
        className="bg-violet-600/20 text-violet-400 p-2 rounded-xl"
        width={50}
        height={50}
      />
    </div>
  );
}
