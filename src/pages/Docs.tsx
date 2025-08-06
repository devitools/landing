import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocsIntroducao from "./docs/DocsIntroducao";
import DocsGuias from "./docs/DocsGuias";
import DocsDicasTruques from "./docs/DocsDicasTruques";
import DocsEcossistema from "./docs/DocsEcossistema";
import DocsSobre from "./docs/DocsSobre";

const Docs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extrair a aba ativa da URL
  const currentTab = location.pathname.split('/docs/')[1] || 'introducao';
  
  const handleTabChange = (value: string) => {
    navigate(`/docs/${value}`);
  };

  // Redirecionar para /docs/introducao se estiver apenas em /docs
  useEffect(() => {
    if (location.pathname === '/docs') {
      navigate('/docs/introducao', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-background)' }}>
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 py-8">
          <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="introducao">Introdução</TabsTrigger>
              <TabsTrigger value="guias">Guias</TabsTrigger>
              <TabsTrigger value="dicas-truques">Dicas & Truques</TabsTrigger>
              <TabsTrigger value="ecossistema">Ecossistema</TabsTrigger>
              <TabsTrigger value="sobre">Sobre</TabsTrigger>
            </TabsList>
            
            <TabsContent value="introducao" className="mt-0">
              <DocsIntroducao />
            </TabsContent>
            
            <TabsContent value="guias" className="mt-0">
              <DocsGuias />
            </TabsContent>
            
            <TabsContent value="dicas-truques" className="mt-0">
              <DocsDicasTruques />
            </TabsContent>
            
            <TabsContent value="ecossistema" className="mt-0">
              <DocsEcossistema />
            </TabsContent>
            
            <TabsContent value="sobre" className="mt-0">
              <DocsSobre />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;