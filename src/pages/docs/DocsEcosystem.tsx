import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Users, Globe, GitBranch } from "lucide-react";

const DocsEcosystem = () => {
  return (
    <div className="mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Ecossistema Devitools
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore a comunidade, ferramentas e recursos do ecossistema Devitools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-primary" />
              <CardTitle>Pacotes Oficiais</CardTitle>
            </div>
            <CardDescription>
              Biblioteca completa de pacotes mantidos pela equipe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 border rounded">
                <span className="font-medium">devitools/constructo</span>
                <Badge variant="secondary">Core</Badge>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span className="font-medium">devitools/serendipity</span>
                <Badge variant="secondary">Hyperf</Badge>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span className="font-medium">devitools/effulgence</span>
                <Badge variant="secondary">Laravel</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-accent" />
              <CardTitle>Comunidade</CardTitle>
            </div>
            <CardDescription>
              Conecte-se com outros desenvolvedores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 border rounded">
                <span className="font-medium">Discord</span>
                <Badge variant="outline">Chat</Badge>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span className="font-medium">GitHub Discussions</span>
                <Badge variant="outline">Fórum</Badge>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <span className="font-medium">Stack Overflow</span>
                <Badge variant="outline">Q&A</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-success" />
              <CardTitle>Recursos Externos</CardTitle>
            </div>
            <CardDescription>
              Ferramentas e bibliotecas complementares
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">IDEs & Editores</h4>
                <p className="text-sm text-muted-foreground">
                  Extensions para VSCode, PHPStorm e outros editores.
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Ferramentas de Debug</h4>
                <p className="text-sm text-muted-foreground">
                  Integrações com Xdebug, Ray e outras ferramentas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <GitBranch className="h-6 w-6 text-warning" />
              <CardTitle>Contribuições</CardTitle>
            </div>
            <CardDescription>
              Como contribuir para o projeto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Código</h4>
                <p className="text-sm text-muted-foreground">
                  Contribua com código, correções de bugs e novas funcionalidades.
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <h4 className="font-semibold mb-1">Documentação</h4>
                <p className="text-sm text-muted-foreground">
                  Ajude a melhorar a documentação e criar tutoriais.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Estatísticas da Comunidade</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-background rounded border">
            <div className="text-2xl font-bold text-primary">1,200+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          <div className="text-center p-3 bg-background rounded border">
            <div className="text-2xl font-bold text-accent">150+</div>
            <div className="text-sm text-muted-foreground">Contribuidores</div>
          </div>
          <div className="text-center p-3 bg-background rounded border">
            <div className="text-2xl font-bold text-success">50+</div>
            <div className="text-sm text-muted-foreground">Issues Resolvidas</div>
          </div>
          <div className="text-center p-3 bg-background rounded border">
            <div className="text-2xl font-bold text-warning">3</div>
            <div className="text-sm text-muted-foreground">Pacotes Ativos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsEcosystem;