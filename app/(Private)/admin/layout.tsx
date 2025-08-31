"use client";

import { useState } from "react";
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
} from "lucide-react";
import AuthProvider from "@/lib/Context/AuthContext";
import { usePathname } from "next/navigation";
import Nav from "@/app/components/Layout/Nav";

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
  return (
    <>
      <Nav navlinks={[]} />
      <main className="w-full">{children}</main>
    </>
  );
}
