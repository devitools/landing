import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, Rocket, Shield } from "lucide-react";

const DocsTips = () => {
  return (
    <div className="mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dicas & Truques
        </h1>
        <p className="text-xl text-muted-foreground">
          Dicas práticas e truques para maximizar sua produtividade com Devitools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              <CardTitle>Produtividade</CardTitle>
            </div>
            <CardDescription>
              Acelere seu desenvolvimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Geração automática de factories</h4>
                <p className="text-sm text-muted-foreground">
                  Use os geradores do Constructo para criar factories de teste automaticamente.
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Hot reload em desenvolvimento</h4>
                <p className="text-sm text-muted-foreground">
                  Configure hot reload com Serendipity para desenvolvimento mais ágil.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-blue-500" />
              <CardTitle>Debugging</CardTitle>
            </div>
            <CardDescription>
              Encontre e corrija bugs rapidamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Logs estruturados</h4>
                <p className="text-sm text-muted-foreground">
                  Configure logs estruturados para facilitar o debugging em produção.
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Profiling de performance</h4>
                <p className="text-sm text-muted-foreground">
                  Use ferramentas de profiling integradas para identificar gargalos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-green-500" />
              <CardTitle>Deploy & DevOps</CardTitle>
            </div>
            <CardDescription>
              Otimize seu pipeline de deploy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Docker optimizado</h4>
                <p className="text-sm text-muted-foreground">
                  Configurações Docker específicas para aplicações Devitools.
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">CI/CD automático</h4>
                <p className="text-sm text-muted-foreground">
                  Pipelines de CI/CD otimizados para projetos PHP modernos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-red-500" />
              <CardTitle>Segurança</CardTitle>
            </div>
            <CardDescription>
              Melhores práticas de segurança
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Validação robusta</h4>
                <p className="text-sm text-muted-foreground">
                  Implemente validação em múltiplas camadas com Constructo.
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Rate limiting</h4>
                <p className="text-sm text-muted-foreground">
                  Configure rate limiting eficiente com Serendipity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Dica do Dia
        </h3>
        <p className="text-muted-foreground mb-3">
          Você sabia que pode usar o modo de desenvolvimento do Serendipity para hot reload automático? 
          Isso acelera significativamente o ciclo de desenvolvimento.
        </p>
        <div className="flex gap-2">
          <Badge variant="secondary">Serendipity</Badge>
          <Badge variant="secondary">Desenvolvimento</Badge>
        </div>
      </div>
    </div>
  );
};

export default DocsTips;