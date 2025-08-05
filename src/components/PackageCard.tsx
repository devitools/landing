import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

interface PackageCardProps {
  name: string;
  description: string;
  features: string[];
  gradient: string;
  icon: React.ReactNode;
  docsLink: string;
  githubLink: string;
  isMain?: boolean;
  showSoonBadge?: boolean;
}

const PackageCard = ({
  name,
  description,
  features,
  gradient,
  icon,
  docsLink,
  githubLink,
  isMain = false,
  showSoonBadge = false,
}: PackageCardProps) => {
  return (
    <Card
      className={`p-8 relative overflow-hidden border-2 transition-all duration-300 hover:shadow-elegant hover:scale-105 ${
        isMain
          ? "border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5"
          : "border-border hover:border-primary/30"
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`}
      ></div>

      <div className="relative">
        <div
          className={`w-14 h-14 ${gradient} rounded-2xl mb-6 flex items-center justify-center shadow-elegant`}
        >
          {icon}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          {showSoonBadge && (
            <Badge variant="secondary" className="text-xs">
              Soon
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground mb-6 text-lg">{description}</p>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button className={`${gradient} shadow-elegant flex-1`}>
            Documentação
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
