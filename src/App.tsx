import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Constructo from "./pages/Constructo";
import Serendipity from "./pages/Serendipity";
import Effulgence from "./pages/Effulgence";
import Docs from "./pages/Docs";
import DocsIntroduction from "./pages/Docs/Introduction.tsx";
import DocsGuides from "./pages/Docs/Guides.tsx";
import DocsExamples from "./pages/Docs/Examples.tsx";
import DocsReference from "./pages/Docs/Reference.tsx";
import DocsAbout from "./pages/Docs/About.tsx";
import DocsReferenceIndex from "@/pages/Docs/Reference/Index";
import DocsReferenceConstructo from "@/pages/Docs/Reference/Constructo";
import DocsReferenceSerendipity from "@/pages/Docs/Reference/Serendipity";
import DocsReferenceEffulgence from "@/pages/Docs/Reference/Effulgence";
import DocsReferenceTevun from "@/pages/Docs/Reference/Tevun";
import DocsReferenceHttp from "@/pages/Docs/Reference/Http";
import DocsReferenceDocekrize from "@/pages/Docs/Reference/Docekrize";
import DocsReferenceDockerfile from "@/pages/Docs/Reference/Dockerfile";
import DocsReferenceArceau from "@/pages/Docs/Reference/Arceau";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/constructo" element={<Constructo />} />
            <Route path="/serendipity" element={<Serendipity />} />
            <Route path="/effulgence" element={<Effulgence />} />
            <Route path="/docs" element={<Docs />}>
              <Route index element={<DocsIntroduction />} />
              <Route path="introduction" element={<DocsIntroduction />} />
              <Route path="guides" element={<DocsGuides />} />
              <Route path="examples" element={<DocsExamples />} />
              <Route path="reference" element={<DocsReference />}>
                <Route index element={<DocsReferenceIndex />} />
                <Route path="constructo" element={<DocsReferenceConstructo />} />
                <Route path="serendipity" element={<DocsReferenceSerendipity />} />
                <Route path="effulgence" element={<DocsReferenceEffulgence />} />
                <Route path="tevun" element={<DocsReferenceTevun />} />
                <Route path="http" element={<DocsReferenceHttp />} />
                <Route path="docekrize" element={<DocsReferenceDocekrize />} />
                <Route path="dockerfile" element={<DocsReferenceDockerfile />} />
                <Route path="arceau" element={<DocsReferenceArceau />} />
              </Route>
              <Route path="about" element={<DocsAbout />} />
            </Route>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
