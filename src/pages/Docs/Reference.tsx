import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Soon } from "@/components/Soon";
import { DocsResponsiveSidebar } from "@/components/DocsResponsiveSidebar";

const Reference = () => {
  const navigate = useNavigate();
  const packages = [
    "constructo",
    "serendipity", 
    "effulgence",
    "tevun",
    "http",
    "docekrize",
    "dockerfile",
    "arceau",
  ];

  const sidebarItems = packages.map(packageName => ({
    id: packageName,
    label: packageName,
    level: 0
  }));

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
