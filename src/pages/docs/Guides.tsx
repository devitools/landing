import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, FileText, Zap } from "lucide-react";

const Guides = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Guias de Desenvolvimento
        </h1>
        <p className="text-xl text-muted-foreground">
          Guias práticos para aproveitar ao máximo os pacotes Devitools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <CardTitle>Primeiros Passos</CardTitle>
            </div>
            <CardDescription>Configure seu primeiro projeto com Devitools</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Aprenda a configurar um projeto do zero usando os pacotes Devitools.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Básico</Badge>
              <Badge variant="secondary">Configuração</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-accent" />
              <CardTitle>Desenvolvimento Avançado</CardTitle>
            </div>
            <CardDescription>Técnicas avançadas e melhores práticas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Explore recursos avançados e padrões de desenvolvimento recomendados.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Avançado</Badge>
              <Badge variant="secondary">Padrões</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-success" />
              <CardTitle>API Reference</CardTitle>
            </div>
            <CardDescription>Documentação completa das APIs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Referência detalhada de todas as classes, métodos e interfaces disponíveis.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">API</Badge>
              <Badge variant="secondary">Referência</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-warning" />
              <CardTitle>Performance</CardTitle>
            </div>
            <CardDescription>Otimizações e tuning de performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Aprenda a otimizar suas aplicações para máxima performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Performance</Badge>
              <Badge variant="secondary">Otimização</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Guias Populares</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-background rounded border">
            <span className="font-medium">Como criar validadores customizados</span>
            <Badge variant="outline">Constructo</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-background rounded border">
            <span className="font-medium">Implementando workers assíncronos</span>
            <Badge variant="outline">Serendipity</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-background rounded border">
            <span className="font-medium">Controllers RESTful simplificados</span>
            <Badge variant="outline">Effulgence</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
