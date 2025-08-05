import { Button } from "@/components/ui/button";
import { Github, BookOpen, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useNavigate } from "react-router-dom";
import deviLogo from "@/assets/devitools-logo.png";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

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
                src={deviLogo}
                alt="Devitools Logo"
                className="h-11 object-contain logo-adaptive"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/constructo"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Constructo
            </Link>
            <Link
              to="/serendipity"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Serendipity
            </Link>
            <Link
              to="/effulgence"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Effulgence
            </Link>
            <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">
              Todas as Ferramentas
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://github.com/devitools', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-primary shadow-elegant"
              onClick={() => navigate('/docs')}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Começar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
