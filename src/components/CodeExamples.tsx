import { Button } from "@/components/ui/button";
import CodeExamplePackage from "@/components/CodeExamplePackage.tsx";
import { Blocks, Zap, Layers, Play, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CodeExamples = () => {
  const navigate = useNavigate();

  const constructoTabs = [
    {
      value: "codec",
      label: "codec.php",
      code: `<?php

// Em breve codec.php ... 🚀`,
    },
    {
      value: "faker",
      label: "faker.php",
      code: `<?php

// Em breve faker.php ... 🚀`,
    },
  ];

  const serendipityTabs = [
    {
      value: "action",
      label: "Action.php",
      code: `<?php

// Em breve Action.php ... 🚀
}`,
    },
    {
      value: "input",
      label: "Input.php",
      code: `<?php

// Em breve Input.php ... 🚀
}`,
    },
    {
      value: "entity",
      label: "Entity.php",
      code: `<?php

// Em breve Entity.php ... 🚀
}`,
    },
    {
      value: "repository",
      label: "Repository.php",
      code: `<?php

// Em breve Repository.php ... 🚀
}`,
    },
  ];

  const effulgenceTabs = [
    {
      value: "controller",
      label: "Controller.php",
      code: `<?php

// Em breve Controller.php ... 🚀
}`,
    },
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
            features={["Serialização automática", "Validação integrada", "Type safety nativo"]}
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
              "Tratamento automático de erros",
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
              "Themes customizáveis",
            ]}
            icon={<Layers className="w-6 h-6 text-effulgence-foreground" />}
            gradientClass="bg-gradient-effulgence"
            shadowClass="shadow-effulgence"
            colorClass="text-effulgence"
            tabs={effulgenceTabs}
          />
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-primary shadow-glow"
            onClick={() => navigate("/docs")}
          >
            <Play className="w-5 h-5 mr-2" />
            Começar Agora
          </Button>
          <Button
            size="lg"
            className="bg-gradient-hero shadow-glow"
            onClick={() => navigate("/docs/examples")}
          >
            <Code className="w-5 h-5 mr-2" />
            Explorar Mais Exemplos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
