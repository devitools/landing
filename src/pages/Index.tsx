import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-background)' }}>
      <Header />
      <Hero />
      <Packages />
      <CodeExample />
      <Footer />
    </div>
  );
};

export default Index;
