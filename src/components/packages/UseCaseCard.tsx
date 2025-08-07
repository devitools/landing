import { Card } from "@/components/ui/card.tsx";
import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const UseCaseCard = ({ icon, title, description, benefits }: UseCaseCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-constructo rounded-2xl mb-6 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center text-sm">
            <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UseCaseCard;
