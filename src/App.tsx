import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Constructo from "./pages/Constructo";
import Serendipity from "./pages/Serendipity";
import Effulgence from "./pages/Effulgence";
import Docs from "./pages/Docs";
import DocsIntroducao from "./pages/docs/DocsIntroducao";
import DocsGuias from "./pages/docs/DocsGuias";
import DocsDicasTruques from "./pages/docs/DocsDicasTruques";
import DocsEcossistema from "./pages/docs/DocsEcossistema";
import DocsSobre from "./pages/docs/DocsSobre";
import DocsConstructo from "./pages/DocsConstructo";
import DocsSerendipity from "./pages/DocsSerendipity";
import DocsEffulgence from "./pages/DocsEffulgence";
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
              <Route index element={<Navigate to="/docs/introducao" replace />} />
              <Route path="introducao" element={<DocsIntroducao />} />
              <Route path="guias" element={<DocsGuias />} />
              <Route path="dicas-truques" element={<DocsDicasTruques />} />
              <Route path="ecossistema" element={<DocsEcossistema />} />
              <Route path="sobre" element={<DocsSobre />} />
            </Route>
            <Route path="/docs/constructo" element={<DocsConstructo />} />
            <Route path="/docs/serendipity" element={<DocsSerendipity />} />
            <Route path="/docs/effulgence" element={<DocsEffulgence />} />
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
