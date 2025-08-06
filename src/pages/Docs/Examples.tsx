import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Code } from "lucide-react";
import { DocsResponsiveSidebar, SidebarItem } from "@/components/DocsResponsiveSidebar";

const Examples = () => {
  const sidebarItems: SidebarItem[] = [
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

  const handleItemClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex gap-8">
      <DocsResponsiveSidebar
        items={sidebarItems}
        onItemClick={handleItemClick}
        title="Exemplos"
        description="Navegue pelos exemplos práticos"
      />

      {/* Conteúdo Principal - Coluna Direita */}
      <div className="flex-1 space-y-8 lg:border-l lg:pl-8 pt-[16px]">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Exemplos Práticos
          </h1>
          <p className="text-xl text-muted-foreground">
            Exemplos práticos e casos de uso dos pacotes Devitools.
          </p>
        </div>

        <Card className="text-center py-12">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Code className="h-12 w-12 text-muted-foreground" />
                <Clock className="h-6 w-6 text-amber-500 absolute -top-1 -right-1" />
              </div>
            </div>
            <CardTitle className="text-2xl">Exemplos em Desenvolvimento</CardTitle>
            <CardDescription className="text-base">
              Estamos preparando exemplos práticos e detalhados para cada pacote
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Em breve você encontrará aqui exemplos completos de uso dos pacotes Devitools,
              incluindo casos de uso comuns, implementações de referência e código de exemplo pronto
              para usar.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Examples;
