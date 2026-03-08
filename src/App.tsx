import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import GoPage from "./pages/GoPage";
import BitePage from "./pages/BitePage";
import SwiftPage from "./pages/SwiftPage";
import HermitPage from "./pages/HermitPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/go" element={<GoPage />} />
          <Route path="/products/bite" element={<BitePage />} />
          <Route path="/products/swift" element={<SwiftPage />} />
          <Route path="/products/hermit" element={<HermitPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
