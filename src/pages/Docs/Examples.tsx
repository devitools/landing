import { ResponsiveLayout, ResponsiveLayoutRef } from "@/components/docs/ResponsiveLayout.tsx";
import {
  ResponsiveLayoutSidebar,
  ResponsiveLayoutSidebarItem,
} from "@/components/docs/ResponsiveLayoutSidebar.tsx";
import React, { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Examples = () => {
  const layoutRef = useRef<ResponsiveLayoutRef>(null);
  const navigate = useNavigate();
  const sidebarItems: ResponsiveLayoutSidebarItem[] = [
    { id: "constructo", label: "Constructo" },
    { id: "validacao-forms", label: "Validação de Forms", level: 1 },
    { id: "gerenciamento-estado", label: "Gerenciamento de Estado", level: 1 },
    { id: "serendipity", label: "Serendipity" },
    { id: "apis-rest", label: "APIs REST", level: 1 },
    { id: "cache-inteligente", label: "Cache Inteligente", level: 1 },
    { id: "effulgence", label: "Effulgence" },
    { id: "documentacao-api", label: "Documentação de API", level: 1 },
    { id: "testes-automatizados", label: "Testes Automatizados", level: 1 },
  ];

  const handleItemClick = (item: ResponsiveLayoutSidebarItem) => {
    navigate(`/docs/example/${item.id}`);
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
