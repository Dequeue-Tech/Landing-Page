import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";

// Lazy load below-the-fold components
const Problem = lazy(() => import("@/components/landing/Problem"));
const Solution = lazy(() => import("@/components/landing/Solution"));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks"));
const ProductsOverview = lazy(() => import("@/components/landing/ProductsOverview"));
const Partners = lazy(() => import("@/components/landing/Partners"));
const WhyChoose = lazy(() => import("@/components/landing/WhyChoose"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const PricingGeneralized = lazy(() => import("@/components/ui/pricing-generalized"));
const FAQ = lazy(() => import("@/components/landing/FAQ"));
const CTASection = lazy(() => import("@/components/landing/CTASection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

// Placeholder component (minimal, doesn't affect FCP)
const SectionLoader = () => <div className="h-96 bg-background" />;

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* Critical above-the-fold: render immediately */}
    <Navbar />
    <Hero />
    <Stats />

    {/* Below-the-fold: lazy load to reduce initial bundle */}
    <Suspense fallback={<SectionLoader />}>
      <Problem />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <Solution />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <HowItWorks />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <ProductsOverview />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <Partners />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <WhyChoose />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <PricingGeneralized />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <FAQ />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <CTASection />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </div>
);

export default Index;
