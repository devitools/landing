import { Badge } from "@/components/ui/badge.tsx";

export function Soon() {
  return (
    <Badge className="text-xs text-white border-transparent animate-pulse bg-red-500 tebg-red-500-foreground hover:bg-red-500/80">
      Em Breve
    </Badge>
  );
}
