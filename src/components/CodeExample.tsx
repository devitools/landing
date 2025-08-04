import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Play } from "lucide-react";

const CodeExample = () => {
  const constructoExample = `<?php

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
$json = $user->toJson();`;

  const serendipityExample = `<?php

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
}`;

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Veja Como é Simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Código limpo, intuitivo e focado no que realmente importa para seu projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="overflow-hidden">
            <div className="bg-gradient-primary p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary-foreground">Constructo</h3>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="language-php text-foreground whitespace-pre-wrap">
                  {constructoExample}
                </code>
              </pre>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-gradient-accent p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-accent-foreground">Serendipity</h3>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-accent-foreground hover:bg-white/10">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-accent-foreground hover:bg-white/10">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="language-php text-foreground whitespace-pre-wrap">
                  {serendipityExample}
                </code>
              </pre>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-hero shadow-glow">
            Explorar Mais Exemplos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;