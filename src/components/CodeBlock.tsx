import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
  showCopy?: boolean;
  showRun?: boolean;
  className?: string;
  gradient?: "primary" | "accent" | "success" | "warning";
}

const CodeBlock = ({
  children,
  language = "php",
  title,
  size = "md",
  showCopy = true,
  showRun = false,
  className,
  gradient = "primary"
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children.trim());
      setCopied(true);
      toast({
        description: "Código copiado para a área de transferência!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        description: "Erro ao copiar código",
        variant: "destructive",
      });
    }
  };

  const handleRun = () => {
    toast({
      description: "Funcionalidade de execução em desenvolvimento",
    });
  };

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const gradientClasses = {
    primary: "bg-gradient-primary",
    accent: "bg-gradient-accent", 
    success: "bg-gradient-success",
    warning: "bg-gradient-warning"
  };

  const style = theme === "dark" ? oneDark : oneLight;

  return (
    <Card className={cn("overflow-hidden", className)}>
      {title && (
        <div className={cn("p-4", gradientClasses[gradient])}>
          <div className="flex items-center justify-between">
            <h3 className={cn(
              "font-semibold",
              gradient === "primary" ? "text-primary-foreground" :
              gradient === "accent" ? "text-accent-foreground" :
              gradient === "success" ? "text-success-foreground" :
              "text-warning-foreground"
            )}>
              {title}
            </h3>
            <div className="flex space-x-2">
              {showCopy && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className={cn(
                    "hover:bg-white/10",
                    gradient === "primary" ? "text-primary-foreground" :
                    gradient === "accent" ? "text-accent-foreground" :
                    gradient === "success" ? "text-success-foreground" :
                    "text-warning-foreground"
                  )}
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              )}
              {showRun && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleRun}
                  className={cn(
                    "hover:bg-white/10",
                    gradient === "primary" ? "text-primary-foreground" :
                    gradient === "accent" ? "text-accent-foreground" :
                    gradient === "success" ? "text-success-foreground" :
                    "text-warning-foreground"
                  )}
                >
                  <Play className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="relative">
        {!title && showCopy && (
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="absolute top-3 right-3 z-10 hover:bg-muted/50"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        )}
        
        <SyntaxHighlighter
          language={language}
          style={style}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            background: "transparent",
            fontSize: undefined,
          }}
          wrapLines={true}
          lineProps={{
            style: { background: "transparent" }
          }}
          codeTagProps={{
            style: { background: "transparent" }
          }}
          className={cn(
            "!bg-transparent overflow-x-auto p-6 [&_span]:!bg-transparent",
            sizeClasses[size],
            !title && showCopy && "pr-16"
          )}
        >
          {children.trim()}
        </SyntaxHighlighter>
      </div>
    </Card>
  );
};

export default CodeBlock;