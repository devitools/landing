import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";
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
              <a
                key={packageName}
                href={`#${packageName}`}
                className="flex items-center justify-between w-full text-left text-sm text-muted-foreground hover:text-primary py-2 px-2 rounded transition-colors"
              >
                <span>{packageName}</span>
                <Soon className="ml-2" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal - Coluna Direita */}
      <div className="flex-1 space-y-8 border-l pl-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Referência de Pacotes
          </h1>
          <p className="text-xl text-muted-foreground">
            Documentação detalhada dos pacotes e ferramentas Devitools.
          </p>
        </div>

        <Card className="text-center py-12">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
                <Clock className="h-6 w-6 text-amber-500 absolute -top-1 -right-1" />
              </div>
            </div>
            <CardTitle className="text-2xl">Documentação em Desenvolvimento</CardTitle>
            <CardDescription className="text-base">
              Estamos preparando a documentação detalhada para cada pacote e ferramenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Em breve você encontrará aqui a referência completa de todos os pacotes Devitools, 
              incluindo APIs, exemplos de uso e guias de implementação para cada ferramenta.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocsReference;