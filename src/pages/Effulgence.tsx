import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, Code, Zap, Shield, Database, ArrowRight, Github, BookOpen } from "lucide-react";

const Effulgence = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-background)' }}>
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-success rounded-3xl mb-8 mx-auto flex items-center justify-center shadow-elegant">
              <Layers className="w-10 h-10 text-success-foreground" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Effulgence
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Extensão do Constructo especificamente otimizada para o framework Laravel, 
              oferecendo ferramentas avançadas para acelerar seu desenvolvimento.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="text-sm">Laravel 8+</Badge>
              <Badge variant="secondary" className="text-sm">PHP 8.1+</Badge>
              <Badge variant="secondary" className="text-sm">Composer Ready</Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-success shadow-elegant">
                <BookOpen className="w-5 h-5 mr-2" />
                Documentação
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="features">Recursos</TabsTrigger>
              <TabsTrigger value="integration">Integração</TabsTrigger>
              <TabsTrigger value="examples">Exemplos</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">O que é o Effulgence?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  O Effulgence é uma extensão poderosa do Constructo, desenvolvida especificamente para 
                  integrar-se perfeitamente com o ecossistema Laravel. Ele aproveita toda a robustez 
                  do Constructo enquanto oferece ferramentas específicas para desenvolvimento Laravel.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Benefícios Principais</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Integração nativa com Eloquent ORM</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Simplificação de controllers e rotas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Workflow otimizado para middlewares</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Compatibilidade com Laravel Artisan</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Compatibilidade</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Laravel 8.x, 9.x, 10.x, 11.x</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>PHP 8.1+ com suporte a atributos</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Composer 2.0+</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Todas as features do Constructo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="w-12 h-12 bg-gradient-success rounded-2xl mb-4 flex items-center justify-center">
                    <Code className="w-6 h-6 text-success-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Controllers Simplificados</h3>
                  <p className="text-muted-foreground">
                    Criação automática de controllers com validação integrada e 
                    serialização de responses usando o poder do Constructo.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl mb-4 flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Eloquent Integrado</h3>
                  <p className="text-muted-foreground">
                    Integração completa com Eloquent ORM, permitindo serialização 
                    automática de models e relationships.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-2xl mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Middlewares Otimizados</h3>
                  <p className="text-muted-foreground">
                    Sistema de middlewares que trabalha em conjunto com a validação 
                    do Constructo para máxima performance.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="w-12 h-12 bg-gradient-success rounded-2xl mb-4 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-success-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Validação Robusta</h3>
                  <p className="text-muted-foreground">
                    Aproveite todo o sistema de validação do Constructo integrado 
                    com as Form Requests do Laravel.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integration" className="space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Integração com Laravel</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  O Effulgence foi projetado para integrar-se perfeitamente com o ecossistema Laravel, 
                  mantendo toda a filosofia e convenções do framework.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Service Provider Automático</h3>
                    <p className="text-muted-foreground mb-4">
                      Registra automaticamente todos os serviços necessários no container do Laravel.
                    </p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                      php artisan vendor:publish --provider="Devitools\Effulgence\EffulgenceServiceProvider"
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Artisan Commands</h3>
                    <p className="text-muted-foreground mb-4">
                      Comandos Artisan para gerar controllers, DTOs e validadores automaticamente.
                    </p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-2">
                      <div>php artisan make:effulgence-controller UserController</div>
                      <div>php artisan make:effulgence-dto UserDto</div>
                      <div>php artisan make:effulgence-validator UserValidator</div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Exemplos Práticos</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Controller com Validação Automática</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre>{`<?php

use Devitools\\Effulgence\\Controller\\BaseController;
use App\\DTOs\\UserDto;

class UserController extends BaseController
{
    public function store(UserDto $user)
    {
        // Validação automática pelo Constructo
        // Serialização automática do Eloquent
        $model = User::create($user->toArray());
        
        return $this->success($model);
    }
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">DTO com Eloquent Integration</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre>{`<?php

use Devitools\\Constructo\\Data\\DataTransferObject;
use Devitools\\Effulgence\\Traits\\EloquentSerializable;

class UserDto extends DataTransferObject
{
    use EloquentSerializable;
    
    public string $name;
    public string $email;
    public ?string $phone = null;
    
    // Automaticamente compatível com User::create($dto->toArray())
}`}</pre>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Effulgence;