import { DocsLayout } from "@/components/DocsLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Package, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Docs = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-background)' }}>
      <Header />
      <div className="flex-1 flex flex-col">
        <DocsLayout>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Wrench className="h-6 w-6 text-primary" />
                  <CardTitle>Constructo</CardTitle>
                </div>
                <CardDescription>
                  Container de injeção de dependência para PHP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">DI Container</Badge>
                  <Badge variant="secondary">Auto-wiring</Badge>
                  <Badge variant="secondary">Singleton</Badge>
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
                  Event dispatcher moderno para PHP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Event System</Badge>
                  <Badge variant="secondary">Async</Badge>
                  <Badge variant="secondary">Listeners</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Instalação Rápida</h3>
            <p className="text-muted-foreground mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="bg-background rounded border p-4 font-mono text-sm">
              composer require devitools/constructo<br />
              composer require devitools/serendipity
            </div>
          </div>
        </div>
        </DocsLayout>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;