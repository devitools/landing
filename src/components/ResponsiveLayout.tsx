import { cn } from "@/lib/utils.ts";
import React, { useRef } from "react";
import { Menu, X } from "lucide-react";

interface ResponsiveLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  title?: string;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  leftContent,
  rightContent,
  title,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (sidebarRef.current && backdropRef.current) {
      sidebarRef.current.classList.toggle("translate-x-0");
      sidebarRef.current.classList.toggle("-translate-x-full");
      backdropRef.current.classList.toggle("opacity-50");
      backdropRef.current.classList.toggle("opacity-0");
      backdropRef.current.classList.toggle("pointer-events-auto");
      backdropRef.current.classList.toggle("pointer-events-none");
    }
  };

  const handleClose = () => {
    if (sidebarRef.current && backdropRef.current) {
      sidebarRef.current.classList.remove("translate-x-0");
      sidebarRef.current.classList.add("-translate-x-full");
      backdropRef.current.classList.remove("opacity-50");
      backdropRef.current.classList.add("opacity-0");
      backdropRef.current.classList.remove("pointer-events-auto");
      backdropRef.current.classList.add("pointer-events-none");
    }
  };

  return (
    <div className="flex relative min-h-[400px]">
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-100 z-[5] lg:hidden"
      />

      <div
        ref={sidebarRef}
        className={cn(
          "h-full w-3/12 min-w-[240px] -translate-x-full transition-transform duration-100",
          "absolute top-0 left-0 z-10 bg-background p-[10px]",
          "lg:relative lg:block lg:bg-transparent lg:translate-x-0 lg:p-5",
        )}
      >
        <div className="flex justify-end lg:hidden">
          <button
            onClick={handleClose}
            className="hover:bg-destructive/50 rounded p-1 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div>{leftContent}</div>
      </div>

      <div className="w-full lg:w-9/12 p-[20px] lg:p-5">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={handleToggle}
            className="lg:hidden shadow hover:shadow-md transition-all hover:bg-success/50"
          >
            <Menu className="w-4 h-4" />
          </button>
          {title && (
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {title}
            </h2>
          )}
        </div>
        <div>{rightContent}</div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
