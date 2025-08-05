import { Code, Mail, Heart, GitPullRequestCreateArrow } from "lucide-react";
import { Link } from "react-router-dom";
import deviLogo from "@/assets/devitools-logo.png";

const Footer = () => {
  return (
    <footer
      className="border-t border-border py-12 px-6"
      style={{ backgroundColor: "hsl(var(--footer-bg))" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src={deviLogo}
                  alt="Devitools Logo"
                  className="h-10 object-contain logo-adaptive"
                />
              </Link>
            </div>
            <p className="text-muted-foreground">
              Ferramentas modernas para o dev moderno
            </p>
          </div>

          <div>
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
                  Effulgence
                </Link>
              </li>
            </ul>
          </div>

          <div>
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
                <a
                  href="#examples"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Exemplos
                </a>
              </li>
              <li>
                <a
                  href="#guides"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Guias
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Comunidade</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
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
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
