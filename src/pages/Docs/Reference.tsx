import { DocsResponsiveSidebar } from "@/components/DocsResponsiveSidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Reference = () => {
  const navigate = useNavigate();
  const sidebarItems = [
    {
      id: "constructo",
      label: "constructo",
      level: 0,
    },
    {
      id: "serendipity",
      label: "serendipity",
      level: 0,
    },
    {
      id: "effulgence",
      label: "effulgence",
      level: 0,
    },
    {
      id: "tevun",
      label: "tevun",
      level: 0,
    },
    {
      id: "http",
      label: "http",
      level: 0,
    },
    {
      id: "docekrize",
      label: "docekrize",
      level: 0,
    },
    {
      id: "dockerfile",
      label: "dockerfile",
      level: 0,
    },
    {
      id: "arceau",
      label: "arceau",
      level: 0,
    },
  ];

  const handleItemClick = (id: string) => {
    navigate(`/docs/reference/${id}`);
  };

  return (
    <div className="flex gap-8">
      {/* Sidebar responsivo */}
      <DocsResponsiveSidebar
        items={sidebarItems}
        onItemClick={handleItemClick}
        title="Pacotes & Ferramentas"
        description="Navegue pelos packages e ferramentas disponíveis"
      />

      {/* Conteúdo Principal */}
      <div className="flex-1 lg:border-l lg:pl-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Reference;
