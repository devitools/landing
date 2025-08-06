import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/CodeBlock";
import { ArrowRight } from "lucide-react";
import { Soon } from "@/components/Soon.tsx";

interface TabContent {
  value: string;
  label: string;
  code: string;
}

interface PackageExampleProps {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradientClass: string;
  shadowClass: string;
  colorClass: string;
  tabs: TabContent[];
  reversed?: boolean;
  soon?: boolean;
}

const CodeExamplePackage = ({
  name,
  subtitle,
  description,
  features,
  icon,
  gradientClass,
  shadowClass,
  colorClass,
  tabs,
  reversed = false,
  soon = false,
}: PackageExampleProps) => {
  const descriptionContent = (
    <div className="space-y-6 lg:col-span-1">
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 ${gradientClass} rounded-xl flex items-center justify-center ${shadowClass}`}>
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className={`text-2xl font-bold ${colorClass}`}>{name}</h3>
            {soon && <Soon />}
          </div>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="relative">
        <div className={`absolute -left-1 w-1 h-full bg-gradient-to-b from-${colorClass.replace("text-", "")}/50 to-transparent rounded-full`}></div>
        <p className="text-lg text-foreground pl-6">
          {description}
        </p>
      </div>

      <div className="space-y-3 pl-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full ${colorClass.replace("text-", "bg-")}`}></div>
            <span className="text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <div className="pl-6">
        <Button
          variant="outline"
          className={`group border-${colorClass.replace("text-", "")}/30 hover:border-${colorClass.replace("text-", "")} hover:text-${colorClass.replace("text-", "")}-foreground hover:bg-${colorClass.replace("text-", "")}`}
        >
          Explorar {name}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );

  const codeContent = (
    <div className="lg:col-span-2">
      <Tabs defaultValue={tabs[0]?.value} className="w-full">
        <TabsList single={tabs.length === 1}>
          {tabs.map(tab => (
            <TabsTrigger single={tabs.length === 1} key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <CodeBlock language="php" size="md" className={shadowClass}>
              {tab.code}
            </CodeBlock>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );

  if (reversed) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="space-y-6 lg:col-start-3 lg:col-span-1">
          {descriptionContent.props.children}
        </div>
        <div className="lg:col-start-1 lg:col-span-2 lg:row-start-1">
          {codeContent.props.children}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      {descriptionContent}
      {codeContent}
    </div>
  );
};

export default CodeExamplePackage;
