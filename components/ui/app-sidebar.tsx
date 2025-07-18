import {
  BarChart,
  Bell,
  ChartColumnIncreasing,
  DollarSign,
  FolderOpen,
  Globe,
  Link,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Vote,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SetStateAction, useState } from "react";

interface Props {
  setActiveTab: React.Dispatch<SetStateAction<string>>;
  activeTab: string;
}

const sidebarItems = [
  { url: "/admin", label: "Dashboard", icon: BarChart },
  { url: "/admin/projects", label: "Projects", icon: FolderOpen },
  { url: "/admin/users", label: "Users", icon: Users },
  { url: "/admin/sectors", label: "Sectors", icon: Globe },
  { url: "/admin/voting", label: "Voting", icon: Vote },
  { url: "/admin/funding", label: "Funding", icon: DollarSign },
  { url: "/admin/blockchain", label: "Blockchain", icon: Link },
  { url: "/admin/analytics", label: "Analytics", icon: TrendingUp },
  { url: "/admin/notifications", label: "Notifications", icon: Bell },
  { url: "/admin/settings", label: "Settings", icon: Settings },
  { url: "/admin/security", label: "Security", icon: Shield },
];

export function AppSidebar({ setActiveTab, activeTab }: Props) {
  return (
    <Sidebar className="border-r-gray-800 text-white">
      <SidebarContent className="bg-gray-900 ">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-white grid grid-cols-[repeat(2,minmax(min-content,1fr))] grid-rows-[repeat(2,minmax(min-content,min-content))] p-4">
            <ChartColumnIncreasing className="row-span-2 !w-12 !h-12 bg-violet-400 p-2 rounded-md" />
            <h1 className="text-3xl font-semibold">FundChain</h1>
            <h4 className="text-slate-400">Admin Panel</h4>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                >
                  <SidebarMenuButton
                    className={`h-10 pl-6 hover:bg-violet-600/20 hover:text-gray-300 ${
                      activeTab === item.label
                        ? "bg-violet-600/20 border-r-2 border-violet-500 text-violet-400 rounded-none"
                        : "text-gray-300"
                    }`}
                    asChild
                  >
                    <a href={"#"}>
                      <item.icon className="!w-6 !h-6" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
