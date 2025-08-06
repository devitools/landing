import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Package, Wrench, Layers } from "lucide-react";

const DocsIntroduction = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Documentação Devitools
        </h1>
        <p className="text-xl text-muted-foreground">
          Bem-vindo à documentação oficial dos pacotes Devitools para PHP.
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2>Introdução</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <h3>Requisitos do Sistema</h3>
        <ul>
          <li>PHP 8.1 ou superior</li>
          <li>Composer para gerenciamento de dependências</li>
          <li>Conhecimento básico de PHP orientado a objetos</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-primary" />
              <CardTitle>Constructo</CardTitle>
            </div>
            <CardDescription>
              Ferramentas fundamentais para projetos PHP
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Sistema completo de serialização, validação e geração de dados fake para acelerar o desenvolvimento PHP.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Serialização</Badge>
              <Badge variant="secondary">Validação</Badge>
              <Badge variant="secondary">Testing</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-accent" />
              <CardTitle>Serendipity</CardTitle>
            </div>
            <CardDescription>
              Extensão otimizada para Hyperf
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ferramentas avançadas para desenvolvimento com Hyperf, incluindo workers, rotas e tratamento de erros.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Hyperf</Badge>
              <Badge variant="secondary">Workers</Badge>
              <Badge variant="secondary">Async</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Layers className="h-6 w-6 text-success" />
              <CardTitle>Effulgence</CardTitle>
            </div>
            <CardDescription>
              Extensão otimizada para Laravel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Integração completa com Laravel, incluindo Eloquent, controllers simplificados e middlewares otimizados.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Laravel</Badge>
              <Badge variant="secondary">Eloquent</Badge>
              <Badge variant="secondary">Controllers</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Instalação Rápida</h3>
        <p className="text-muted-foreground mb-4">
          Instale os pacotes Devitools via Composer para começar a usar em seus projetos PHP.
        </p>
        <div className="bg-background rounded border p-4 font-mono text-sm">
          composer require devitools/constructo<br />
          composer require devitools/serendipity<br />
          composer require devitools/effulgence
        </div>
      </div>
    </div>
  );
};

export default DocsIntroduction;