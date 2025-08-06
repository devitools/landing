import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Constructo from "./pages/Constructo";
import Serendipity from "./pages/Serendipity";
import Effulgence from "./pages/Effulgence";
import Docs from "./pages/Docs";
import DocsConstructo from "./pages/DocsConstructo";
import DocsSerendipity from "./pages/DocsSerendipity";
import DocsEffulgence from "./pages/DocsEffulgence";
import DocsIntroduction from "./pages/docs/DocsIntroduction";
import DocsGuides from "./pages/docs/DocsGuides";
import DocsExamples from "./pages/docs/DocsExamples";
import DocsTips from "./pages/docs/DocsTips";
import DocsReference from "./pages/docs/DocsReference";
import DocsAbout from "./pages/docs/DocsAbout";
import ReferenceIndex from "./pages/docs/reference/Index";
import ReferenceConstructo from "./pages/docs/reference/Constructo";
import ReferenceSerendipity from "./pages/docs/reference/Serendipity";
import ReferenceEffulgence from "./pages/docs/reference/Effulgence";
import ReferenceTevun from "./pages/docs/reference/Tevun";
import ReferenceHttp from "./pages/docs/reference/Http";
import ReferenceDocekrize from "./pages/docs/reference/Docekrize";
import ReferenceDockerfile from "./pages/docs/reference/Dockerfile";
import ReferenceArceau from "./pages/docs/reference/Arceau";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
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
              <Route path="introduction" element={<DocsIntroduction />} />
              <Route path="guides" element={<DocsGuides />} />
              <Route path="examples" element={<DocsExamples />} />
              <Route path="tips" element={<DocsTips />} />
              <Route path="reference" element={<DocsReference />}>
                <Route index element={<ReferenceIndex />} />
                <Route path="constructo" element={<ReferenceConstructo />} />
                <Route path="serendipity" element={<ReferenceSerendipity />} />
                <Route path="effulgence" element={<ReferenceEffulgence />} />
                <Route path="tevun" element={<ReferenceTevun />} />
                <Route path="http" element={<ReferenceHttp />} />
                <Route path="docekrize" element={<ReferenceDocekrize />} />
                <Route path="dockerfile" element={<ReferenceDockerfile />} />
                <Route path="arceau" element={<ReferenceArceau />} />
              </Route>
              <Route path="about" element={<DocsAbout />} />
              <Route index element={<DocsIntroduction />} />
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
