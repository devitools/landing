import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/CodeBlock";
import { CheckCircle, Code, Database, Download, ExternalLink, Layers, Package, Shield, BookOpen } from "lucide-react";
import Hero from "@/components/Hero.tsx";
import { Soon } from "@/components/Soon.tsx";

const Effulgence = () => {
  const handlePackagistClick = () => {
    window.open("https://packagist.org/packages/devitools/effulgence", "_blank");
  };

  const handleDocsClick = () => {
    window.open("/docs/effulgence", "_blank");
  };

  const features = [
    {
      icon: <Database className="w-6 h-6 text-effulgence-foreground" />,
      title: "Integração Laravel Nativa",
      description: "Desenvolvido especificamente para Laravel com Service Providers e Facades integrados",
    },
    {
      icon: <Shield className="w-6 h-6 text-effulgence-foreground" />,
      title: "DTOs com Validação Automática",
      description: "Data Transfer Objects com validação Laravel integrada e regras customizáveis",
    },
    {
      icon: <Layers className="w-6 h-6 text-effulgence-foreground" />,
      title: "Serialização Eloquent",
      description: "Conversão automática entre Models Eloquent e DTOs do Constructo",
    },
    {
      icon: <Code className="w-6 h-6 text-effulgence-foreground" />,
      title: "Controllers Simplificados",
      description: "BaseController com métodos otimizados para APIs REST e validação automática",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-effulgence-foreground" />,
      title: "Middleware Integrado",
      description: "Middleware personalizado para validação de DTOs e tratamento de erros",
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-effulgence-foreground" />,
      title: "Testing Laravel Friendly",
      description: "Ferramentas de teste integradas com PHPUnit e factories do Laravel",
    },
  ];

  const codeExamples = {
    controller: `<?php

// Em breve UserController.php ... 🚀`,
    model: `<?php

// Em breve User.php ... 🚀`,
    middleware: `<?php

// Em breve ValidateUserDto.php ... 🚀`,
    testing: `<?php

// Em breve UserControllerTest.php ... 🚀`
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      {/* Hero Section */}
      <Hero>
        <div className="w-20 h-20 bg-gradient-effulgence rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-elegant">
          <Layers className="w-10 h-10 text-effulgence-foreground" />
        </div>

        <div className="flex items-center justify-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Effulgence
          </h1>
          <div className="flex items-center ml-3">
            <Soon />
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Potencialize seus projetos Laravel com DTOs tipados, validação automática e
          serialização inteligente. O Effulgence traz toda a robustez do Constructo
          diretamente para o ecossistema Laravel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-effulgence text-effulgence-foreground shadow-glow">
            <Download className="w-5 h-5 mr-2" />
            Instalar via Composer
          </Button>
          <Button variant="outline" size="lg" onClick={handleDocsClick}>
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver Documentação
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Laravel 8+</Badge>
          <Badge variant="secondary">PHP 8+</Badge>
          <Badge variant="secondary">Eloquent</Badge>
          <Badge variant="secondary">API REST</Badge>
          <Badge variant="secondary">Validation</Badge>
        </div>
      </Hero>

      {/* Installation */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Instalação Rápida</h2>
            <p className="text-muted-foreground">Comece a usar o Effulgence em segundos</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <CodeBlock language="bash" size="md">
              composer require devitools/effulgence
            </CodeBlock>

            <div className="text-center flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={handlePackagistClick} className="gap-2">
                <Package className="w-4 h-4" />
                Ver no Packagist
              </Button>
              <Button
                onClick={handleDocsClick}
                className="bg-gradient-effulgence text-effulgence-foreground shadow-glow gap-2"
              >
                <BookOpen className="w-4 h-4" />
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
              O poder do Constructo integrado ao Laravel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-effulgence rounded-xl mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exemplos Práticos</h2>
            <p className="text-muted-foreground">
              Veja como o Effulgence simplifica o desenvolvimento Laravel
            </p>
          </div>

          <Tabs defaultValue="controller" className="max-w-5xl mx-auto">
            <TabsList>
              <TabsTrigger value="controller">Controller + DTO</TabsTrigger>
              <TabsTrigger value="model">Model com Traits</TabsTrigger>
              <TabsTrigger value="middleware">Middleware</TabsTrigger>
              <TabsTrigger value="testing">Testing</TabsTrigger>
            </TabsList>

            <TabsContent value="controller">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Controller com DTO e Validação Automática</h3>
                <p className="text-muted-foreground text-sm">
                  DTOs com validação Laravel integrada e controllers simplificados
                </p>
              </div>
              <CodeBlock language="php" size="lg">
                {codeExamples.controller}
              </CodeBlock>
            </TabsContent>

            <TabsContent value="model">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Model Eloquent com Serialização</h3>
                <p className="text-muted-foreground text-sm">
                  Conversão automática entre Models Eloquent e DTOs do Constructo
                </p>
              </div>
              <CodeBlock language="php" size="lg">
                {codeExamples.model}
              </CodeBlock>
            </TabsContent>

            <TabsContent value="middleware">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Middleware de Validação</h3>
                <p className="text-muted-foreground text-sm">
                  Middleware personalizado para validação de DTOs nas rotas
                </p>
              </div>
              <CodeBlock language="php" size="lg">
                {codeExamples.middleware}
              </CodeBlock>
            </TabsContent>

            <TabsContent value="testing">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Testes Automatizados</h3>
                <p className="text-muted-foreground text-sm">
                  Testes integrados com PHPUnit para validação e funcionalidades
                </p>
              </div>
              <CodeBlock language="php" size="lg">
                {codeExamples.testing}
              </CodeBlock>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que Effulgence?</h2>
            <p className="text-xl text-muted-foreground">
              Benefícios únicos da integração Laravel + Constructo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-effulgence rounded-xl flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-effulgence-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">70% Menos Código Boilerplate</h3>
                <p className="text-muted-foreground">Controllers, validação e serialização automáticos eliminam repetição desnecessária</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-effulgence rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-effulgence-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Validação Laravel Nativa</h3>
                <p className="text-muted-foreground">Use todas as regras de validação do Laravel diretamente nos DTOs</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-effulgence rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-effulgence-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Integração Eloquent Zero-Config</h3>
                <p className="text-muted-foreground">Conversão automática entre Models e DTOs sem configuração adicional</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-effulgence rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-effulgence-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Type Safety Garantida</h3>
                <p className="text-muted-foreground">DTOs tipados que previnem erros em tempo de desenvolvimento</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-effulgence rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-effulgence-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Middleware Customizável</h3>
                <p className="text-muted-foreground">Sistema de middleware integrado para validação e transformação de dados</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-effulgence rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-6 h-6 text-effulgence-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Testing First-Class</h3>
                <p className="text-muted-foreground">Ferramentas de teste integradas com factories e assertions personalizadas</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-gradient-to-br from-effulgence/5 to-effulgence/10 border-effulgence/20">
              <div className="text-3xl font-bold text-effulgence mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Menos código repetitivo</div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-success/5 to-success/10 border-success/20">
              <div className="text-3xl font-bold text-success mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Compatível Laravel 8+</div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
              <div className="text-3xl font-bold text-blue-500 mb-2">5min</div>
              <div className="text-sm text-muted-foreground">Setup completo</div>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <Hero>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quando Usar Effulgence?</h2>
            <p className="text-xl text-muted-foreground">
              Entenda quando o Effulgence é a escolha ideal para seu projeto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Ideal Para */}
            <Card className="p-8 bg-gradient-to-br from-success/5 to-success/10 border-success/20">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-success mr-3" />
                <h3 className="text-2xl font-bold text-success">Ideal Para</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Projetos Laravel Existentes</h4>
                    <p className="text-muted-foreground text-sm">Você já tem um projeto Laravel e quer adicionar DTOs tipados</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">APIs REST Robustas</h4>
                    <p className="text-muted-foreground text-sm">Desenvolvimento de APIs com validação automática e tipagem forte</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Equipes Laravel</h4>
                    <p className="text-muted-foreground text-sm">Times que querem manter o padrão Laravel mas com mais tipagem</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Integração Gradual</h4>
                    <p className="text-muted-foreground text-sm">Adoção incremental sem quebrar código existente</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Use Constructo Puro */}
            <Card className="p-8 bg-gradient-to-br from-muted/5 to-muted/10 border-muted/20">
              <div className="flex items-center mb-6">
                <ExternalLink className="w-8 h-8 text-muted-foreground mr-3" />
                <h3 className="text-2xl font-bold">Use Constructo Puro Se</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ExternalLink className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Projeto Framework-Agnostic</h4>
                    <p className="text-muted-foreground text-sm">Não está usando Laravel ou quer máxima flexibilidade</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ExternalLink className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Microsserviços Simples</h4>
                    <p className="text-muted-foreground text-sm">Aplicações pequenas sem necessidade de ORM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ExternalLink className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Controle Total</h4>
                    <p className="text-muted-foreground text-sm">Quer implementar suas próprias abstrações</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ExternalLink className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Outros Frameworks</h4>
                    <p className="text-muted-foreground text-sm">Usando Symfony, CodeIgniter, ou framework customizado</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Comparação Rápida</h3>
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Característica</th>
                      <th className="text-center p-4 font-semibold">Effulgence</th>
                      <th className="text-center p-4 font-semibold">Constructo Puro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 font-medium">Framework</td>
                      <td className="p-4 text-center">Laravel Specific</td>
                      <td className="p-4 text-center">Framework Agnostic</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Validação</td>
                      <td className="p-4 text-center">Laravel Rules</td>
                      <td className="p-4 text-center">Constructo Rules</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">ORM Integration</td>
                      <td className="p-4 text-center">Eloquent Native</td>
                      <td className="p-4 text-center">Manual</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Setup</td>
                      <td className="p-4 text-center">Composer Install</td>
                      <td className="p-4 text-center">Manual Config</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Learning Curve</td>
                      <td className="p-4 text-center">Laravel Developers</td>
                      <td className="p-4 text-center">Any PHP Developer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 pt-10">
          <Button
            onClick={handleDocsClick}
            size="lg"
            className="bg-gradient-effulgence text-effulgence-foreground transition-all hover:shadow-glow gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Primeiros Passos
          </Button>
        </div>
      </Hero>

      <Footer />
    </div>
  );
};

export default Effulgence;
