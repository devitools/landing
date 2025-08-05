import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/CodeBlock";
import { ArrowRight, Blocks, Zap, Layers } from "lucide-react";

const CodeExamples = () => {
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
          {/* Constructo Example */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-6 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-constructo rounded-xl flex items-center justify-center shadow-constructo">
                  <Blocks className="w-6 h-6 text-constructo-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-constructo">Constructo</h3>
                  <p className="text-muted-foreground">Serialização Inteligente</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-1 w-1 h-full bg-gradient-to-b from-constructo/50 to-transparent rounded-full"></div>
                <p className="text-lg text-foreground pl-6">
                  Transforme dados em objetos tipados com validação automática. Classes que se
                  serializam e se validam de forma elegante e eficiente.
                </p>
              </div>

              <div className="space-y-3 pl-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-constructo"></div>
                  <span className="text-muted-foreground">Serialização automática</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-constructo"></div>
                  <span className="text-muted-foreground">Validação integrada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-constructo"></div>
                  <span className="text-muted-foreground">Type safety nativo</span>
                </div>
              </div>

              <div className="pl-6">
                <Button
                  variant="outline"
                  className="group border-constructo /30 hover:border-constructo  hover:text-constructo-foreground hover:bg-constructo "
                >
                  Explorar Constructo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Tabs defaultValue="codec" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="codec">codec.php</TabsTrigger>
                  <TabsTrigger value="faker">faker.php</TabsTrigger>
                </TabsList>

                <TabsContent value="codec">
                  <CodeBlock language="php" size="md" className="shadow-constructo">
                    {`<?php

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
$user = User::from([
    'name' => 'João',
    'email' => 'joao@dev.com',
    'age' => 30
]);

$array = $user->toArray();
$json = $user->toJson();`}
                  </CodeBlock>
                </TabsContent>

                <TabsContent value="faker">
                  <CodeBlock language="php" size="md" className="shadow-constructo">
                    {`<?php

use Devitools\\Constructo\\Faker;
use Devitools\\Constructo\\Testing;

class UserFactory extends Faker
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->email(),
            'age' => $this->faker->numberBetween(18, 80),
            'created_at' => $this->faker->dateTime(),
        ];
    }
}

// Gerando dados fake para testes
$users = UserFactory::make(10);
$singleUser = UserFactory::makeOne();

// Integracao com PHPUnit
$this->assertValidUser($users->first());`}
                  </CodeBlock>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Serendipity Example */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-6 lg:col-start-3 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-serendipity rounded-xl flex items-center justify-center shadow-serendipity">
                  <Zap className="w-6 h-6 text-serendipity-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-serendipity">Serendipity</h3>
                  <p className="text-muted-foreground">Roteamento Moderno</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-1 w-1 h-full bg-gradient-to-b from-serendipity/50 to-transparent rounded-full"></div>
                <p className="text-lg text-foreground pl-6">
                  APIs e Workers com annotations. Roteamento automático, processamento em background
                  e tratamento de erros sem esforço adicional.
                </p>
              </div>

              <div className="space-y-3 pl-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-serendipity"></div>
                  <span className="text-muted-foreground">Roteamento com annotations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-serendipity"></div>
                  <span className="text-muted-foreground">Workers em background</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-serendipity"></div>
                  <span className="text-muted-foreground">Tratamento automático de erros</span>
                </div>
              </div>

              <div className="pl-6">
                <Button
                  variant="outline"
                  className="group border-serendipity/30 hover:border-serendipity hover:text-serendipity-foreground hover:bg-serendipity"
                >
                  Explorar Serendipity
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="lg:col-start-1 lg:col-span-2 lg:row-start-1">
              <Tabs defaultValue="action" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-4">
                  <TabsTrigger value="action">Action.php</TabsTrigger>
                  <TabsTrigger value="input">Input.php</TabsTrigger>
                  <TabsTrigger value="entity">Entity.php</TabsTrigger>
                  <TabsTrigger value="repository">Repository.php</TabsTrigger>
                </TabsList>

                <TabsContent value="action">
                  <CodeBlock language="php" size="md" className="shadow-serendipity">
                    {`<?php

use Devitools\\Serendipity\\Action;
use Devitools\\Serendipity\\Route;

#[Route('/api/users', methods: ['GET', 'POST'])]
class UserAction extends Action
{
    public function index(): Response
    {
        $users = $this->repository->all();
        
        return $this->success($users);
    }
    
    public function store(CreateUserInput $input): Response
    {
        $user = $this->repository->create($input->validated());
        
        return $this->created($user);
    }
}`}
                  </CodeBlock>
                </TabsContent>

                <TabsContent value="input">
                  <CodeBlock language="php" size="md" className="shadow-serendipity">
                    {`<?php

use Devitools\\Serendipity\\Input;

class CreateUserInput extends Input
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|in:admin,user,manager'
        ];
    }
    
    public function messages(): array
    {
        return [
            'email.unique' => 'Este email já está em uso',
            'password.min' => 'A senha deve ter pelo menos 8 caracteres'
        ];
    }
}`}
                  </CodeBlock>
                </TabsContent>

                <TabsContent value="entity">
                  <CodeBlock language="php" size="md" className="shadow-serendipity">
                    {`<?php

use Devitools\\Serendipity\\Entity;

class User extends Entity
{
    protected array $fillable = [
        'name', 'email', 'password', 'role'
    ];
    
    protected array $hidden = ['password'];
    
    protected array $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];
    
    public function getDisplayNameAttribute(): string
    {
        return $this->name ?? $this->email;
    }
}`}
                  </CodeBlock>
                </TabsContent>

                <TabsContent value="repository">
                  <CodeBlock language="php" size="md" className="shadow-serendipity">
                    {`<?php

use Devitools\\Serendipity\\Repository;

class UserRepository extends Repository
{
    protected string $entity = User::class;
    
    public function findByEmail(string $email): ?User
    {
        return $this->query()
            ->where('email', $email)
            ->first();
    }
    
    public function getActiveUsers(): Collection
    {
        return $this->query()
            ->where('status', 'active')
            ->orderBy('created_at', 'desc')
            ->get();
    }
}`}
                  </CodeBlock>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Effulgence Example */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-6 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-effulgence rounded-xl flex items-center justify-center shadow-effulgence">
                  <Layers className="w-6 h-6 text-effulgence-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-effulgence">Effulgence</h3>
                  <p className="text-muted-foreground">Interface Radiante</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-1 w-1 h-full bg-gradient-to-b from-effulgence/50 to-transparent rounded-full"></div>
                <p className="text-lg text-foreground pl-6">
                  Componentes UI modernos e responsivos. Uma biblioteca completa para criar
                  interfaces elegantes e acessíveis com facilidade.
                </p>
              </div>

              <div className="space-y-3 pl-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-effulgence"></div>
                  <span className="text-muted-foreground">Componentes reutilizáveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-effulgence"></div>
                  <span className="text-muted-foreground">Sistema de layout flexível</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-effulgence"></div>
                  <span className="text-muted-foreground">Themes customizáveis</span>
                </div>
              </div>

              <div className="pl-6">
                <Button
                  variant="outline"
                  className="group border-effulgence/30 hover:border-effulgence hover:text-effulgence-foreground hover:bg-effulgence"
                >
                  Explorar Effulgence
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Tabs defaultValue="controller" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="controller">Controller.php</TabsTrigger>
                  <TabsTrigger value="request">Request.php</TabsTrigger>
                  <TabsTrigger value="model">Model.php</TabsTrigger>
                </TabsList>

                <TabsContent value="controller">
                  <CodeBlock language="php" size="md" className="shadow-effulgence">
                    {`<?php

use Devitools\\Effulgence\\Component;
use Devitools\\Effulgence\\Layout;

// Em breve... 🚀
// O Effulgence está sendo desenvolvido
// com muito carinho pela nossa equipe

class ComingSoon extends Component
{
    public function render(): string
    {
        return "
            <div class='coming-soon'>
                <h1>Effulgence</h1>
                <p>Uma revolução em componentes UI está chegando!</p>
                <small>Aguarde as próximas atualizações...</small>
            </div>
        ";
    }
}`}
                  </CodeBlock>
                </TabsContent>
              </Tabs>
            </div>
          </div>
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

export default CodeExamples;
