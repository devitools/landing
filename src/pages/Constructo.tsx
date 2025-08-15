import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero.tsx";
import Benefits from "@/components/packages/Benefits.tsx";
import CodeExamples from "@/components/packages/CodeExamples.tsx";

import Features from "@/components/packages/Features.tsx";
import Installation from "@/components/packages/Installation.tsx";
import UseCases from "@/components/packages/UseCases.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { scrollTo } from "@/lib/utils.ts";
import {
  Blocks,
  Cog,
  Database,
  Download,
  Github,
  Network,
  Package,
  Server,
  Shield,
  TestTube,
  Users,
} from "lucide-react";

const Constructo = () => {
  const handleInstallClick = () => {
    scrollTo("installation");
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
      title: "Codec Inteligente",
      description: "Converta arrays em instâncias e vice-versa usando apenas os tipos da classe",
    },
    {
      icon: <Database className="w-6 h-6 text-constructo-foreground" />,
      title: "Validação por Reflection",
      description: "Utilize atributos para validação de dados com regras flexíveis",
    },
    {
      icon: <TestTube className="w-6 h-6 text-constructo-foreground" />,
      title: "Testes com Faker",
      description: "Gere dados de teste realistas com base nas suas classes usando Faker",
    },
    {
      icon: <Shield className="w-6 h-6 text-constructo-foreground" />,
      title: "Sistema de Tipos",
      description: "Utilize os tipos da linguagem ou os Attributes de tipagem personalizados",
    },
    {
      icon: <Cog className="w-6 h-6 text-constructo-foreground" />,
      title: "Configuração Avançada",
      description: "Sistema de configuração hierárquico com validação e tipagem",
    },
    {
      icon: <Package className="w-6 h-6 text-constructo-foreground" />,
      title: "Container de Injeção",
      description: "Container de injeção de dependências compatível com a PSR-11",
      soon: true,
    },
  ];

  const useCases = [
    {
      icon: <Server className="w-8 h-8 text-constructo-foreground" />,
      title: "Endpoints e Workers",
      description:
        "Ideal para construção de APIs modernas com serialização automática e validação robusta",
      benefits: ["Serialização automática", "Validação de entrada", "Configuração flexível"],
    },
    {
      icon: <Users className="w-8 h-8 text-constructo-foreground" />,
      title: "Sistemas de gestão",
      description:
        "Perfeito para usar a própria estrutura do projeto para poder testar os limites da aplicação",
      benefits: ["Injeção de dependências", "Configuração centralizada", "Testes facilitados"],
    },
    {
      icon: <Network className="w-8 h-8 text-constructo-foreground" />,
      title: "Microsserviços",
      description:
        "Construa microsserviços PHP com configuração padronizada e comunicação eficiente",
      benefits: ["Configuração unificada", "Serialização consistente", "Desempenho otimizado"],
    },
  ];

  const codeExamples = [
    {
      id: "serialization",
      title: "Serialização",
      description:
        "Apenas defina os tipos dos argumentos do construtor que sua classe deve receber e deixa o resto com o Builder",
      code: `use Constructo\\Core\\Serialize\\Builder;
use DateTime;

// Defina sua entidade informando os valores das propriedades no construtor
readonly class User
{
    public function __construct(
        public int $id,
        public string $name,
        public DateTime $birthDate,
        public bool $isActive = true,
        public array $tags = [],
    ) {}
}

// Monte um set com os dados (de JSON, banco de dados, etc.)
$data = [
    'id' => 1,
    'name' => 'João Silva',
    'birth_date' => '1981-08-13',
    'is_active' => true,
    'tags' => ['nice', 'welcome'],
];

// Crie um novo builder e use-o para construir o objeto
$user = (new Builder())->build(User::class, $data);

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
#   Data de Nascimento: 1981-08-13`,
    },
    {
      id: "deserialization",
      title: "Desserialização",
      description:
        "Passe uma instância de uma classe e converta-a em um objeto facilmente convertível para em array associativo ou JSON",
      code: `use Constructo\\Core\\Deserialize\\Demolisher;
use DateTime;

// Defina sua entidade informando os valores das propriedades no construtor
readonly class User
{
    public function __construct(
        public int $id,
        public string $name,
        public DateTime $birthDate,
        public bool $isActive = true,
        public array $tags = [],
    ) {}
}

// Crie a instância que deseja deserializer
$user = new User(
    id: 1,
    name: 'João Silva',
    birthDate: new DateTime('1981-08-13'),
    isActive: true,
    tags: ['nice', 'welcome'],
);

// Crie um novo demolisher e use-o para deserializer a sua instância
$object = (new Demolisher())->demolish($user);

echo "# Usuário: \\n";
echo sprintf("#   ID: %s\\n", $object->id);
echo sprintf("#   Nome: %s\\n", $object->name);
echo sprintf("#   Ativo: %s\\n", $object->is_active ? 'Sim' : 'Não');
echo sprintf("#   Tags: %s\\n", implode(', ', $object->tags));
echo sprintf("#   Data de Nascimento: %s\\n", $object->birth_date);

# Usuário:
#   ID: 1
#   Nome: João Silva
#   Ativo: Sim
#   Tags: nice, welcome
#   Data de Nascimento: 1981-08-13T00:00:00+00:00`,
    },
    {
      id: "validation",
      title: "Validação",
      description:
        "Simplesmente utilize as propriedades da classe que receberá os dados para gerar as regras de validação para sua `action`",
      code: `use Constructo\\Factory\\ReflectorFactory;
use DateTime;

use function array_export;

// Defina sua entidade informando os valores das propriedades no construtor
readonly class User
{
    public function __construct(
        public int $id,
        public string $name,
        public DateTime $birthDate,
        public bool $isActive = true,
        public array $tags = [],
    ) {
    }
}

// Crie o reflector e obtenha o schema da entidade
$schema = ReflectorFactory::createFrom()->make()->reflect(User::class);

echo "# Regras de validação \\n";
echo array_export($schema->rules(), 1);
echo "\\n";

# Regras de validação geradas:
[
    'id' => ['required', 'integer'],
    'name' => ['required', 'string'],
    'birth_date' => ['required', 'date'],
    'is_active' => ['sometimes', 'required', 'boolean'],
    'tags' => ['sometimes', 'required', 'array'],
]
`,
    },
    {
      id: "testing",
      title: "Testes",
      description:
        "Combine alguns recursos para gerar dados de forma dinâmica a partir da estrutura das classes envolvidas na rotina de teste",
      code: `use App\\Domain\\Entity\\User;
use App\\Infrastructure\\Persistence\\Postgres\\PostgresUserRepository;
use Constructo\\Testing\\BuilderExtension;
use Constructo\\Testing\\FakerExtension;
use Constructo\\Testing\\MakeExtension;
use Illuminate\\Foundation\\Testing\\TestCase;

class UserRepositoryTest extends TestCase
{
    use MakeExtension;
    use FakerExtension;
    use BuilderExtension;

    final public function test_create_user_successfully(): void
    {
        // Assert
        $values = $this->faker()->fake(User::class);
        $user = $this->builder()->build(User::class, $values);
        $userRepository = $this->make(PostgresUserRepository::class);

        // Act
        $result = $this->userRepository->create($user);

        // Assert
        $this->assertNotNull($result);
        $this->assertDatabaseHas('users', ['email' => $user->email]);
    }
}`,
    },
  ];

  const benefits = [
    {
      title: "Padrões PSR",
      description: "Totalmente compatível com PSR-11, PSR-4 e outros padrões",
    },
    {
      title: "Tipagem Forte",
      description: "Aproveite ao máximo o PHP 8.0+ os recursos de tipagem forte",
    },
    {
      title: "Performance",
      description: "Otimizado para alto desempenho em produção",
    },
    {
      title: "Flexibilidade",
      description: "Configuração flexível para qualquer projeto",
    },
    {
      title: "Testabilidade",
      description: "Facilita criação de testes com dados realistas",
    },
    {
      title: "Produtividade",
      description: "Reduza código boilerplate e acelere o desenvolvimento",
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
      <Installation onPackagistClick={handlePackagistClick} onDocsClick={handleDocsClick} />

      {/* Features */}
      <Features features={features} />

      {/* Code Examples */}
      <CodeExamples examples={codeExamples} />

      {/* Use Cases */}
      <UseCases useCases={useCases} />

      {/* Benefits */}
      <Benefits benefits={benefits} onDocsClick={handleDocsClick} />

      <Footer />
    </div>
  );
};

export default Constructo;
