import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero.tsx";
import { Soon } from "@/components/Soon.tsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Layers } from "lucide-react";

const Effulgence = () => {
  const handleDocsClick = () => {
    window.open("/docs/effulgence", "_blank");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      {/* Hero Section */}
      <Hero>
        <div className="w-20 h-20 bg-gradient-effulgence rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-elegant">
          <Layers className="w-10 h-10 text-effulgence-foreground" />
        </div>

        <div className="flex items-center justify-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Effulgence
          </h1>
          <div className="flex items-center ml-3">
            <Soon />
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Potencialize seus projetos Laravel com DTOs tipados, validação automática e serialização
          inteligente. O Effulgence traz toda a robustez do Constructo diretamente para o
          ecossistema Laravel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-effulgence text-effulgence-foreground transition-all hover:shadow-glow"
          >
            <Download className="w-5 h-5 mr-2" />
            Instalar via Composer
          </Button>
          <Button variant="outline" size="lg" onClick={handleDocsClick}>
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver Documentação
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Laravel 8+</Badge>
          <Badge variant="secondary">PHP 8+</Badge>
          <Badge variant="secondary">Eloquent</Badge>
          <Badge variant="secondary">RestFul</Badge>
          <Badge variant="secondary">Validation</Badge>
        </div>
      </Hero>

      <Footer />
    </div>
  );
};

export default Effulgence;
