import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Clock } from "lucide-react";

const DocsExamples = () => {
  return (
    <div className="flex gap-8">
      {/* Sumário - Coluna Esquerda */}
      <div className="w-64 flex-shrink-0">
        <div className="sticky top-6 p-4">
          <nav className="space-y-2">
            <div className="block w-full text-left text-sm text-muted-foreground py-1">
              Em Desenvolvimento
            </div>
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal - Coluna Direita */}
      <div className="flex-1 space-y-8 border-l pl-8">
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
              incluindo casos de uso comuns, implementações de referência e código de exemplo pronto para usar.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocsExamples;