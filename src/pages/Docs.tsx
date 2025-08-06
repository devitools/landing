import { NavLink, Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Docs = () => {
  const navigationItems = [
    { label: "Introdução", path: "/docs/introduction" },
    { label: "Guias", path: "/docs/guides" },
    { label: "Dicas & Truques", path: "/docs/tips" },
    { label: "Ecossistema", path: "/docs/ecosystem" },
    { label: "Sobre", path: "/docs/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-background)' }}>
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <nav className="flex space-x-8">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-4 px-2 text-sm font-medium transition-colors hover:text-primary border-b-2 ${
                      isActive
                        ? "text-primary border-primary"
                        : "text-muted-foreground border-transparent hover:border-primary/50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="flex-1 container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;