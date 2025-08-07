import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero.tsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Blocks,
  BookOpen,
  CheckCircle,
  Cog,
  Database,
  Download,
  Github,
  Package,
  Server,
  Shield,
  TestTube,
  Users,
  Zap,
} from "lucide-react";

const Constructo = () => {
  const handleInstallClick = () => {
    navigator.clipboard.writeText("composer require devitools/constructo");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/devitools/constructo", "_blank");
  };

  const handlePackagistClick = () => {
    window.open("https://packagist.org/packages/devitools/constructo", "_blank");
  };

  const handleDocsClick = () => {
    window.open("/docs/constructo", "_blank");
  };

  const features = [
    {
      icon: <Blocks className="w-6 h-6 text-constructo-foreground" />,
      title: "Serialização Inteligente",
      description: "Converta arrays em instâncias usando apenas os tipos da classe",
    },
    {
      icon: <Database className="w-6 h-6 text-constructo-foreground" />,
      title: "Desserialização Eficiente",
      description: "Converta objetos em arrays formatando valores automaticamente",
    },
    {
      icon: <TestTube className="w-6 h-6 text-constructo-foreground" />,
      title: "Testes Simplificados",
      description: "Gere dados de teste realistas com base nas suas classes usando Faker",
    },
    {
      icon: <Cog className="w-6 h-6 text-constructo-foreground" />,
      title: "Configuração Avançada",
      description: "Sistema de configuração hierárquico com validação e tipagem",
    },
    {
      icon: <Package className="w-6 h-6 text-constructo-foreground" />,
      title: "Container DI",
      description: "Container de injeção de dependências PSR-11 compliant",
    },
    {
      icon: <Shield className="w-6 h-6 text-constructo-foreground" />,
      title: "Type Safety",
      description: "Aproveite ao máximo o PHP 8.0+ com tipagem forte e segura",
    },
  ];

  const useCases = [
    {
      icon: <Server className="w-8 h-8 text-constructo-foreground" />,
      title: "APIs REST/GraphQL",
      description:
        "Ideal para construção de APIs modernas com serialização automática e validação robusta",
      benefits: ["Serialização automática", "Validação de entrada", "Configuração flexível"],
    },
    {
      icon: <Users className="w-8 h-8 text-constructo-foreground" />,
      title: "Aplicações Enterprise",
      description:
        "Perfeito para sistemas complexos que precisam de arquitetura sólida e manutenível",
      benefits: ["Injeção de dependências", "Configuração centralizada", "Testes facilitados"],
    },
    {
      icon: <Zap className="w-8 h-8 text-constructo-foreground" />,
      title: "Microserviços",
      description:
        "Construa microserviços PHP com configuração padronizada e comunicação eficiente",
      benefits: ["Configuração unificada", "Serialização consistente", "Performance otimizada"],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      {/* Hero Section */}
      <Hero>
        <div className="w-20 h-20 bg-gradient-constructo rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-constructo">
          <Blocks className="w-10 h-10 text-constructo-foreground" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Constructo
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Framework PHP moderno para construção de aplicações robustas e escaláveis. Sistema
          avançado de configuração e injeção de dependências.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-constructo text-constructo-foreground transition-all hover:shadow-glow"
            onClick={handleInstallClick}
          >
            <Download className="w-5 h-5 mr-2" />
            Instalar via Composer
          </Button>
          <Button variant="outline" size="lg" onClick={handleGithubClick}>
            <Github className="w-5 h-5 mr-2" />
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

          <div className="max-w-2xl mx-auto space-y-4">
            <CodeBlock language="bash" size="md">
              composer require devitools/constructo
            </CodeBlock>

            <div className="text-center flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={handlePackagistClick} className="gap-2">
                <Package className="w-4 h-4" />
                Ver no Packagist
              </Button>
              <Button
                onClick={handleDocsClick}
                className="bg-gradient-constructo text-constructo-foreground transition-all hover:shadow-glow gap-2"
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
              Tudo que você precisa para construir aplicações PHP modernas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-constructo rounded-xl mb-4 flex items-center justify-center">
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
              Veja como usar o Constructo em diferentes cenários
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="container" className="w-full">
              <TabsList>
                <TabsTrigger value="container">Serialização</TabsTrigger>
                <TabsTrigger value="serialization">Desserialização</TabsTrigger>
                <TabsTrigger value="validation">Validação</TabsTrigger>
                <TabsTrigger value="testing">Testes</TabsTrigger>
              </TabsList>

              <TabsContent value="container">
                <Card>
                  <CardHeader>
                    <CardTitle>Serialização inteligente</CardTitle>
                    <CardDescription>
                      Apenas defina os tipos dos argumentos do construtor que sua classe deve
                      receber e deixa o resto com o Builder
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="php">
                      {`<?php
# ...
use Constructo\\Core\\Serialize\\Builder;
use Constructo\\Support\\Set;
use Constructo\\Type\\Timestamp;

// Defina sua entidade informando os valores das propriedades no construtor
readonly class User
{
    public function __construct(
        public int $id,
        public string $name,
        public Timestamp $birthDate,
        public bool $isActive = true,
        public array $tags = [],
    ) {}
}

// Monte um set com os dados (de JSON, banco de dados, etc.)
$set = Set::createFrom([
    'id' => 1,
    'name' => 'João Silva',
    'birth_date' => '1981-08-13',
    'is_active' => true,
    'tags' => ['nice', 'welcome'],
]);

// Crie um novo builder e use-o para construir o objeto
$user = (new Builder())->build(User::class, $set);

echo "Usuário: \\n";
echo sprintf("  ID: %s\\n", $user->id);
echo sprintf("  Nome: %s\\n", $user->name);
echo sprintf("  Ativo: %s\\n", $user->isActive ? 'Sim' : 'Não');
echo sprintf("  Tags: %s\\n", implode(', ', $user->tags));
echo sprintf("  Data de Nascimento: %s\\n", $user->birthDate->format('Y-m-d'));

# Usuário:
#   ID: 1
#   Nome: João Silva
#   Ativo: Sim
#   Tags: nice, welcome
#   Data de Nascimento: 1981-08-13
`}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="serialization">
                <Card>
                  <CardHeader>
                    <CardTitle>Serialização de Classes</CardTitle>
                    <CardDescription>
                      Converta objetos para arrays/JSON automaticamente
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="php">
                      {`<?php
use Devitools\\Constructo\\Serializable;

class User extends Serializable 
{
    public function __construct(
        public string $name,
        public string $email,
        public DateTime $createdAt
    ) {}
}

$user = new User('João Silva', 'joao@email.com', new DateTime());

// Serialização automática
$array = $user->toArray();
$json = $user->toJson();

// Deserialização
$newUser = User::fromArray($array);
$fromJson = User::fromJson($json);`}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="validation">
                <Card>
                  <CardHeader>
                    <CardTitle>Sistema de Validação</CardTitle>
                    <CardDescription>
                      Valide dados com regras flexíveis baseadas em atributos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="php">
                      {`<?php
use Devitools\\Constructo\\Validator;
use Devitools\\Constructo\\Rules\\{Required, Email, MinLength};

class UserRegistration extends Validator
{
    #[Required, MinLength(2)]
    public string $name;
    
    #[Required, Email]
    public string $email;
    
    #[Required, MinLength(8)]
    public string $password;
}

$registration = new UserRegistration();
$registration->name = 'João';
$registration->email = 'joao@email.com';
$registration->password = 'senha123';

if ($registration->isValid()) {
    // Dados válidos, prosseguir
} else {
    $errors = $registration->getErrors();
}`}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testing">
                <Card>
                  <CardHeader>
                    <CardTitle>Geração de Dados para Testes</CardTitle>
                    <CardDescription>
                      Use Faker para gerar dados realistas baseados nas suas classes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="php">
                      {`<?php
use Devitools\\Constructo\\Testing\\Factory;

class UserFactory extends Factory
{
    protected string $model = User::class;
    
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'createdAt' => $this->faker->dateTime()
        ];
    }
}

// Gerar um usuário fake
$user = UserFactory::make();

// Gerar múltiplos usuários
$users = UserFactory::times(10)->make();

// Persistir no banco (se configurado)
$user = UserFactory::create();`}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Casos de Uso</h2>
            <p className="text-xl text-muted-foreground">
              Quando usar o Constructo em seus projetos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-constructo rounded-2xl mb-6 flex items-center justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Hero>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Por que Constructo?</h2>
          <p className="text-xl text-muted-foreground">
            Vantagens que fazem a diferença no seu desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Padrões PSR</h3>
              <p className="text-muted-foreground">
                Totalmente compatível com PSR-11, PSR-4 e outros padrões
              </p>
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

          <div className="flex items-start space-x-4">
            <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Testabilidade</h3>
              <p className="text-muted-foreground">
                Facilita criação de testes com dados realistas
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Produtividade</h3>
              <p className="text-muted-foreground">
                Reduza código boilerplate e acelere o desenvolvimento
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 pt-10">
          <Button
            onClick={handleDocsClick}
            size="lg"
            className="bg-gradient-constructo text-constructo-foreground transition-all hover:shadow-glow gap-2"
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

export default Constructo;
