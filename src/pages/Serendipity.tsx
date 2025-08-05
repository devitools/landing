import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Download, ExternalLink, CheckCircle, Zap, Shield, Gauge } from "lucide-react";
import Hero from "@/components/Hero.tsx";

const Serendipity = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-serendipity" />,
      title: "Roteamento Moderno",
      description: "Roteamento automático com annotations PHP 8+ para APIs e Workers",
    },
    {
      icon: <Shield className="w-6 h-6 text-serendipity" />,
      title: "Tratamento de Erros",
      description: "Sistema automático de captura e tratamento de erros em background",
    },
    {
      icon: <Gauge className="w-6 h-6 text-serendipity" />,
      title: "Performance Hyperf",
      description: "Aproveite toda a performance do Swoole com simplicidade",
    },
  ];

  const codeExample = `<?php
use Devitools\\Serendipity\\Http\\Router;
use Devitools\\Serendipity\\Http\\Request;
use Devitools\\Serendipity\\Http\\Response;

// Roteamento elegante e expressivo
$router = new Router();

// Rotas RESTful simples
$router->get('/users', function(Request $request) {
    return Response::json([
        'users' => User::paginate($request->get('page', 1))
    ]);
});

$router->post('/users', function(Request $request) {
    $user = User::create($request->validated([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users'
    ]));
    
    return Response::json($user, 201);
});

// Middleware e grupos
$router->group(['middleware' => 'auth'], function($router) {
    $router->get('/profile', ProfileController::class);
    $router->patch('/profile', [ProfileController::class, 'update']);
});`;

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      {/* Hero Section */}
      <Hero>
        <div className="w-20 h-20 bg-gradient-serendipity rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-serendipity">
          <Zap className="w-10 h-10 text-serendipity-foreground" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Serendipity
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Framework PHP minimalista e poderoso para desenvolvimento de APIs modernas. Descubra a
          serendipidade do desenvolvimento web elegante e produtivo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-serendipity shadow-serendipity">
            <Download className="w-5 h-5 mr-2" />
            Instalar via Composer
          </Button>
          <Button variant="outline" size="lg">
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver no GitHub
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">PHP 8+</Badge>
          <Badge variant="secondary">RESTful</Badge>
          <Badge variant="secondary">OpenAPI</Badge>
          <Badge variant="secondary">Middleware</Badge>
        </div>
      </Hero>

      {/* Installation */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Instalação Rápida</h2>
            <p className="text-muted-foreground">Comece sua jornada com Serendipity</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Composer Install
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                composer require devitools/serendipity
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos Principais</h2>
            <p className="text-xl text-muted-foreground">
              Desenvolvimento de APIs nunca foi tão elegante
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-serendipity rounded-xl mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exemplo de Uso</h2>
            <p className="text-muted-foreground">Veja como criar APIs elegantes com Serendipity</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Roteamento e Controllers</CardTitle>
              <CardDescription>
                Exemplo de criação de API RESTful com validação e middleware
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted rounded-lg p-6 text-sm overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que Serendipity?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Sintaxe Expressiva</h3>
                <p className="text-muted-foreground">
                  API clara e intuitiva que acelera o desenvolvimento
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Validação Automática</h3>
                <p className="text-muted-foreground">Sistema robusto de validação de dados</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Middleware Flexível</h3>
                <p className="text-muted-foreground">Sistema de middleware poderoso e extensível</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">OpenAPI Ready</h3>
                <p className="text-muted-foreground">Documentação automática da API</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Serendipity;
