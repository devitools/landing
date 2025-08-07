import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { DocsLayout } from "@/components/DocsLayout.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card } from "@/components/ui/card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { Code, Database, Download, Layers, Shield, Zap } from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const DocsEffulgence = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      <DocsLayout>
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-border pb-8">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center shadow-elegant">
                <Layers className="w-8 h-8 text-success-foreground" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Effulgence</h1>
                <p className="text-xl text-muted-foreground">Extensão Laravel para Constructo</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">v1.0.0</Badge>
              <Badge variant="outline">Laravel 8+</Badge>
              <Badge variant="outline">PHP 8.1+</Badge>
            </div>

            <p className="text-lg text-muted-foreground">
              Extensão do Constructo especificamente otimizada para Laravel, oferecendo integração
              nativa com Eloquent, controllers simplificados e workflows otimizados.
            </p>
          </div>

          {/* Documentation Content */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="installation">Instalação</TabsTrigger>
              <TabsTrigger value="usage">Uso</TabsTrigger>
              <TabsTrigger value="advanced">Avançado</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Layers className="w-6 h-6 mr-2 text-success" />O que é o Effulgence?
                </h2>
                <p className="text-muted-foreground mb-6">
                  O Effulgence é uma extensão do Constructo desenvolvida especificamente para o
                  framework Laravel. Ele combina toda a potência do Constructo com as convenções e
                  ferramentas nativas do Laravel.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Recursos Principais</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Integração nativa com Eloquent ORM</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Controllers com validação automática</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Middlewares otimizados</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comandos Artisan personalizados</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Benefícios</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Redução significativa de código boilerplate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Validação robusta e automática</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Serialização inteligente de models</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Desenvolvimento mais rápido e seguro</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-4 text-center">
                  <Database className="w-8 h-8 text-success mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Eloquent</h3>
                  <p className="text-sm text-muted-foreground">Integração completa</p>
                </Card>

                <Card className="p-4 text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Controllers</h3>
                  <p className="text-sm text-muted-foreground">Simplificados</p>
                </Card>

                <Card className="p-4 text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Validação</h3>
                  <p className="text-sm text-muted-foreground">Automática</p>
                </Card>

                <Card className="p-4 text-center">
                  <Zap className="w-8 h-8 text-warning mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Performance</h3>
                  <p className="text-sm text-muted-foreground">Otimizada</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Download className="w-6 h-6 mr-2 text-primary" />
                  Instalação
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Requisitos do Sistema</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• PHP 8.1 ou superior</li>
                      <li>• Laravel 8.0 ou superior</li>
                      <li>• Composer 2.0 ou superior</li>
                      <li>• Constructo 1.0 ou superior</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Instalação via Composer</h3>
                    <CodeBlock language="bash" size="sm">
                      composer require devitools/effulgence
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Publicar Configurações</h3>
                    <CodeBlock language="bash" size="sm">
                      {
                        'php artisan vendor:publish --provider="Devitools\\Effulgence\\EffulgenceServiceProvider"'
                      }
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Verificar Instalação</h3>
                    <CodeBlock language="bash" size="sm">
                      php artisan effulgence:status
                    </CodeBlock>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Uso Básico</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Criando um DTO</h3>
                    <CodeBlock language="php" size="md">
                      {`<?php

use Devitools\\Constructo\\Data\\DataTransferObject;
use Devitools\\Effulgence\\Traits\\EloquentSerializable;

class UserDto extends DataTransferObject
{
    use EloquentSerializable;
    
    public string $name;
    public string $email;
    public ?string $phone = null;
    
    protected function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'phone' => 'nullable|string|max:20'
        ];
    }
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Controller com Validação Automática
                    </h3>
                    <CodeBlock language="php" size="md">
                      {`<?php

use Devitools\\Effulgence\\Controller\\BaseController;
use App\\DTOs\\UserDto;
use App\\Models\\User;

class UserController extends BaseController
{
    public function store(UserDto $userDto)
    {
        // Validação automática executada
        $user = User::create($userDto->toArray());
        
        return $this->success($user);
    }
    
    public function update(UserDto $userDto, User $user)
    {
        $user->update($userDto->toArray());
        
        return $this->success($user);
    }
}`}
                    </CodeBlock>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Recursos Avançados</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Middlewares Personalizados</h3>
                    <CodeBlock language="php" size="md">
                      {`<?php

use Devitools\\Effulgence\\Middleware\\ConstructoValidation;

class CustomValidationMiddleware extends ConstructoValidation
{
    protected function beforeValidation($request, $dto)
    {
        // Lógica customizada antes da validação
        return $dto;
    }
    
    protected function afterValidation($request, $dto)
    {
        // Lógica customizada após a validação
        return $dto;
    }
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Serialização Avançada de Models</h3>
                    <CodeBlock language="php" size="md">
                      {`<?php

use Devitools\\Effulgence\\Traits\\AdvancedSerialization;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    use AdvancedSerialization;
    
    protected $constructoMap = [
        'profile' => ProfileDto::class,
        'addresses' => AddressDto::class . '[]',
    ];
    
    public function toDto(): UserDto
    {
        return $this->serialize(UserDto::class);
    }
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Comandos Artisan Personalizados</h3>
                    <CodeBlock language="bash" size="md">
                      {`# Gerar Controller com DTO
php artisan make:effulgence-controller UserController --dto=UserDto

# Gerar DTO com validações
php artisan make:effulgence-dto UserDto --model=User

# Gerar conjunto completo (Controller + DTO + Model)
php artisan make:effulgence-resource User`}
                    </CodeBlock>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DocsLayout>

      <Footer />
    </div>
  );
};

export default DocsEffulgence;
