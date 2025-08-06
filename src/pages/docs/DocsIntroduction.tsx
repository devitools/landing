import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Package, Wrench, Layers } from "lucide-react";

const DocsIntroduction = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-8">
      {/* Sumário - Coluna Esquerda */}
      <div className="w-64 flex-shrink-0">
        <div className="sticky top-6 border rounded-lg bg-background/50 p-4">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Nesta Página
          </h3>
          <nav className="space-y-2">
            <button
              onClick={() => scrollToSection('introducao')}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-1"
            >
              Introdução
            </button>
            <button
              onClick={() => scrollToSection('requisitos')}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-1"
            >
              Requisitos do Sistema
            </button>
            <button
              onClick={() => scrollToSection('pacotes')}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-1"
            >
              Pacotes Principais
            </button>
            <div className="ml-3 space-y-1">
              <button
                onClick={() => scrollToSection('constructo')}
                className="block w-full text-left text-xs text-muted-foreground hover:text-primary transition-colors py-1"
              >
                • Constructo
              </button>
              <button
                onClick={() => scrollToSection('serendipity')}
                className="block w-full text-left text-xs text-muted-foreground hover:text-primary transition-colors py-1"
              >
                • Serendipity
              </button>
              <button
                onClick={() => scrollToSection('effulgence')}
                className="block w-full text-left text-xs text-muted-foreground hover:text-primary transition-colors py-1"
              >
                • Effulgence
              </button>
            </div>
            <button
              onClick={() => scrollToSection('instalacao')}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-1"
            >
              Instalação Rápida
            </button>
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal - Coluna Direita */}
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Documentação Devitools
          </h1>
          <p className="text-xl text-muted-foreground">
            Bem-vindo à documentação oficial dos pacotes Devitools para PHP.
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 id="introducao">Introdução</h2>
          <p>
            O Devitools é um conjunto de ferramentas modernas para desenvolvimento PHP que visa simplificar e acelerar 
            o processo de criação de aplicações robustas e escaláveis. Nossos pacotes fornecem soluções elegantes para 
            os desafios mais comuns no desenvolvimento PHP contemporâneo.
          </p>
          
          <p>
            Com uma arquitetura bem pensada e APIs intuitivas, o Devitools permite que desenvolvedores foquem no que 
            realmente importa: criar valor para seus usuários. Nossos pacotes seguem as melhores práticas da comunidade 
            PHP e são extensivamente testados para garantir a máxima confiabilidade.
          </p>

          <h3 id="requisitos">Requisitos do Sistema</h3>
          <ul>
            <li>PHP 8.1 ou superior</li>
            <li>Composer para gerenciamento de dependências</li>
            <li>Conhecimento básico de PHP orientado a objetos</li>
            <li>Familiaridade com padrões PSR (recomendado)</li>
          </ul>
        </div>

        <div id="pacotes">
          <h2 className="text-2xl font-bold mb-6">Pacotes Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card id="constructo" className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Wrench className="h-6 w-6 text-primary" />
                  <CardTitle>Constructo</CardTitle>
                </div>
                <CardDescription>
                  Ferramentas fundamentais para projetos PHP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Sistema completo de serialização, validação e geração de dados fake para acelerar o desenvolvimento PHP.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Serialização</Badge>
                  <Badge variant="secondary">Validação</Badge>
                  <Badge variant="secondary">Testing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card id="serendipity" className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Package className="h-6 w-6 text-accent" />
                  <CardTitle>Serendipity</CardTitle>
                </div>
                <CardDescription>
                  Extensão otimizada para Hyperf
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ferramentas avançadas para desenvolvimento com Hyperf, incluindo workers, rotas e tratamento de erros.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Hyperf</Badge>
                  <Badge variant="secondary">Workers</Badge>
                  <Badge variant="secondary">Async</Badge>
                </div>
              </CardContent>
            </Card>

            <Card id="effulgence" className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Layers className="h-6 w-6 text-success" />
                  <CardTitle>Effulgence</CardTitle>
                </div>
                <CardDescription>
                  Extensão otimizada para Laravel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Integração completa com Laravel, incluindo Eloquent, controllers simplificados e middlewares otimizados.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">Eloquent</Badge>
                  <Badge variant="secondary">Controllers</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="instalacao" className="bg-muted/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Instalação Rápida</h3>
          <p className="text-muted-foreground mb-4">
            Instale os pacotes Devitools via Composer para começar a usar em seus projetos PHP.
          </p>
          <div className="bg-background rounded border p-4 font-mono text-sm">
            composer require devitools/constructo<br />
            composer require devitools/serendipity<br />
            composer require devitools/effulgence
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsIntroduction;