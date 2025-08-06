import { NavLink, Outlet } from "react-router-dom";
import { Soon } from "@/components/Soon";

const DocsReference = () => {
  const packages = [
    "constructo",
    "serendipity", 
    "effulgence",
    "tevun",
    "http",
    "docekrize",
    "dockerfile",
    "arceau"
  ];

  return (
    <div className="flex gap-8">
      {/* Sumário - Coluna Esquerda */}
      <div className="w-64 flex-shrink-0">
        <div className="sticky top-6 p-4">
          <nav className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground mb-3">Pacotes & Ferramentas</h3>
            {packages.map((packageName) => (
              <NavLink
                key={packageName}
                to={`/docs/reference/${packageName}`}
                className={({ isActive }) =>
                  `flex items-center justify-between w-full text-left text-sm py-2 px-2 rounded transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`
                }
              >
                <span>{packageName}</span>
                <Soon className="ml-2" />
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal - Coluna Direita */}
      <div className="flex-1 border-l pl-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DocsReference;