import { cn } from "@/lib/utils.ts";
import { Menu, X } from "lucide-react";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

interface ResponsiveLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  title?: string;
}

interface ResponsiveLayoutRef {
  closeSidebar: () => void;
}

const ResponsiveLayoutWrapper = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (args: React.HTMLAttributes<HTMLDivElement>, ref) => {
    const { className, ...props } = args;
    return <div ref={ref} className={cn("p-5 lg:px-10", className)} {...props} />;
  },
);

const ResponsiveLayout = forwardRef<ResponsiveLayoutRef, ResponsiveLayoutProps>((props, ref) => {
  const { leftContent, rightContent, title } = props;
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

  useImperativeHandle(
    ref,
    () => ({
      closeSidebar: handleClose,
    }),
    [],
  );

  return (
    <div className="flex relative min-h-[400px]">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-100 z-[5] lg:hidden"
      />

      <ResponsiveLayoutWrapper
        ref={sidebarRef}
        className={cn(
          "w-3/12 lg:w-2/12 min-w-[240px] md:min-w-fit h-full -translate-x-full transition-transform duration-100",
          "absolute top-0 left-0 z-10 bg-background",
          "lg:relative lg:block lg:bg-transparent lg:translate-x-0",
        )}
      >
        <div className="flex justify-end lg:hidden">
          <button onClick={handleClose} className="hover:bg-red-300 rounded p-1 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div>{leftContent}</div>
      </ResponsiveLayoutWrapper>

      <ResponsiveLayoutWrapper className="w-full lg:10/12">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={handleToggle}
            className="lg:hidden shadow hover:shadow-md transition-all"
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
      </ResponsiveLayoutWrapper>
    </div>
  );
});

ResponsiveLayout.displayName = "ResponsiveLayout";
ResponsiveLayoutWrapper.displayName = "ResponsiveLayoutWrapper";

export { ResponsiveLayout, ResponsiveLayoutWrapper };
export type { ResponsiveLayoutRef };
