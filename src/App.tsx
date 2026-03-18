import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";

// Eager load home page (critical)
import Index from "./pages/Index";

// Lazy load all other pages (non-critical)
const About = lazy(() => import("./pages/About"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const GoPage = lazy(() => import("./pages/GoPage"));
const BitePage = lazy(() => import("./pages/BitePage"));
const SwiftPage = lazy(() => import("./pages/SwiftPage"));
const HermitPage = lazy(() => import("./pages/HermitPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
    },
  },
});

// Loading fallback (minimal, doesn't block interaction)
const PageLoader = () => <div className="min-h-screen" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Eager load home page */}
            <Route path="/" element={<Index />} />
            
            {/* Lazy load all other pages */}
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              } 
            />
            <Route 
              path="/products" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <ProductsPage />
                </Suspense>
              } 
            />
            <Route 
              path="/products/go" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <GoPage />
                </Suspense>
              } 
            />
            <Route 
              path="/products/bite" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <BitePage />
                </Suspense>
              } 
            />
            <Route 
              path="/products/swift" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <SwiftPage />
                </Suspense>
              } 
            />
            <Route 
              path="/products/hermit" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <HermitPage />
                </Suspense>
              } 
            />
            <Route 
              path="/pricing" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <PricingPage />
                </Suspense>
              } 
            />
            <Route 
              path="/blog" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <BlogPage />
                </Suspense>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <ContactPage />
                </Suspense>
              } 
            />
            <Route 
              path="/terms" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <TermsPage />
                </Suspense>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <PrivacyPage />
                </Suspense>
              } 
            />
            <Route 
              path="*" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <NotFound />
                </Suspense>
              } 
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
