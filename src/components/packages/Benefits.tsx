import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import Hero from "@/components/Hero.tsx";
import BenefitItem from "./BenefitItem.tsx";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
  onDocsClick: () => void;
}

const Benefits = ({ benefits, onDocsClick }: BenefitsProps) => {
  return (
    <Hero>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Por que Constructo?</h2>
        <p className="text-xl text-muted-foreground">
          Vantagens que fazem a diferença no seu desenvolvimento
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} title={benefit.title} description={benefit.description} />
        ))}
      </div>

      <div className="flex items-center justify-center space-x-4 pt-10">
        <Button
          onClick={onDocsClick}
          size="lg"
          className="bg-gradient-constructo text-constructo-foreground transition-all hover:shadow-glow gap-2"
        >
          <BookOpen className="w-4 h-4" />
          Primeiros Passos
        </Button>
      </div>
    </Hero>
  );
};

export default Benefits;
