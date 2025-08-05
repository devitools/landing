import Header from "@/components/Header";
import Packages from "@/components/Packages";
import CodeExamples from "@/components/CodeExamples.tsx";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Radar, Rocket, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/Hero.tsx";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />
      <Hero>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Ferramentas modernas para o dev moderno
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Eleve seu nível de desenvolvimento
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground m-8 max-w-3xl mx-auto">
            Utilize ferramentas modernas e elegantes para acelerar seu fluxo de trabalho e melhorar a experiência de desenvolvimento
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary shadow-glow text-lg px-8 py-6"
              onClick={() => navigate("/docs")}
            >
              <Zap className="w-5 h-5 mr-2" />
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Code className="w-5 h-5 mr-2" />
              <a href="#examples" className="flex items-center">
                Ver Exemplos
              </a>
            </Button>
          </div>

          <p className="text-xl md:text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-8 max-w-3xl mx-auto">
            Foque no que importa: o negócio do cliente
          </p>

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
              <div className="w-12 h-12 bg-gradient-success rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Radar className="w-6 h-6 text-success-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Moderno</h3>
              <p className="text-muted-foreground">Usando as melhores práticas e padrões atuais</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performático</h3>
              <p className="text-muted-foreground">
                Otimizado para alta performance e baixo overhead
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <Packages />
      <CodeExamples />
      <Footer />
    </div>
  );
};

export default Index;
