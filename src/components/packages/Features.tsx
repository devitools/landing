import { ReactNode } from "react";
import FeatureCard from "./FeatureCard.tsx";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  soon?: boolean;
}

interface FeaturesProps {
  features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recursos Principais</h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para construir aplicações PHP modernas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              soon={feature.soon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
