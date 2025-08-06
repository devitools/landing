import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils.ts";
import { Github, Menu, Moon, Play, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const scrollDirection = useScrollDirection();

  const isActiveLink = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`border-b border-border backdrop-blur-sm sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "hsl(var(--header-bg))" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img
                src="/devitools-logo.png"
                alt="Devitools Logo"
                className="h-11 object-contain logo-adaptive"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "transition-colors hover:text-primary",
                isActiveLink("/") ? "text-primary bold" : "text-muted-foreground",
              )}
            >
              Início
            </Link>
            <Link
              to="/constructo"
              className={cn(
                "transition-colors hover:text-primary",
                isActiveLink("/constructo") ? "text-primary" : "text-muted-foreground",
              )}
            >
              Constructo
            </Link>
            <Link
              to="/serendipity"
              className={cn(
                "transition-colors hover:text-primary",
                isActiveLink("/serendipity") ? "text-primary" : "text-muted-foreground",
              )}
            >
              Serendipity
            </Link>
            <Link
              to="/effulgence"
              className={cn(
                "transition-colors hover:text-primary",
                isActiveLink("/effulgence") ? "text-primary" : "text-muted-foreground",
              )}
            >
              Effulgence
            </Link>
            <Link
              to="/docs"
              className={cn(
                "transition-colors hover:text-primary",
                isActiveLink("/docs") ? "text-primary" : "text-muted-foreground",
              )}
            >
              Documentação
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/devitools", "_blank")}
            >
              <Github className="w-4 h-4" />
            </Button>

            {/* Mobile menu dropdown */}
            <div className="flex lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-background">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/"
                      className={cn(
                        "transition-colors hover:text-primary",
                        isActiveLink("/") ? "text-primary bold" : "bold",
                      )}
                    >
                      Início
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/constructo"
                      className={cn(
                        "transition-colors hover:text-primary",
                        isActiveLink("/constructo") ? "text-primary bold" : "bold",
                      )}
                    >
                      Constructo
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/serendipity"
                      className={cn(
                        "transition-colors hover:text-primary",
                        isActiveLink("/serendipity") ? "text-primary bold" : "bold",
                      )}
                    >
                      Serendipity
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/effulgence"
                      className={cn(
                        "transition-colors hover:text-primary",
                        isActiveLink("/effulgence") ? "text-primary bold" : "bold",
                      )}
                    >
                      Effulgence
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/docs"
                      className={cn(
                        "transition-colors hover:text-primary",
                        isActiveLink("/docs") ? "text-primary bold" : "bold",
                      )}
                    >
                      Documentação
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop "Começar" button - hidden on mobile */}
            <Button
              size="sm"
              className="hidden lg:flex bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/docs")}
            >
              <Play className="w-4 h-4 mr-2" />
              Começar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
