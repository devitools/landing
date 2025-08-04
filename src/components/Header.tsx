import { Button } from "@/components/ui/button";
import { Github, BookOpen, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import deviLogo from "@/assets/devitools-logo.png";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50" style={{ backgroundColor: 'hsl(var(--header-bg))' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={deviLogo} 
                alt="Devitools Logo" 
                className={`h-11 object-contain ${theme !== "dark" ? "grayscale brightness-[0.6]" : ""}`}
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/constructo" className="text-muted-foreground hover:text-primary transition-colors">
              Constructo
            </a>
            <a href="/serendipity" className="text-muted-foreground hover:text-primary transition-colors">
              Serendipity
            </a>
            <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">
              Documentação
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button size="sm" className="bg-gradient-primary shadow-elegant">
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