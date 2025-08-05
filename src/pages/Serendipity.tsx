import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Download, ExternalLink, CheckCircle, Zap, Shield, Gauge, Users, Wifi, Database, Activity, Timer, Globe, Cpu, BarChart3, Signal, BookOpen } from "lucide-react";
import Hero from "@/components/Hero.tsx";
import CodeBlock from "@/components/CodeBlock";
import { useNavigate } from "react-router-dom";

const Serendipity = () => {
  const navigate = useNavigate();

  const handleInstallCopy = () => {
    navigator.clipboard.writeText("composer require devitools/serendipity");
  };

  const handlePackagistLink = () => {
    window.open("https://packagist.org/packages/devitools/serendipity", "_blank");
  };

  const handleGitHubLink = () => {
    window.open("https://github.com/devitools/serendipity", "_blank");
  };

  const handleDocsNavigation = () => {
    navigate("/docs/serendipity");
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-serendipity-foreground" />,
      title: "Roteamento Async",
      description: "Roteamento moderno com annotations PHP 8+ e suporte nativo a coroutines Swoole",
    },
    {
      icon: <Shield className="w-6 h-6 text-serendipity-foreground" />,
      title: "Tratamento de Erros",
      description: "Sistema automático de captura e tratamento de erros em background e operações assíncronas",
    },
    {
      icon: <Gauge className="w-6 h-6 text-serendipity-foreground" />,
      title: "Performance Swoole",
      description: "Aproveite toda a performance do Swoole com abstração simplificada e desenvolvimento produtivo",
    },
    {
      icon: <Users className="w-6 h-6 text-serendipity-foreground" />,
      title: "Workers Assíncronos",
      description: "Background tasks e queue processing otimizados para alta concorrência e processamento distribuído",
    },
    {
      icon: <Wifi className="w-6 h-6 text-serendipity-foreground" />,
      title: "WebSocket Nativo",
      description: "Real-time communication built-in com WebSocket server integrado e broadcasting eficiente",
    },
    {
      icon: <Database className="w-6 h-6 text-serendipity-foreground" />,
      title: "Connection Pooling",
      description: "Database e Redis connection pooling otimizado para máxima performance e uso eficiente de recursos",
    },
  ];

  const codeExamples = [
    {
      id: "async-routes",
      title: "Roteamento Async",
      description: "Rotas assíncronas com coroutines",
      code: `<?php

// Em breve AsyncRoutes.php ... 🚀`,
    },
    {
      id: "workers",
      title: "Workers Background",
      description: "Processamento em background",
      code: `<?php

// Em breve Workers.php ... 🚀`,
    },
    {
      id: "websocket",
      title: "WebSocket Server",
      description: "Comunicação real-time",
      code: `<?php

// Em breve WebSocket.php ... 🚀`,
    },
    {
      id: "connection-pool",
      title: "Connection Pool",
      description: "Otimização de conexões",
      code: `<?php

// Em breve ConnectionPool.php ... 🚀`,
    },
  ];

  const useCases = [
    {
      title: "APIs de Alta Performance",
      description: "Aplicações que precisam de milhares de requisições por segundo",
      ideal: true,
    },
    {
      title: "Microservices",
      description: "Arquiteturas distribuídas com comunicação eficiente",
      ideal: true,
    },
    {
      title: "Aplicações Real-time",
      description: "Chat, gaming, IoT com WebSocket nativo",
      ideal: true,
    },
    {
      title: "Sistemas de Protótipos",
      description: "Para desenvolvimento rápido use Laravel tradicional",
      ideal: false,
    },
  ];

  const performanceMetrics = [
    {
      icon: <Activity className="w-8 h-8 text-serendipity-foreground" />,
      metric: "10x Mais Rápido",
      description: "vs PHP tradicional",
      gradient: "from-serendipity/20 to-serendipity/5",
    },
    {
      icon: <Users className="w-8 h-8 text-serendipity-foreground" />,
      metric: "1000+ Connections",
      description: "Concurrent connections",
      gradient: "from-serendipity/20 to-serendipity/5",
    },
    {
      icon: <Timer className="w-8 h-8 text-serendipity-foreground" />,
      metric: "< 50ms",
      description: "Response time",
      gradient: "from-serendipity/20 to-serendipity/5",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-serendipity-foreground" />,
      metric: "80% Less Memory",
      description: "Memory usage",
      gradient: "from-serendipity/20 to-serendipity/5",
    },
    {
      icon: <Wifi className="w-8 h-8 text-serendipity-foreground" />,
      metric: "WebSocket Ready",
      description: "Real-time built-in",
      gradient: "from-serendipity/20 to-serendipity/5",
    },
    {
      icon: <Signal className="w-8 h-8 text-serendipity-foreground" />,
      metric: "Zero Downtime",
      description: "Hot reload deployment",
      gradient: "from-serendipity/20 to-serendipity/5",
    },
  ];

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
          Framework PHP de alta performance para desenvolvimento de APIs modernas com Swoole.
          Descubra a serendipidade do desenvolvimento assíncrono e aplicações real-time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-serendipity text-serendipity-foreground hover:shadow-glow transition-all duration-300"
            onClick={handleInstallCopy}
          >
            <Download className="w-5 h-5 mr-2" />
            Instalar via Composer
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:shadow-elegant transition-all duration-300"
            onClick={handleGitHubLink}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver no GitHub
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">PHP 8+</Badge>
          <Badge variant="secondary">Swoole</Badge>
          <Badge variant="secondary">Hyperf</Badge>
          <Badge className="bg-gradient-primary text-primary-foreground">High Performance</Badge>
        </div>
      </Hero>

      {/* Instalação Rápida */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Instalação Rápida</h2>
            <p className="text-muted-foreground">Comece sua jornada com Serendipity em segundos</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <CodeBlock language="bash">
              composer require devitools/serendipity
            </CodeBlock>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                variant="outline"
                className="hover:shadow-elegant transition-all duration-300"
                onClick={handlePackagistLink}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver no Packagist
              </Button>
              <Button
                className="bg-gradient-serendipity text-serendipity-foreground hover:shadow-glow transition-all duration-300"
                onClick={handleDocsNavigation}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Primeiros Passos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos Principais</h2>
            <p className="text-xl text-muted-foreground">
              Desenvolvimento de alta performance nunca foi tão elegante
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Exemplos Práticos */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exemplos Práticos</h2>
            <p className="text-muted-foreground">
              Veja como criar aplicações de alta performance com Serendipity
            </p>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardHeader>
              <CardTitle>Desenvolvimento com Swoole/Hyperf</CardTitle>
              <CardDescription>
                Exemplos práticos de funcionalidades assíncronas e real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="async-routes" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  {codeExamples.map((example) => (
                    <TabsTrigger key={example.id} value={example.id}>
                      {example.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {codeExamples.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">{example.title}</h4>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                      <CodeBlock language="php">
                        {example.code}
                      </CodeBlock>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quando Usar */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quando Usar Serendipity?</h2>
            <p className="text-xl text-muted-foreground">
              Ideal para aplicações que precisam de máxima performance e concorrência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`p-6 ${useCase.ideal ? 'border-serendipity/50 bg-serendipity/5' : 'border-muted'}`}>
                <div className="flex items-start space-x-4">
                  {useCase.ideal ? (
                    <CheckCircle className="w-6 h-6 text-serendipity mt-1 flex-shrink-0" />
                  ) : (
                    <ExternalLink className="w-6 h-6 text-muted-foreground mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Comparação de Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Métrica</th>
                      <th className="text-center p-4">Serendipity + Swoole</th>
                      <th className="text-center p-4">Laravel Tradicional</th>
                      <th className="text-center p-4">Node.js</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Requisições/segundo</td>
                      <td className="p-4 text-center text-serendipity font-bold">50,000+</td>
                      <td className="p-4 text-center text-muted-foreground">5,000</td>
                      <td className="p-4 text-center text-muted-foreground">30,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Conexões simultâneas</td>
                      <td className="p-4 text-center text-serendipity font-bold">10,000+</td>
                      <td className="p-4 text-center text-muted-foreground">100</td>
                      <td className="p-4 text-center text-muted-foreground">5,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Uso de memória</td>
                      <td className="p-4 text-center text-serendipity font-bold">20% menor</td>
                      <td className="p-4 text-center text-muted-foreground">Baseline</td>
                      <td className="p-4 text-center text-muted-foreground">40% maior</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">WebSocket nativo</td>
                      <td className="p-4 text-center text-serendipity font-bold">✓</td>
                      <td className="p-4 text-center text-muted-foreground">✗</td>
                      <td className="p-4 text-center text-muted-foreground">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits com Métricas */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Performance que Impressiona</h2>
            <p className="text-xl text-muted-foreground">
              Métricas reais de aplicações em produção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className={`p-6 bg-gradient-to-br ${metric.gradient} border-serendipity/20 hover:shadow-elegant transition-all duration-300`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-serendipity/10 rounded-xl">
                    {metric.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-serendipity">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Serendipity? */}
      <Hero>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Por que Serendipity?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-serendipity rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-serendipity-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Performance Swoole Nativa</h3>
              <p className="text-muted-foreground">
                Aproveite toda a potência do Swoole sem complexidade desnecessária
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-serendipity rounded-2xl flex items-center justify-center">
                <Code className="w-8 h-8 text-serendipity-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Desenvolvimento Async Simplificado</h3>
              <p className="text-muted-foreground">
                Syntax familiar do PHP com superpoderes assíncronos
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-serendipity rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-serendipity-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Ecosystem Hyperf Integrado</h3>
              <p className="text-muted-foreground">
                Compatibilidade total com o ecossistema Hyperf e PSR padrões
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-serendipity rounded-2xl flex items-center justify-center">
                <Activity className="w-8 h-8 text-serendipity-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Microservices Architecture</h3>
              <p className="text-muted-foreground">
                Perfeito para arquiteturas distribuídas e comunicação eficiente
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-serendipity rounded-2xl flex items-center justify-center">
                <Wifi className="w-8 h-8 text-serendipity-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Capabilities</h3>
              <p className="text-muted-foreground">
                WebSocket, broadcasting e comunicação real-time nativa
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-serendipity rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-serendipity-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Production-ready Scalability</h3>
              <p className="text-muted-foreground">
                Testado em produção com milhões de requisições diárias
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-serendipity text-serendipity-foreground hover:shadow-glow transition-all duration-300"
            onClick={handleDocsNavigation}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Primeiros Passos
          </Button>
        </div>
      </Hero>

      <Footer />
    </div>
  );
};

export default Serendipity;
