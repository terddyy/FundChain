"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useContext, useState } from "react";
import {
  BarChart,
  DollarSign,
  FolderOpen,
  Globe,
  Link,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Vote,
  Bell,
  CircleUser,
} from "lucide-react";
import AuthProvider, { AuthContext, useAuth } from "@/lib/Context/AuthContext";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const user = useAuth();

  return (
    <AuthProvider role={"admin"}>
      <SidebarProvider className="bg-black">
        <AppSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navLinks={sidebarItems}
        />

        <main className="w-full">
          <header className="text-white  w-full h-20 bg-gray-900 border-b border-gray-800 flex items-center gap-10 px-4">
            <SidebarTrigger className="z-20 row-span-2 w-12 h-12" />

            <div className="mr-auto">
              <h1 className="text-2xl font-semibold">{activeTab}</h1>
              <p className="text-sm text-gray-300 row-start-2 col-start-2">
                Manage FundChain
              </p>
            </div>

            <Bell />
            <CircleUser />
          </header>
          {children}
        </main>
      </SidebarProvider>
    </AuthProvider>
  );
}
