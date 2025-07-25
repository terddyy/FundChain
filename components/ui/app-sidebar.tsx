

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
import { supabase } from "@/lib/supabase/supabaseClient";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
} from "@radix-ui/react-dropdown-menu";
import {
  ChartColumnIncreasing,
  ChevronUp,
  LucideIcon,
  User2,
} from "lucide-react";
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

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      return;
    }

    window.location.href = "/auth";
  }

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

        <SidebarFooter className="h-10 pl-6 mt-auto hover:bg-violet-600/20 hover:text-gray-300 bg-violet-600/20 border-r-2 border-violet-500 text-violet-400 rounded-none">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="bg-none hover:bg-transparent hover:text-white"
                  asChild
                >
                  <SidebarMenuButton className="p-0">
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="left"
                  className="bg-gray-800 mt-10 p-4 rounded-xl border-gray-600 border z-40 w-full space-y-1"
                >
                  <DropdownMenuRadioGroup>
                    <DropdownMenuItem className="px-6 py-2 rounded-md w-full ">
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-6 py-2  rounded-md w-full ">
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleSignOut}
                      className="px-6 py-2  rounded-md w-full "
                    >
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
