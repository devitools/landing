import { Button } from "@/components/ui/button";
import CodeExamplePackage from "@/components/CodeExamplePackage.tsx";
import { Blocks, Zap, Layers } from "lucide-react";

const CodeExamples = () => {
  const constructoTabs = [
    {
      value: "codec",
      label: "codec.php",
      code: `<?php

// Em breve... 🚀`
    },
    {
      value: "faker",
      label: "faker.php",
      code: `<?php

// Em breve... 🚀`
    }
  ];

  const serendipityTabs = [
    {
      value: "action",
      label: "Action.php",
      code: `<?php

// Em breve... 🚀
}`
    },
    {
      value: "input",
      label: "Input.php",
      code: `<?php

// Em breve... 🚀
}`
    },
    {
      value: "entity",
      label: "Entity.php",
      code: `<?php

// Em breve... 🚀
}`
    },
    {
      value: "repository",
      label: "Repository.php",
      code: `<?php

// Em breve... 🚀
}`
    }
  ];

  const effulgenceTabs = [
    {
      value: "controller",
      label: "Controller.php",
      code: `<?php

// Em breve... 🚀
}`
    }
  ];

  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Veja Como é Simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Código limpo, intuitivo e focado no que realmente importa para seu projeto.
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          <CodeExamplePackage
            name="Constructo"
            subtitle="Serialização Inteligente"
            description="Transforme dados em objetos tipados com validação automática. Classes que se serializam e se validam de forma elegante e eficiente."
            features={[
              "Serialização automática",
              "Validação integrada",
              "Type safety nativo"
            ]}
            icon={<Blocks className="w-6 h-6 text-constructo-foreground" />}
            gradientClass="bg-gradient-constructo"
            shadowClass="shadow-constructo"
            colorClass="text-constructo"
            tabs={constructoTabs}
          />

          <CodeExamplePackage
            name="Serendipity"
            subtitle="Roteamento Moderno"
            description="APIs e Workers com annotations. Roteamento automático, processamento em background e tratamento de erros sem esforço adicional."
            features={[
              "Roteamento com annotations",
              "Workers em background",
              "Tratamento automático de erros"
            ]}
            icon={<Zap className="w-6 h-6 text-serendipity-foreground" />}
            gradientClass="bg-gradient-serendipity"
            shadowClass="shadow-serendipity"
            colorClass="text-serendipity"
            tabs={serendipityTabs}
            reversed={true}
          />

          <CodeExamplePackage
            name="Effulgence"
            subtitle="Interface Radiante"
            description="Componentes UI modernos e responsivos. Uma biblioteca completa para criar interfaces elegantes e acessíveis com facilidade."
            features={[
              "Componentes reutilizáveis",
              "Sistema de layout flexível",
              "Themes customizáveis"
            ]}
            icon={<Layers className="w-6 h-6 text-effulgence-foreground" />}
            gradientClass="bg-gradient-effulgence"
            shadowClass="shadow-effulgence"
            colorClass="text-effulgence"
            tabs={effulgenceTabs}
          />
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-hero shadow-glow">
            Explorar Mais Exemplos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
