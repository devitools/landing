import { ResponsiveLayout, ResponsiveLayoutRef } from "@/components/docs/ResponsiveLayout.tsx";
import {
  ResponsiveLayoutSidebar,
  ResponsiveLayoutSidebarItem,
} from "@/components/docs/ResponsiveLayoutSidebar.tsx";
import React, { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Example extends ResponsiveLayoutSidebarItem {
  path: string;
}

const Examples = () => {
  const layoutRef = useRef<ResponsiveLayoutRef>(null);
  const navigate = useNavigate();
  const sidebarItems: Example[] = [
    {
      id: "constructo",
      label: "Constructo",
      path: "/docs/examples/constructo",
    },
    {
      id: "constructo-builder",
      label: "Explorando o Builder",
      level: 1,
      path: "/docs/examples/constructo#builder",
    },
    {
      id: "constructo-demolisher",
      label: "Utilizando o Demolisher",
      level: 1,
      path: "/docs/examples/constructo#demolisher",
    },
    {
      id: "constructo-reflector",
      label: "Exemplos de uso do Reflector",
      level: 1,
      path: "/docs/examples/constructo#reflector",
    },
    {
      id: "constructo-faker",
      label: "Testes com Faker",
      level: 1,
      path: "/docs/examples/constructo#reflector",
    },
    {
      id: "serendipity",
      label: "Serendipity",
      path: "/docs/examples",
    },
    {
      id: "apis-rest",
      label: "APIs REST",
      level: 1,
      path: "/docs/examples",
    },
    {
      id: "cache-inteligente",
      label: "Cache Inteligente",
      level: 1,
      path: "/docs/examples",
    },
    {
      id: "effulgence",
      label: "Effulgence",
      path: "/docs/examples",
    },
    {
      id: "documentacao-api",
      label: "Documentação de API",
      level: 1,
      path: "/docs/examples",
    },
    {
      id: "testes-automatizados",
      label: "Testes Automatizados",
      level: 1,
      path: "/docs/examples",
    },
  ];

  const handleItemClick = (item: Example) => {
    navigate(item.path);
  };

  return (
    <ResponsiveLayout
      ref={layoutRef}
      title={"Aprendendo com Exemplos"}
      leftContent={<ResponsiveLayoutSidebar items={sidebarItems} onItemClick={handleItemClick} />}
      rightContent={<Outlet />}
    />
  );
};

export default Examples;
