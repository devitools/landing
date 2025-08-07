import { BookOpen, Package } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import CodeBlock from "@/components/CodeBlock.tsx";

interface InstallationProps {
  onPackagistClick: () => void;
  onDocsClick: () => void;
}

const Installation = ({ onPackagistClick, onDocsClick }: InstallationProps) => {
  return (
    <section id="installation" className="py-16 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Instalação Rápida</h2>
          <p className="text-muted-foreground">Comece a usar o Constructo em segundos</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <CodeBlock language="bash" size="md">
            composer require devitools/constructo
          </CodeBlock>

          <div className="text-center flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={onPackagistClick} className="gap-2">
              <Package className="w-4 h-4" />
              Ver no Packagist
            </Button>
            <Button
              onClick={onDocsClick}
              className="bg-gradient-constructo text-constructo-foreground transition-all hover:shadow-glow gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Primeiros Passos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
