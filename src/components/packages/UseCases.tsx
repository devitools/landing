import { ReactNode } from "react";
import UseCaseCard from "./UseCaseCard.tsx";

interface UseCase {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

interface UseCasesProps {
  useCases: UseCase[];
}

const UseCases = ({ useCases }: UseCasesProps) => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Casos de Uso</h2>
          <p className="text-xl text-muted-foreground">Quando usar o Constructo em seus projetos</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              benefits={useCase.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
