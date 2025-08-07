import { cn } from "@/lib/utils.ts";
import React from "react";

interface ResponsiveLayoutSidebarItem {
  id: string;
  label: string;
  level?: number;
}

interface ResponsiveLayoutSidebarProps {
  items: ResponsiveLayoutSidebarItem[];
  onItemClick: (id: string) => void;
  title?: string;
  description?: string;
}

const ResponsiveLayoutSidebar = (props: ResponsiveLayoutSidebarProps) => {
  const { items, onItemClick, title = "", description = "" } = props;

  return (
    <>
      <div>{title}</div>
      <p>{description}</p>
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className={cn(
            "block w-full text-left transition-colors py-1 hover:text-primary",
            item.level === 1
              ? "ml-3 text-xs md:text-sm text-muted-foreground"
              : "text-sm md:text-base",
          )}
        >
          {item.level === 1 ? `• ${item.label}` : item.label}
        </button>
      ))}
    </>
  );
};

ResponsiveLayoutSidebar.displayName = "ResponsiveLayout";
export { ResponsiveLayoutSidebar };
export type { ResponsiveLayoutSidebarItem };
