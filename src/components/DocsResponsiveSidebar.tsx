import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export interface SidebarItem {
  id: string;
  label: string;
  level?: number;
}

interface DocsResponsiveSidebarProps {
  items: SidebarItem[];
  onItemClick: (id: string) => void;
  title?: string;
  description?: string;
}

export function DocsResponsiveSidebar({
  items,
  onItemClick,
  title = "Sumário",
  description = "Navegue pelo conteúdo",
}: DocsResponsiveSidebarProps) {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    mql.addEventListener("change", onChange);
    setIsLargeScreen(window.innerWidth >= 1024);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const handleItemClick = (id: string) => {
    onItemClick(id);
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  const SidebarContent = () => (
    <div className="p-4">
      <nav className="space-y-2">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={cn(
              "block w-full text-left transition-colors py-1 hover:text-primary",
              item.level === 1 ? "ml-3 text-xs text-muted-foreground" : "text-sm",
            )}
          >
            {item.level === 1 ? `• ${item.label}` : item.label}
          </button>
        ))}
      </nav>
    </div>
  );

  if (!isLargeScreen) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-36 right-4 z-50 lg:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-6">
        <SidebarContent />
      </div>
    </div>
  );
}
