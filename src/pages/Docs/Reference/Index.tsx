import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";

const ReferenceIndex = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
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
  );
};

export default ReferenceIndex;
