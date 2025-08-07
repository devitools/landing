import { CheckCircle } from "lucide-react";

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">
        <CheckCircle className="w-6 h-6 text-success mt-1" />
      </div>
      <div className="text-left">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
