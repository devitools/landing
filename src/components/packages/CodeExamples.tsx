import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import CodeTab from "./CodeTab.tsx";

interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
}

interface CodeExamplesProps {
  examples: CodeExample[];
}

const CodeExamples = ({ examples }: CodeExamplesProps) => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Exemplos Práticos</h2>
          <p className="text-muted-foreground">
            Veja como usar o Constructo em diferentes cenários
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue={examples[0]?.id} className="w-full">
            <TabsList>
              {examples.map(example => (
                <TabsTrigger key={example.id} value={example.id}>
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {examples.map(example => (
              <TabsContent key={example.id} value={example.id}>
                <CodeTab
                  title={example.title}
                  description={example.description}
                  code={example.code}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
