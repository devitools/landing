import { Badge } from "@/components/ui/badge.tsx";
import { cn } from "@/lib/utils";

interface SoonProps {
  className?: string;
}

export function Soon({ className }: SoonProps = {}) {
  return (
    <Badge className={cn(
      "text-xs text-white border-transparent animate-pulse bg-red-500 hover:bg-red-500/80",
      className
    )}>
      Em Breve
    </Badge>
  );
}
