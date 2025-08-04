import { DocsLayout } from "@/components/DocsLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Code, Settings, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";

const DocsConstructo = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-background)' }}>
      <Header />
      <div className="flex-1 flex flex-col">
        <DocsLayout>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Wrench className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Constructo
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Container de injeção de dependência moderno e elegante para PHP.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>v2.1.0</Badge>
              <Badge variant="secondary">PHP 8.1+</Badge>
              <Badge variant="outline">Stable</Badge>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="installation">Instalação</TabsTrigger>
              <TabsTrigger value="usage">Uso</TabsTrigger>
              <TabsTrigger value="advanced">Avançado</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>O que é o Constructo?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <h3>Características Principais</h3>
                <ul>
                  <li>Auto-wiring automático de dependências</li>
                  <li>Suporte a singletons e instâncias únicas</li>
                  <li>Resolução circular de dependências</li>
                  <li>Interface fluente e intuitiva</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <Code className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">Simples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Zap className="h-6 w-6 text-accent mb-2" />
                    <CardTitle className="text-lg">Performático</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Settings className="h-6 w-6 text-success mb-2" />
                    <CardTitle className="text-lg">Flexível</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Instalação</h2>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                
                <h3>Via Composer</h3>
                <CodeBlock language="bash" size="sm">
                  composer require devitools/constructo
                </CodeBlock>

                <h3>Requisitos</h3>
                <ul>
                  <li>PHP 8.1 ou superior</li>
                  <li>Composer</li>
                  <li>Extensão Reflection habilitada</li>
                </ul>

                <h3>Verificação da Instalação</h3>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                  nisi ut aliquid ex ea commodi consequatur.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Uso Básico</h2>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                  vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </p>

                <h3>Exemplo Simples</h3>
                <CodeBlock language="php" size="md">
{`use Devitools\\Constructo\\Container;

$container = new Container();
$container->bind(UserService::class);

$service = $container->resolve(UserService::class);`}
                </CodeBlock>

                <h3>Definindo Dependências</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>

                <CodeBlock language="php" size="md">
{`$container->bind(DatabaseInterface::class, MySQLDatabase::class);
$container->singleton(ConfigService::class);`}
                </CodeBlock>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Uso Avançado</h2>
                <p>
                  Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                  Et harum quidem rerum facilis est et expedita distinctio.
                </p>

                <h3>Factories Customizadas</h3>
                <CodeBlock language="php" size="md">
{`$container->bind(ComplexService::class, function($container) {
    return new ComplexService(
        $container->resolve(DatabaseInterface::class),
        $container->resolve(ConfigService::class),
        ['option' => 'value']
    );
});`}
                </CodeBlock>

                <h3>Contextos e Scopes</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus 
                  id quod maxime placeat facere possimus, omnis voluptas assumenda est.
                </p>

                <CodeBlock language="php" size="md">
{`$container->scoped(RequestService::class);
$container->contextual(ApiController::class)
    ->needs(LoggerInterface::class)
    ->give(ApiLogger::class);`}
                </CodeBlock>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        </DocsLayout>
      </div>
      <Footer />
    </div>
  );
};

export default DocsConstructo;