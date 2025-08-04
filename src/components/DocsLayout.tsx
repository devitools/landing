import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BookOpen, Package, Wrench, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigationItems = [
  {
    title: "Introdução",
    url: "/docs",
    icon: BookOpen,
  },
  {
    title: "Constructo",
    url: "/docs/constructo",
    icon: Wrench,
  },
  {
    title: "Serendipity",
    url: "/docs/serendipity",
    icon: Package,
  },
];

function DocsSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            {state !== "collapsed" && <h2 className="text-lg font-semibold">Documentação</h2>}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
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

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DocsSidebar />
        <main className="flex-1">
          <header className="h-16 flex items-center border-b px-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-semibold">Documentação</h1>
          </header>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="p-6">
              {children}
            </div>
          </ScrollArea>
        </main>
      </div>
    </SidebarProvider>
  );
}