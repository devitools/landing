import PackageCard from "./PackageCard";
import { Package, Layers, Database, Zap, TestTube, Shield } from "lucide-react";

const Packages = () => {
  return (
    <section id="packages" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Nossos Rockstars ✨
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada ferramenta criada por nós foi cuidadosamente desenvolvida para resolver problemas
            específicos e acelerar o desenvolvimento, levando o projeto para outro nível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <PackageCard
            name="Constructo"
            description="Ferramentas fundamentais para qualquer projeto PHP como serialização, validação e testes simplificados."
            gradient="bg-gradient-constructo"
            icon={<Package className="w-7 h-7 text-primary-foreground" />}
            isMain={true}
            docsLink="/docs/constructo"
            githubLink="https://github.com/devitools/constructo"
            features={[
              "Serialização / Desserialização automática de classes",
              "Abstração de regras de validação e mapeamentos de entrada",
              "Geração de dados fake para testes com Faker",
              "Compatible com qualquer framework PHP",
            ]}
          />

          <PackageCard
            name="Serendipity"
            description="O pacote ideal para quem quer lidar com o framework Hyperf, simplificando ao máximo a ferramenta baseada no Swoole."
            gradient="bg-gradient-serendipity"
            icon={<Zap className="w-7 h-7 text-accent-foreground" />}
            docsLink="/docs/serendipity"
            githubLink="https://github.com/devitools/serendipity"
            features={[
              "Simplificação de consumo de rotas e requisições HTTP",
              "Extensões para rotinas de testes automatizados",
              "Workflow otimizado para tratamento de erros",
              "Organização inteligente de projetos Hyperf",
            ]}
          />

          <PackageCard
            name="Effulgence"
            description="Extensão do Constructo especificamente otimizada para o framework Laravel, oferecendo ferramentas avançadas."
            gradient="bg-gradient-effulgence"
            icon={<Layers className="w-7 h-7 text-success-foreground" />}
            docsLink="/docs/effulgence"
            githubLink="https://github.com/devitools/effulgence"
            features={[
              "Simplificação de consumo de rotas e requisições HTTP",
              "Facades próprios e recursos para maximizar a produtividade",
              "Melhorias na experiência com Eloquent ORM",
              "Organização inteligente de projetos Laravel",
            ]}
          />
        </div>

        <div className="text-center my-16">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Muito mais que ferramentas
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os pacotes Devitools foram criados para serem mais do que apenas bibliotecas. Eles são
            extensões do seu potencial como desenvolvedor, oferecendo soluções práticas e eficientes
            para os desafios do dia a dia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <Database className="w-8 h-8 text-gray mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Serialização Inteligente</h3>
            <p className="text-muted-foreground">
              Converta objetos para arrays/JSON e vice-versa automaticamente
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <Shield className="w-8 h-8 text-gray mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Validação Robusta</h3>
            <p className="text-muted-foreground">
              Sistema de validação flexível baseado na estrutura das suas classes
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <TestTube className="w-8 h-8 text-gray mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Testes Simplificados</h3>
            <p className="text-muted-foreground">
              Gere dados de teste de forma prática com base nas suas classes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
