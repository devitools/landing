import { Card } from "@/components/ui/card.tsx";
import { ReactNode } from "react";
import { Soon } from "@/components/Soon.tsx";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  soon?: boolean;
}

const FeatureCard = ({ icon, title, description, soon = false }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-12 h-12 bg-gradient-constructo rounded-xl flex items-center justify-center">
          {icon}
        </div>
        {soon && <Soon />}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export default FeatureCard;
