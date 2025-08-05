import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";
import { ArrowRight, Code2, Zap, Sparkles } from "lucide-react";

const CodeExample = () => {
  const examples = [
    {
      id: "constructo",
      title: "Constructo",
      subtitle: "Serialização Inteligente",
      description: "Transforme dados em objetos tipados com validação automática. Classes que se serializam e se validam de forma elegante e eficiente.",
      gradient: "primary" as const,
      icon: <Code2 className="w-6 h-6" />,
      code: `<?php

use Devitools\\Constructo\\Serializable;
use Devitools\\Constructo\\Validatable;

class User extends Serializable implements Validatable
{
    public function __construct(
        public string $name,
        public string $email,
        public int $age
    ) {}
    
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:2',
            'email' => 'required|email',
            'age' => 'required|integer|min:18'
        ];
    }
}

// Uso simples e direto
$user = User::from(['name' => 'João', 'email' => 'joao@dev.com', 'age' => 30]);
$array = $user->toArray();
$json = $user->toJson();`,
      features: [
        "Serialização automática",
        "Validação integrada",
        "Type safety nativo"
      ]
    },
    {
      id: "serendipity",
      title: "Serendipity",
      subtitle: "Roteamento Moderno",
      description: "APIs e Workers com annotations. Roteamento automático, processamento em background e tratamento de erros sem esforço adicional.",
      gradient: "accent" as const,
      icon: <Zap className="w-6 h-6" />,
      code: `<?php

use Devitools\\Serendipity\\Route;
use Devitools\\Serendipity\\Worker;

#[Route('/api/users', methods: ['GET', 'POST'])]
class UserController
{
    public function index(): array
    {
        return User::all();
    }
    
    public function store(CreateUserRequest $request): User
    {
        return User::create($request->validated());
    }
}

#[Worker(name: 'email-processor', processes: 4)]
class EmailWorker
{
    public function process(EmailJob $job): void
    {
        // Processamento automático com tratamento de erros
        $this->sendEmail($job->recipient, $job->content);
    }
}`,
      features: [
        "Roteamento com annotations",
        "Workers em background",
        "Tratamento automático de erros"
      ]
    },
    {
      id: "effulgence",
      title: "Effulgence",
      subtitle: "Interface Radiante",
      description: "Componentes UI modernos e responsivos. Uma biblioteca completa para criar interfaces elegantes e acessíveis com facilidade.",
      gradient: "success" as const,
      icon: <Sparkles className="w-6 h-6" />,
      code: `<?php

use Devitools\\Effulgence\\Component;
use Devitools\\Effulgence\\Layout;

#[Component('user-card')]
class UserCard extends Component
{
    public function render(User $user): string
    {
        return $this->view('components.user-card', [
            'name' => $user->name,
            'avatar' => $user->avatar,
            'role' => $user->role,
            'actions' => $this->actions($user)
        ]);
    }
    
    protected function actions(User $user): array
    {
        return [
            'edit' => $this->canEdit($user),
            'delete' => $this->canDelete($user)
        ];
    }
}`,
      features: [
        "Componentes reutilizáveis",
        "Sistema de layout flexível",
        "Themes customizáveis"
      ]
    }
  ];

  return (
    <section id="examples" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Veja Como é Simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Código limpo, intuitivo e focado no que realmente importa para seu projeto.
          </p>
        </div>
        
        <div className="space-y-16 max-w-7xl mx-auto">
          {examples.map((example, index) => (
            <div key={example.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? "lg:grid-flow-col" : "lg:grid-flow-col-dense"
            }`}>
              {/* Explicação */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-${example.gradient} rounded-xl flex items-center justify-center shadow-elegant`}>
                    {example.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      example.gradient === "primary" ? "text-primary" :
                      example.gradient === "accent" ? "text-accent" :
                      "text-success"
                    }`}>
                      {example.title}
                    </h3>
                    <p className="text-muted-foreground">{example.subtitle}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-1 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent rounded-full animate-pulse"></div>
                  <p className="text-lg text-foreground pl-6 animate-fade-in">
                    {example.description}
                  </p>
                </div>
                
                <div className="space-y-3 pl-6">
                  {example.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${featureIndex * 150}ms` }}>
                      <div className={`w-2 h-2 rounded-full ${
                        example.gradient === "primary" ? "bg-primary" :
                        example.gradient === "accent" ? "bg-accent" :
                        "bg-success"
                      } animate-pulse`} style={{ animationDelay: `${featureIndex * 200}ms` }}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pl-6">
                  <Button variant="outline" className="group">
                    Explorar {example.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              {/* Código */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <CodeBlock
                  title={example.title}
                  language="php"
                  showCopy={false}
                  showRun={false}
                  gradient={example.gradient}
                  size="md"
                  className="shadow-elegant"
                >
                  {example.code}
                </CodeBlock>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-hero shadow-glow">
            Explorar Mais Exemplos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;