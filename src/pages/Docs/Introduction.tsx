import { type SidebarItem } from "@/components/DocsResponsiveSidebar";
import ResponsiveLayout from "@/components/ResponsiveLayout.tsx";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils.ts";
import { Layers, Package, Wrench } from "lucide-react";
import React from "react";

const Introduction = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sidebarItems: SidebarItem[] = [
    { id: "requisitos", label: "Começando do Começo", level: 0 },
    { id: "pacotes", label: "Pacotes Principais", level: 0 },
    { id: "constructo", label: "Constructo", level: 1 },
    { id: "serendipity", label: "Serendipity", level: 1 },
    { id: "effulgence", label: "Effulgence", level: 1 },
    { id: "instalacao", label: "Instalação Rápida", level: 0 },
  ];

  return (
    <ResponsiveLayout
      title={"Começando do Começo"}
      leftContent={
        <div>
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "block w-full text-left transition-colors py-1 hover:text-primary",
                item.level === 1 ? "ml-3 text-xs text-muted-foreground" : "text-sm",
              )}
            >
              {item.level === 1 ? `• ${item.label}` : item.label}
            </button>
          ))}
        </div>
      }
      rightContent={
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground">
              Bem-vindo à documentação oficial das soluções do Devitools.
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 id="introducao">Introdução</h2>
            <p>
              O Devitools é um conjunto de ferramentas modernas para desenvolvimento PHP que visa
              simplificar e acelerar o processo de criação de aplicações robustas e escaláveis.
              Nossos pacotes fornecem soluções elegantes para os desafios mais comuns no
              desenvolvimento PHP contemporâneo.
            </p>

            <p>
              Com uma arquitetura bem pensada e APIs intuitivas, o Devitools permite que
              desenvolvedores foquem no que realmente importa: criar valor para seus usuários.
              Nossos pacotes seguem as melhores práticas da comunidade PHP e são extensivamente
              testados para garantir a máxima confiabilidade.
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
                  <CardDescription>Ferramentas fundamentais para projetos PHP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sistema completo de serialização, validação e geração de dados fake para
                    acelerar o desenvolvimento PHP.
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
                  <CardDescription>Extensão otimizada para Hyperf</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ferramentas avançadas para desenvolvimento com Hyperf, incluindo workers, rotas
                    e tratamento de erros.
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
                  <CardDescription>Extensão otimizada para Laravel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Integração completa com Laravel, incluindo Eloquent, controllers simplificados e
                    middlewares otimizados.
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
              composer require devitools/constructo
              <br />
              composer require devitools/serendipity
              <br />
              composer require devitools/effulgence
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Introduction;
