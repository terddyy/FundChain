import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ChartColumnIncreasing, LucideIcon } from "lucide-react";
import Link from "next/link";
import { SetStateAction } from "react";

interface NavLinksProps {
  label: string;
  url: string;
  icon: LucideIcon;
}

interface Props {
  setActiveTab: React.Dispatch<SetStateAction<string>>;
  activeTab: string;
  navLinks: NavLinksProps[];
}

export function AppSidebar({ setActiveTab, activeTab, navLinks }: Props) {
  console.log(activeTab);

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
              {navLinks.map((item) => (
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
                    <Link href={item.url}>
                      <item.icon className="!w-6 !h-6" />
                      <span>{item.label}</span>
                    </Link>
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
