import CodeBlock from "@/components/CodeBlock.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface CodeTabProps {
  title: string;
  description: string;
  code: string;
  language?: string;
}

const CodeTab = ({ title, description, code, language = "php" }: CodeTabProps) => {
  return (
    <Card>
      <CardHeader className="px-3 pt-4 pb-2 lg:px-6 lg:pt-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-3 pt-2 pb-4 lg:px-6 lg:pt-3 lg:pb-6">
        <CodeBlock language={language}>{code}</CodeBlock>
      </CardContent>
    </Card>
  );
};

export default CodeTab;
