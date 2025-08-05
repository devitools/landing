import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Ferramentas modernas para o desenvolvedor</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Simplifique seu ambiente de desenvolvimento
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ferramentas modernas e elegantes para acelerar seu workflow. Foque no que importa: o negócio do cliente!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-glow text-lg px-8 py-6"
              onClick={() => window.location.href = '/docs'}
            >
              <Zap className="w-5 h-5 mr-2" />
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Code className="w-5 h-5 mr-2" />
              Ver Exemplos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Simples</h3>
              <p className="text-muted-foreground">
                Pensado para simplificar as stacks de desenvolvimento
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performático</h3>
              <p className="text-muted-foreground">
                Otimizado para alta performance e baixo overhead
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-success rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-success-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Moderno</h3>
              <p className="text-muted-foreground">Usando as melhores práticas e padrões atuais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
