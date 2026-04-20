import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/site/Layout";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import Servicos from "./pages/Servicos.tsx";
import Diferenciais from "./pages/Diferenciais.tsx";
import Cases from "./pages/Cases.tsx";
import Regioes from "./pages/Regioes.tsx";
import Contato from "./pages/Contato.tsx";
import Osasco from "./pages/regioes/Osasco.tsx";
import Barueri from "./pages/regioes/Barueri.tsx";
import Alphaville from "./pages/regioes/Alphaville.tsx";
import SantanaParnaiba from "./pages/regioes/SantanaParnaiba.tsx";
import SaoPaulo from "./pages/regioes/SaoPaulo.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/diferenciais" element={<Diferenciais />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/regioes" element={<Regioes />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sindico-profissional-osasco" element={<Osasco />} />
              <Route path="/sindico-profissional-barueri" element={<Barueri />} />
              <Route path="/sindico-profissional-alphaville" element={<Alphaville />} />
              <Route path="/sindico-profissional-santana-de-parnaiba" element={<SantanaParnaiba />} />
              <Route path="/sindico-profissional-sao-paulo" element={<SaoPaulo />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
