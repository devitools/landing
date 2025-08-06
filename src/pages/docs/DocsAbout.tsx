import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Target, Users } from "lucide-react";

const DocsAbout = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre o Devitools
        </h1>
        <p className="text-xl text-muted-foreground">
          Conheça a história, missão e visão por trás do projeto Devitools.
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2>Nossa História</h2>
        <p>
          O Devitools nasceu da necessidade de simplificar e acelerar o desenvolvimento de aplicações PHP modernas. 
          Criado por desenvolvedores que enfrentavam os mesmos desafios diários, o projeto visa fornecer 
          ferramentas robustas e bem testadas para a comunidade PHP.
        </p>
        
        <p>
          Desde o início, nosso foco tem sido criar soluções que não apenas resolvem problemas técnicos, 
          mas que também melhoram a experiência do desenvolvedor e promovem boas práticas de desenvolvimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle>Nossa Missão</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Democratizar o acesso a ferramentas de desenvolvimento de alta qualidade, 
              tornando o desenvolvimento PHP mais eficiente, seguro e agradável para desenvolvedores de todos os níveis.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <CardTitle>Nossos Valores</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Qualidade</Badge>
                <span className="text-sm">Código bem testado e documentado</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Simplicidade</Badge>
                <span className="text-sm">APIs intuitivas e fáceis de usar</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Comunidade</Badge>
                <span className="text-sm">Desenvolvimento colaborativo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-accent" />
              <CardTitle>Tecnologias</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-2 bg-muted/50 rounded">
                <h4 className="font-semibold">PHP 8+</h4>
                <p className="text-sm text-muted-foreground">Aproveitamos os recursos mais modernos do PHP</p>
              </div>
              <div className="p-2 bg-muted/50 rounded">
                <h4 className="font-semibold">PSR Standards</h4>
                <p className="text-sm text-muted-foreground">Seguimos os padrões da comunidade PHP</p>
              </div>
              <div className="p-2 bg-muted/50 rounded">
                <h4 className="font-semibold">Composer</h4>
                <p className="text-sm text-muted-foreground">Integração nativa com o ecossistema PHP</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-success" />
              <CardTitle>Equipe</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              Uma equipe apaixonada de desenvolvedores brasileiros trabalhando para 
              tornar o desenvolvimento PHP mais acessível e eficiente.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Core Team</span>
                <Badge variant="outline">5 membros</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Contribuidores</span>
                <Badge variant="outline">150+ pessoas</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <h3 className="text-lg font-semibold mb-3">Roadmap</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">Lançamento do Constructo v2.0</span>
            <Badge variant="secondary">Concluído</Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm">Integração com Symfony (Effulgence)</span>
            <Badge variant="secondary">Em progresso</Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="text-sm">SDK para microserviços</span>
            <Badge variant="secondary">Planejado</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsAbout;