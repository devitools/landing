import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils.ts";
import { Menu } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Docs = () => {
  const location = useLocation();

  const navigationItems = [
    { label: "Introdução", path: "/docs/introduction" },
    { label: "Referência", path: "/docs/reference" },
    { label: "Guias", path: "/docs/guides" },
    { label: "Exemplos", path: "/docs/examples" },
    { label: "Sobre", path: "/docs/about" },
  ];

  const isActiveLink = (path: string) => {
    if (location.pathname === "/docs" && path === "/docs/introduction") {
      return true;
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--gradient-background)" }}
    >
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="border-b-2 border-border bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Desktop navigation - hidden on mobile */}
              <nav className="hidden lg:flex space-x-8">
                {navigationItems.map(item => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "py-4 px-2 text-sm font-medium transition-colors hover:text-primary border-b-2",
                      isActiveLink(item.path)
                        ? "text-primary border-primary"
                        : "text-muted-foreground border-transparent hover:border-primary/50",
                    )}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile dropdown menu */}
              <div className="lg:hidden py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <Menu className="w-4 h-4" />
                      <span className="text-sm">Documentação</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 bg-background">
                    {navigationItems.map(item => (
                      <DropdownMenuItem key={item.path} asChild>
                        <NavLink
                          to={item.path}
                          className={cn(
                            "w-full cursor-pointer",
                            isActiveLink(item.path) ? "text-primary" : "",
                          )}
                        >
                          {item.label}
                        </NavLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="container p-0">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
