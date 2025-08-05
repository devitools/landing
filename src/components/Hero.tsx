import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="container mx-auto relative">
        {children}
      </div>
    </section>
  );
};

export default Hero;