import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero.tsx";
import Benefits from "@/components/packages/Benefits.tsx";
import CodeExamples from "@/components/packages/CodeExamples.tsx";
import Features from "@/components/packages/Features.tsx";
import Installation from "@/components/packages/Installation.tsx";
import UseCases from "@/components/packages/UseCases.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { scrollTo } from "@/lib/utils.ts";
import {
  Download,
  Github,
  Zap,
} from "lucide-react";

const Serendipity = () => {
  const handleInstallClick = () => {
    scrollTo("installation");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/devitools/serendipity", "_blank");
  };

  const handlePackagistClick = () => {
    window.open("https://packagist.org/packages/devitools/serendipity", "_blank");
  };

  const handleDocsClick = () => {
    window.open("/docs/serendipity", "_blank");
  };

  // Arrays vazios conforme solicitado
  const features: any[] = [];

  const codeExamples: any[] = [];

  const useCases: any[] = [];

  const benefits: any[] = [];

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-background)" }}>
      <Header />

      {/* Hero Section */}
      <Hero>
        <div className="w-20 h-20 bg-gradient-serendipity rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-serendipity">
          <Zap className="w-10 h-10 text-serendipity-foreground" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Serendipity
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Framework PHP de alta performance para desenvolvimento de APIs modernas com Swoole.
          Descubra a serendipidade do desenvolvimento assíncrono e aplicações real-time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-serendipity text-serendipity-foreground transition-all hover:shadow-glow"
            onClick={handleInstallClick}
          >
            <Download className="w-5 h-5 mr-2" />
            Instalar via Composer
          </Button>
          <Button variant="outline" size="lg" onClick={handleGithubClick}>
            <Github className="w-5 h-5 mr-2" />
            Ver no GitHub
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">PHP 8+</Badge>
          <Badge variant="secondary">Composer</Badge>
          <Badge variant="secondary">Swoole</Badge>
          <Badge variant="secondary">Hyperf</Badge>
        </div>
      </Hero>

      {/* Installation */}
      <Installation onPackagistClick={handlePackagistClick} onDocsClick={handleDocsClick} />

      {/* Features */}
      <Features features={features} />

      {/* Code Examples */}
      <CodeExamples examples={codeExamples} />

      {/* Use Cases */}
      <UseCases useCases={useCases} />

      {/* Benefits */}
      <Benefits benefits={benefits} onDocsClick={handleDocsClick} />

      <Footer />
    </div>
  );
};

export default Serendipity;