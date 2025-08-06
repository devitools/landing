import { Button } from "@/components/ui/button";
import { Github, Moon, Play, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
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
                isActiveLink('/constructo') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Constructo
            </Link>
            <Link
              to="/serendipity"
              className={`transition-colors hover:text-primary ${
                isActiveLink('/serendipity') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Serendipity
            </Link>
            <Link
              to="/effulgence"
              className={`transition-colors hover:text-primary ${
                isActiveLink('/effulgence') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Effulgence
            </Link>
            <Link 
              to="/docs" 
              className={`transition-colors hover:text-primary ${
                isActiveLink('/docs') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Todas as Soluções
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              className="hidden xs:flex"
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://github.com/devitools", "_blank")}
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:flex ml-2">GitHub</span>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-primary shadow-elegant"
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
