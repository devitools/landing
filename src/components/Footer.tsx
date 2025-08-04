import { Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">Devitools</span>
            </div>
            <p className="text-muted-foreground">
              Ferramentas modernas para simplificar o desenvolvimento PHP.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pacotes</h3>
            <ul className="space-y-2">
              <li><a href="#constructo" className="text-muted-foreground hover:text-primary transition-colors">Constructo</a></li>
              <li><a href="#serendipity" className="text-muted-foreground hover:text-primary transition-colors">Serendipity</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-muted-foreground hover:text-primary transition-colors">Documentação</a></li>
              <li><a href="#examples" className="text-muted-foreground hover:text-primary transition-colors">Exemplos</a></li>
              <li><a href="#guides" className="text-muted-foreground hover:text-primary transition-colors">Guias</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Comunidade</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2024 Devitools. Desenvolvido com <Heart className="w-4 h-4 inline mx-1 text-accent" /> pela comunidade.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;