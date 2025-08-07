import ResponsiveLayout, { ResponsiveLayoutRef } from "@/components/ResponsiveLayout.tsx";
import ResponsiveLayoutSidebar, {
  ResponsiveLayoutSidebarItem,
} from "@/components/ResponsiveLayoutSidebar.tsx";
import React, { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Reference = () => {
  const layoutRef = useRef<ResponsiveLayoutRef>(null);
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
      id: "docekrize",
      label: "Docekrize",
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

  const handleItemClick = (id: string) => {
    navigate(`/docs/reference/${id}`);
  };

  return (
    <ResponsiveLayout
      ref={layoutRef}
      title={"Nossas Soluções"}
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
