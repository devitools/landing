import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CodeBlock from "@/components/CodeBlock";
import { Code, Download, ExternalLink, CheckCircle, Layers, Database, Shield } from "lucide-react";
import Hero from "@/components/Hero.tsx";

const Effulgence = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Integração Eloquent",
      description: "Integração nativa com Eloquent ORM para desenvolvimento ágil",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Validação Automática",
      description: "Sistema robusto de validação automática para DTOs Laravel",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Controllers Simplificados",
      description: "Controllers elegantes com menos código boilerplate",
    },
  ];

  const codeExample = `<?php
use Devitools\\Effulgence\\Controller\\BaseController;
use Devitools\\Constructo\\Data\\DataTransferObject;
use App\\Models\\User;

// DTO com validação automática
class UserDto extends DataTransferObject
{
    public string $name;
    public string $email;
    public ?string $phone = null;
    
    protected function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'phone' => 'nullable|string|max:20'
        ];
    }
}

// Controller simplificado
class UserController extends BaseController
{
    public function store(UserDto $userDto)
    {
        // Validação automática executada
        $user = User::create($userDto->toArray());
        
        return $this->success($user);
    }
}`;

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      {/* Hero Section */}
      <Hero>
        <div className="w-20 h-20 bg-gradient-success rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-elegant">
          <Layers className="w-10 h-10 text-success-foreground" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Effulgence
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Extensão Laravel para Constructo. Desenvolvimento elegante e produtivo com validação
          automática, serialização inteligente e integração nativa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-effulgence shadow-effulgence">
            <Download className="w-5 h-5 mr-2" />
            Instalar via Composer
          </Button>
          <Button variant="outline" size="lg">
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver no GitHub
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Laravel 8+</Badge>
          <Badge variant="secondary">PHP 8.1+</Badge>
          <Badge variant="secondary">Eloquent</Badge>
          <Badge variant="secondary">DTOs</Badge>
        </div>
      </Hero>

      {/* Installation */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Instalação Rápida</h2>
            <p className="text-muted-foreground">Integre o Effulgence ao seu projeto Laravel</p>
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
                composer require devitools/effulgence
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

      {/* Code Example */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exemplo de Uso</h2>
            <p className="text-muted-foreground">
              Veja como criar controllers elegantes com Effulgence
            </p>
          </div>

          <CodeBlock language="php" size="md">
            {codeExample}
          </CodeBlock>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que Effulgence?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Menos Código</h3>
                <p className="text-muted-foreground">Redução significativa de código boilerplate</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Validação Robusta</h3>
                <p className="text-muted-foreground">Sistema de validação automática e confiável</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Serialização Inteligente</h3>
                <p className="text-muted-foreground">Conversão automática entre Models e DTOs</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Desenvolvimento Ágil</h3>
                <p className="text-muted-foreground">Desenvolvimento mais rápido e seguro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Effulgence;
