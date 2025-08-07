import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  children: string;
  language?: string;
  size?: "sm" | "md" | "lg";
  showCopy?: boolean;
  className?: string;
}

const CodeBlock = ({
  children,
  language = "php",
  size = "md",
  showCopy = true,
  className,
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

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const style = theme === "dark" ? oneDark : oneLight;

  return (
    <Card
      className={cn(
        "overflow-hidden relative bg-background brightness-100 dark:brightness-125",
        className,
      )}
    >
      {showCopy && (
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className="absolute top-3 right-3 z-10 hover:bg-muted/50"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
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
          style: { background: "transparent" },
        }}
        codeTagProps={{
          style: { background: "transparent" },
        }}
        className={cn(
          "!bg-transparent overflow-x-auto p-6 [&_span]:!bg-transparent",
          sizeClasses[size],
          showCopy && "pr-16",
        )}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </Card>
  );
};

export default CodeBlock;
