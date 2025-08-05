import PackageCard from "./PackageCard";
import { Package, Layers, Database, Zap, TestTube, Shield } from "lucide-react";

const Packages = () => {
  return (
    <section id="packages" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Nossos Pacotes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada ferramenta foi cuidadosamente desenvolvida para resolver problemas específicos 
            e acelerar seu desenvolvimento PHP.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <PackageCard
            name="Constructo"
            description="Ferramentas fundamentais para qualquer projeto PHP. Serialização, validação e testes simplificados."
            gradient="bg-gradient-constructo"
            icon={<Package className="w-7 h-7 text-primary-foreground" />}
            isMain={true}
            features={[
              "Serialização/Deserialização automática de classes",
              "Sistema de validação flexível e poderoso",
              "Geração de dados fake para testes com Faker",
              "Compatible com qualquer framework PHP",
              "Foco nas regras de negócio, não na infraestrutura"
            ]}
          />
          
          <PackageCard
            name="Serendipity"
            description="Extensão do Constructo especificamente otimizada para o framework Hyperf, oferecendo ferramentas avançadas."
            gradient="bg-gradient-serendipity"
            icon={<Zap className="w-7 h-7 text-accent-foreground" />}
            features={[
              "Simplificação de rotas e controllers",
              "Gerenciamento avançado de workers",
              "Workflow otimizado para tratamento de erros",
              "Organização inteligente de projetos",
              "Integração nativa com todas as features do Constructo"
            ]}
          />

          <PackageCard
            name="Effulgence"
            description="Extensão do Constructo especificamente otimizada para o framework Laravel, oferecendo ferramentas avançadas."
            gradient="bg-gradient-effulgence"
            icon={<Layers className="w-7 h-7 text-success-foreground" />}
            features={[
              "Simplificação de rotas e controllers Laravel",
              "Integração nativa com Eloquent ORM",
              "Workflow otimizado para middlewares",
              "Organização inteligente de projetos Laravel",
              "Integração completa com todas as features do Constructo"
            ]}
          />
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <Database className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Serialização Inteligente</h3>
            <p className="text-muted-foreground">Converta objetos para arrays/JSON e vice-versa automaticamente</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Validação Robusta</h3>
            <p className="text-muted-foreground">Sistema de validação flexível baseado na estrutura das suas classes</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <TestTube className="w-8 h-8 text-success mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Testes Simplificados</h3>
            <p className="text-muted-foreground">Gere dados de teste realistas com base nas suas classes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;