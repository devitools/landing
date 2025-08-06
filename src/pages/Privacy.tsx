import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Database, Eye, Lock, Mail, Shield, UserCheck } from "lucide-react";
import Hero from "@/components/Hero.tsx";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero>
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground">
              Sua privacidade é fundamental para nós. Aqui você encontra todas as informações sobre
              como tratamos seus dados.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Coleta de Informações</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Coletamos apenas as informações essenciais para fornecer nossos serviços de forma
                  eficiente e personalizada. Isso inclui dados fornecidos voluntariamente por você,
                  como nome e e-mail ao entrar em contato conosco.
                </p>
                <p>
                  Também coletamos automaticamente informações técnicas básicas, como endereço IP e
                  dados de navegação, para melhorar a performance e segurança do site.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Uso dos Dados</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>Utilizamos suas informações exclusivamente para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responder suas dúvidas e solicitações</li>
                  <li>Melhorar nossos produtos e serviços</li>
                  <li>
                    Enviar atualizações importantes sobre nossos projetos (apenas se você consentir)
                  </li>
                  <li>Garantir a segurança e funcionamento adequado do site</li>
                </ul>
                <p>
                  Nunca vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para
                  fins comerciais.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Proteção de Dados</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados
                  contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos
                  criptografia de ponta e seguimos as melhores práticas de segurança.
                </p>
                <p>
                  Nossos sistemas são regularmente auditados e atualizados para manter os mais altos
                  padrões de proteção.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <UserCheck className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Seus Direitos</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>Você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar os dados pessoais que temos sobre você</li>
                  <li>Solicitar correção de informações incorretas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Retirar seu consentimento a qualquer momento</li>
                  <li>Receber uma cópia de seus dados em formato estruturado</li>
                </ul>
                <p>
                  Para exercer qualquer um desses direitos, entre em contato conosco através dos
                  canais oficiais.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Contato</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Se você tiver dúvidas sobre esta política de privacidade ou sobre como tratamos seus
                  dados, não hesite em entrar em contato conosco. Estamos sempre disponíveis para
                  esclarecer qualquer questão.
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

export default Privacy;
