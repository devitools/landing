import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Github, Menu, Moon, Play, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActiveLink = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="border-b border-border backdrop-blur-sm sticky top-0 z-50"
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
              to="/constructo"
              className={`transition-colors hover:text-primary ${
                isActiveLink("/constructo")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Constructo
            </Link>
            <Link
              to="/serendipity"
              className={`transition-colors hover:text-primary ${
                isActiveLink("/serendipity")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Serendipity
            </Link>
            <Link
              to="/effulgence"
              className={`transition-colors hover:text-primary ${
                isActiveLink("/effulgence")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Effulgence
            </Link>
            <Link
              to="/docs"
              className={`transition-colors hover:text-primary ${
                isActiveLink("/docs")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Documentação
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              className="hidden xs:flex"
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/devitools", "_blank")}
            >
              <Github className="w-4 h-4" />
            </Button>

            {/* Mobile menu dropdown */}
            {isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-background">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/constructo"
                      className="w-full cursor-pointer"
                    >
                      Constructo
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/serendipity"
                      className="w-full cursor-pointer"
                    >
                      Serendipity
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/effulgence"
                      className="w-full cursor-pointer"
                    >
                      Effulgence
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/docs"
                      className="w-full cursor-pointer"
                    >
                      Documentação
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/docs"
                      className="w-full cursor-pointer flex items-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Começar
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Desktop "Começar" button - hidden on mobile */}
            <Button
              size="sm"
              className={`bg-gradient-primary shadow-elegant ${isMobile ? 'hidden' : ''}`}
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
