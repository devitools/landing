import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export interface SidebarItem {
  id: string;
  label: string;
  level?: number; // 0 for main items, 1 for sub-items
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
  description = "Navegue pelo conteúdo"
}: DocsResponsiveSidebarProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (id: string) => {
    onItemClick(id);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const SidebarContent = () => (
    <div className="p-4">
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={cn(
              "block w-full text-left transition-colors py-1 hover:text-primary",
              item.level === 1 
                ? "ml-3 text-xs text-muted-foreground" 
                : "text-sm"
            )}
          >
            {item.level === 1 ? `• ${item.label}` : item.label}
          </button>
        ))}
      </nav>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className="fixed top-20 left-4 z-50 md:hidden"
          >
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
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-6">
        <SidebarContent />
      </div>
    </div>
  );
}