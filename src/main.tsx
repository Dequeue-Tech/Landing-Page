import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { deferInitialization, prefetchRoutes } from "./lib/performance";
import heroRetailImage from "./assets/hero-retail.jpg";
import productGoImage from "./assets/product-go.jpg";
import productBiteImage from "./assets/product-bite.jpg";

// Render app immediately for fast FCP
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// ⚡ Defer non-critical tasks to avoid blocking paint
deferInitialization(() => {
  // Preload only valid, build-resolved assets.
  const imagesToPreload = [
    heroRetailImage,
    productGoImage,
    productBiteImage,
  ];
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.loading = "lazy";
    img.src = src;
  });
  
  // Prefetch other routes (users may navigate to these)
  prefetchRoutes();
  
  // Optional: Track Core Web Vitals in production
  // Install via: npm install web-vitals
  // Then uncomment and enable initCoreWebVitals in lib/performance.ts
  if (import.meta.env.PROD && typeof window !== "undefined" && "gtag" in window) {
    // Metrics tracking would go here if web-vitals is installed
  }
});
