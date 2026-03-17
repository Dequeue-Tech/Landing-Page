import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";

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

const sectionFallback = (minHeight: string) => (
  <div className={`page-section ${minHeight} border-b border-border/30`} aria-hidden="true" />
);

const DeferredSection = ({
  children,
  fallback,
  rootMargin = "300px",
}: {
  children: ReactNode;
  fallback: ReactNode;
  rootMargin?: string;
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const markerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marker = markerRef.current;

    if (!marker || shouldRender) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={markerRef}>
      {shouldRender ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
};

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Stats />
    <DeferredSection fallback={sectionFallback("min-h-[32rem]")}>
      <Problem />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[34rem]")}>
      <Solution />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[34rem]")}>
      <HowItWorks />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[38rem]")}>
      <ProductsOverview />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[24rem]")}>
      <Partners />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[30rem]")}>
      <WhyChoose />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[30rem]")}>
      <Testimonials />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[42rem]")}>
      <PricingGeneralized />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[28rem]")}>
      <FAQ />
    </DeferredSection>
    <DeferredSection fallback={sectionFallback("min-h-[24rem]")}>
      <CTASection />
    </DeferredSection>
    <DeferredSection fallback={<div className="min-h-[18rem]" aria-hidden="true" />}>
      <Footer />
    </DeferredSection>
  </div>
);

export default Index;
