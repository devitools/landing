import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import CodeBlock from "@/components/CodeBlock.tsx";
import { ReactNode } from "react";

interface CodeTabProps {
  title: string;
  description: string;
  code: string;
  language?: string;
}

const CodeTab = ({ title, description, code, language = "php" }: CodeTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CodeBlock language={language}>{code}</CodeBlock>
      </CardContent>
    </Card>
  );
};

export default CodeTab;
