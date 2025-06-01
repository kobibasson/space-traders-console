"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HomeIcon, UsersIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export type Agent = {
  symbol: string;
  accountId: string;
  headquarters: string;
  startingFaction: string;
  shipCount: number;
  credits: number;
  token: string;
};

export function MainNav({ agents }: { agents: Agent[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const isAgentRoute = pathname.startsWith("/agent/");
  const currentAgentSymbol = isAgentRoute ? pathname.split("/")[2] : null;

  const handleAgentChange = (value: string) => {
    router.push(`/agent/${value}/overview`);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar>
        <SidebarHeader className="border-b px-4 py-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">Space Traders</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>   
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={pathname === "/my-agents"}
                asChild
              >
                <Link href="/my-agents" className="flex items-center space-x-2">
                  <UsersIcon className="h-4 w-4" />
                  <span>My Agents</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          {agents.length > 0 && (
            <div className="mt-6 px-4">
              <div className="text-sm font-medium mb-2">Select Agent</div>
              <Select
                value={currentAgentSymbol || ""}
                onValueChange={handleAgentChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an agent" />
                </SelectTrigger>
                <SelectContent>
                  {agents.map((agent) => (
                    <SelectItem key={agent.symbol} value={agent.symbol}>
                      {agent.symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
