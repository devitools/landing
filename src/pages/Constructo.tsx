import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Download, ExternalLink, CheckCircle, Zap, Settings, Database } from "lucide-react";
import Hero from "@/components/Hero.tsx";

const Constructo = () => {
  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Configuração Flexível",
      description: "Sistema de configuração poderoso e flexível para suas aplicações PHP",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Gestão de Dependências",
      description: "Gerenciamento inteligente de dependências e injeção automática",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Otimizada",
      description: "Construído para máxima performance e eficiência",
    },
  ];

  const codeExample = `<?php
use Devitools\\Constructo\\Container;
use Devitools\\Constructo\\Configuration;

// Configuração simples e poderosa
$config = new Configuration([
    'database' => [
        'host' => 'localhost',
        'driver' => 'mysql'
    ],
    'cache' => [
        'driver' => 'redis',
        'ttl' => 3600
    ]
]);

// Container de dependências
$container = new Container($config);
$container->singleton(DatabaseService::class);
$container->bind(CacheInterface::class, RedisCache::class);

// Resolução automática
$service = $container->resolve(UserService::class);`;

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      {/* Hero Section */}
      <Hero>
        <div className="w-20 h-20 bg-gradient-primary rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-elegant">
          <Settings className="w-10 h-10 text-primary-foreground" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Constructo
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Framework PHP moderno para construção de aplicações robustas e escaláveis. Sistema
          avançado de configuração e injeção de dependências.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-primary shadow-elegant">
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
          <Badge variant="secondary">Composer</Badge>
          <Badge variant="secondary">PSR-11</Badge>
          <Badge variant="secondary">PSR-4</Badge>
        </div>
      </Hero>

      {/* Installation */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Instalação Rápida</h2>
            <p className="text-muted-foreground">Comece a usar o Constructo em segundos</p>
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
                composer require devitools/constructo
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
              Tudo que você precisa para construir aplicações PHP modernas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mb-4 flex items-center justify-center">
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
            <p className="text-muted-foreground">Veja como é simples usar o Constructo</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Configuração e Container</CardTitle>
              <CardDescription>
                Exemplo básico de configuração e uso do container de dependências
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
            <h2 className="text-4xl font-bold mb-4">Por que Constructo?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Padrões PSR</h3>
                <p className="text-muted-foreground">Totalmente compatível com PSR-11 e PSR-4</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Type Safety</h3>
                <p className="text-muted-foreground">
                  Aproveite ao máximo o PHP 8.0+ com tipagem forte
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground">Otimizado para alta performance em produção</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Flexibilidade</h3>
                <p className="text-muted-foreground">Configuração flexível para qualquer projeto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Constructo;
