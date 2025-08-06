import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, Calendar, Code, FileText, Scale, Users } from "lucide-react";
import Hero from "@/components/Hero.tsx";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero>
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Termos de Uso
            </h1>
            <p className="text-xl text-muted-foreground">
              Estes termos estabelecem as regras para utilização dos nossos serviços e produtos de código aberto.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center mb-6">
                <Scale className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Aceitação dos Termos</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Ao acessar e utilizar os produtos e serviços da Devitools, você concorda automaticamente com estes termos de uso.
                  Se você não concordar com algum ponto, recomendamos que não utilize nossos serviços.
                </p>
                <p>
                  Estes termos podem ser atualizados periodicamente, e é sua responsabilidade verificar as mudanças regularmente.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Code className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Licença de Software</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Todos os nossos produtos de software são disponibilizados sob licenças de código aberto.
                  Cada projeto especifica sua licença individual, que deve ser respeitada integralmente.
                </p>
                <p>
                  Você é livre para usar, modificar e distribuir nossos produtos, desde que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respeite os termos da licença específica de cada projeto</li>
                  <li>Mantenha os avisos de copyright e licença</li>
                  <li>Não utilize nosso nome ou marca sem autorização prévia</li>
                  <li>Assuma responsabilidade pelo uso do software</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Uso Responsável</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Ao utilizar nossos serviços, você se compromete a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Não usar nossos produtos para atividades ilegais ou prejudiciais</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                  <li>Não sobrecarregar intencionalmente nossos sistemas</li>
                  <li>Contribuir de forma construtiva para a comunidade</li>
                  <li>Relatar problemas de segurança de forma responsável</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Limitações e Responsabilidades</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Nossos produtos são fornecidos "como estão", sem garantias expressas ou implícitas.
                  Embora nos esforcemos para manter alta qualidade, não podemos garantir que o software seja livre de bugs ou adequado para todos os propósitos.
                </p>
                <p>
                  A Devitools não se responsabiliza por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Danos diretos ou indiretos decorrentes do uso do software</li>
                  <li>Perda de dados ou interrupção de negócios</li>
                  <li>Incompatibilidades com outros sistemas</li>
                  <li>Uso inadequado ou modificações não autorizadas</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Contribuições da Comunidade</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Valorizamos e encorajamos contribuições da comunidade. Ao contribuir com código, documentação ou feedback:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Você concede à Devitools o direito de usar sua contribuição</li>
                  <li>Garante que possui os direitos necessários sobre o conteúdo enviado</li>
                  <li>Concorda que sua contribuição será licenciada sob a mesma licença do projeto</li>
                  <li>Aceita seguir nosso código de conduta da comunidade</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Modificações e Vigência</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Reservamos o direito de modificar estes termos a qualquer momento. Mudanças significativas serão comunicadas
                  através dos nossos canais oficiais com antecedência adequada.
                </p>
                <p>
                  Estes termos permanecem em vigor enquanto você utilizar nossos serviços.
                  Você pode interromper o uso a qualquer momento, cessando assim sua sujeição a estes termos.
                </p>
                <p className="text-sm mt-8 pt-8 border-t border-border">
                  <strong>Última atualização:</strong> Janeiro de 2025
                </p>
              </div>
            </section>
          </div>
        </div>
      </Hero>

      <Footer />
    </div>
  );
};

export default Terms;
