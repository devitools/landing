import { DocsLayout } from "@/components/DocsLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Radio, Layers, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DocsSerendipity = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-background)' }}>
      <Header />
      <div className="flex-1 flex flex-col">
        <DocsLayout>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Package className="h-8 w-8 text-accent" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Serendipity
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Sistema de eventos moderno e assíncrono para PHP.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>v1.5.2</Badge>
              <Badge variant="secondary">PHP 8.1+</Badge>
              <Badge variant="outline">Stable</Badge>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="installation">Instalação</TabsTrigger>
              <TabsTrigger value="events">Eventos</TabsTrigger>
              <TabsTrigger value="listeners">Listeners</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>O que é o Serendipity?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula nunc vel lorem tincidunt, 
                  in tempor elit cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
                
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Sed in libero ut nibh placerat accumsan. Proin faucibus arcu quis ante. 
                  In hac habitasse platea dictumst.
                </p>

                <h3>Funcionalidades</h3>
                <ul>
                  <li>Dispatcher de eventos flexível</li>
                  <li>Suporte a eventos assíncronos</li>
                  <li>Sistema de prioridades para listeners</li>
                  <li>Middleware para processamento de eventos</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <Radio className="h-6 w-6 text-accent mb-2" />
                    <CardTitle className="text-lg">Reativo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Layers className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">Escalável</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Nulla consequat massa quis enim. Donec pede justo, fringilla vel.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Globe className="h-6 w-6 text-success mb-2" />
                    <CardTitle className="text-lg">Distribuído</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Instalação</h2>
                <p>
                  Imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                </p>
                
                <h3>Via Composer</h3>
                <div className="bg-background rounded border p-4 font-mono text-sm">
                  composer require devitools/serendipity
                </div>

                <h3>Configuração Inicial</h3>
                <p>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, 
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.
                </p>

                <div className="bg-background rounded border p-4 font-mono text-sm">
                  {`use Devitools\\Serendipity\\EventDispatcher;

$dispatcher = new EventDispatcher();`}
                </div>

                <h3>Requisitos do Sistema</h3>
                <ul>
                  <li>PHP 8.1 ou superior</li>
                  <li>Extensão JSON habilitada</li>
                  <li>Composer para autoload</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Trabalhando com Eventos</h2>
                <p>
                  Sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. 
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
                </p>

                <h3>Criando Eventos</h3>
                <div className="bg-background rounded border p-4 font-mono text-sm">
                  {`class UserRegistered
{
    public function __construct(
        public readonly User $user,
        public readonly \\DateTime $timestamp
    ) {}
}`}
                </div>

                <h3>Disparando Eventos</h3>
                <p>
                  Ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, 
                  vestibulum at eros. Praesent commodo cursus magna.
                </p>

                <div className="bg-background rounded border p-4 font-mono text-sm">
                  {`$event = new UserRegistered($user, new \\DateTime());
$dispatcher->dispatch($event);`}
                </div>

                <h3>Eventos Assíncronos</h3>
                <div className="bg-background rounded border p-4 font-mono text-sm">
                  {`$dispatcher->dispatchAsync($event);`}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="listeners" className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Configurando Listeners</h2>
                <p>
                  Var iapibus at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                  Vestibulum id ligula porta felis euismod semper.
                </p>

                <h3>Listener Simples</h3>
                <div className="bg-background rounded border p-4 font-mono text-sm">
                  {`$dispatcher->listen(UserRegistered::class, function($event) {
    // Enviar email de boas-vindas
    $emailService->sendWelcomeEmail($event->user);
});`}
                </div>

                <h3>Listener com Classe</h3>
                <p>
                  Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.
                </p>

                <div className="bg-background rounded border p-4 font-mono text-sm">
                  {`class SendWelcomeEmailListener
{
    public function handle(UserRegistered $event): void
    {
        // Lógica do listener
    }
}

$dispatcher->listen(UserRegistered::class, SendWelcomeEmailListener::class);`}
                </div>

                <h3>Prioridades</h3>
                <div className="bg-background rounded border p-4 font-mono text-sm">
                  {`$dispatcher->listen(UserRegistered::class, $highPriorityListener, 100);
$dispatcher->listen(UserRegistered::class, $lowPriorityListener, 10);`}
                </div>
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

export default DocsSerendipity;