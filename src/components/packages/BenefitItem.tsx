import { CheckCircle } from "lucide-react";

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
