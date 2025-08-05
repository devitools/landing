import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Radar, Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Radar className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              404 - Página não encontrada
            </h1>
            <p className="text-xl text-muted-foreground">
              Ops! A página que você está procurando não existe ou foi movida para outro local.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center mb-6 justify-center">
                <Search className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">O que aconteceu?</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center">
                <p>
                  A página que você tentou acessar pode ter sido removida, renomeada ou está
                  temporariamente indisponível. Não se preocupe, isso acontece às vezes durante
                  atualizações do site.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6 justify-center">
                <Home className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Como podemos ajudar?</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center mb-8">
                  Aqui estão algumas opções para você continuar navegando:
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Voltar ao Início</h3>
                    <p className="text-muted-foreground mb-4">
                      Retorne à página inicial e explore nossos produtos e serviços.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Página Inicial
                    </Link>
                  </div>

                  <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <ArrowLeft className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground mb-4">
                      Retorne à página anterior de onde você veio.
                    </p>
                    <button
                      onClick={() => window.history.back()}
                      className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Página Anterior
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-sm mt-8 pt-8 border-t border-border">
                  Se você acredita que chegou aqui por um erro em nosso site, entre em contato
                  conosco. Estamos sempre trabalhando para melhorar sua experiência.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
