import { ResponsiveLayout, ResponsiveLayoutRef } from "@/components/docs/ResponsiveLayout.tsx";
import {
  ResponsiveLayoutSidebar,
  ResponsiveLayoutSidebarItem,
} from "@/components/docs/ResponsiveLayoutSidebar.tsx";
import React, { useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function formatSolutionHeader(current: ResponsiveLayoutSidebarItem | undefined) {
  return current ? `Nossa Solução: ${current.label}` : "Nossas Soluções";
}

const Reference = () => {
  const layoutRef = useRef<ResponsiveLayoutRef>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarItems: ResponsiveLayoutSidebarItem[] = [
    {
      id: "constructo",
      label: "Constructo",
      level: 0,
    },
    {
      id: "serendipity",
      label: "Serendipity",
      level: 0,
    },
    {
      id: "effulgence",
      label: "Effulgence",
      level: 0,
    },
    {
      id: "tevun",
      label: "Tevun",
      level: 0,
    },
    {
      id: "http",
      label: "Http",
      level: 0,
    },
    {
      id: "dockerfile",
      label: "Dockerfile",
      level: 0,
    },
    {
      id: "arceau",
      label: "Arceau",
      level: 0,
    },
  ];
  const current = sidebarItems.find(item => location.pathname === `/docs/reference/${item.id}`);
  const initialTitle = formatSolutionHeader(current);
  const [title, setTitle] = useState(initialTitle);

  const handleItemClick = (item: ResponsiveLayoutSidebarItem) => {
    setTitle(formatSolutionHeader(item));
    layoutRef.current?.closeSidebar();
    navigate(`/docs/reference/${item.id}`);
  };

  return (
    <ResponsiveLayout
      ref={layoutRef}
      title={title}
      leftContent={<ResponsiveLayoutSidebar items={sidebarItems} onItemClick={handleItemClick} />}
      rightContent={
        <div className="relative">
          <Outlet />
        </div>
      }
    />
  );
};

export default Reference;
