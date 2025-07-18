"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, CircleUser } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <SidebarProvider className="bg-black">
      <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

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
  );
}
