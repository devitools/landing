import { Code, Mail, Heart, GitPullRequestCreateArrow } from "lucide-react";
import { Link } from "react-router-dom";
import deviLogo from "@/assets/devitools-logo.png";
import { Soon } from "@/components/Soon.tsx";

const Footer = () => {
  return (
    <footer
      className="border-t border-border py-12 relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--footer-bg))" }}
    >
      {/* Formas geométricas animadas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculos flutuantes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-br from-accent/15 to-primary/5 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-success/10 to-primary/5 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Triângulos */}
        <div
          className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-primary/10 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-10 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-accent/15 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Hexágonos */}
        <div
          className="absolute top-1/2 left-1/6 w-6 h-6 bg-constructo/10 transform rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-10 right-1/4 w-4 h-4 bg-serendipity/10 transform rotate-45 animate-spin"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        ></div>

        {/* Linhas decorativas */}
        <div className="absolute top-16 left-1/2 w-20 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div
          className="absolute bottom-16 right-1/2 w-16 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Losango */}
        <div
          className="absolute top-24 right-1/2 w-3 h-3 bg-effulgence/15 transform rotate-45 animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          <div className="px-2 min-w-[130px]">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src={deviLogo}
                  alt="Devitools Logo"
                  className="h-10 object-contain logo-adaptive"
                />
              </Link>
            </div>
            <p className="text-muted-foreground">Ferramentas modernas para o dev moderno</p>
          </div>

          <div className="px-2 min-w-[130px]">
            <h3 className="font-semibold text-foreground mb-4">Pacotes</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/constructo"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Constructo
                </Link>
              </li>
              <li>
                <Link
                  to="/serendipity"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serendipity
                </Link>
              </li>
              <li>
                <Link
                  to="/effulgence"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Effulgence <Soon className="text-2xs p-0 px-[4px] text-white dark:text-background dark:bg-red-300" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="px-2 min-w-[130px]">
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/docs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentação
                </Link>
              </li>
              <li>
                <Link
                  to="/#examples"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Exemplos
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/guides"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Guias
                </Link>
              </li>
            </ul>
          </div>

          <div className="px-2 min-w-[130px]">
            <h3 className="font-semibold text-foreground mb-4">Comunidade</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs py-2">
            © {new Date().getFullYear()} Devitools. Desenvolvido com{" "}
            <Heart className="w-4 h-4 inline mx-1 text-accent" /> pela comunidade.
          </p>

          {/* Link para o repositório */}
          <div className="text-center py-2">
            <a
              href="https://github.com/devitools/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <GitPullRequestCreateArrow className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs">para sempre gratuito</span>
            </a>
          </div>
          <div className="flex space-x-6 md:mt-0 py-2">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
