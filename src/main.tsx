import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { deferInitialization, prefetchRoutes } from "./lib/performance";

// Render app immediately for fast FCP
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// ⚡ Defer non-critical tasks to avoid blocking paint
deferInitialization(() => {
  // Preload images for below-fold sections
  const imagesToPreload = [
    "/src/assets/hero-retail.jpg",
    "/src/assets/problem.jpg",
    "/src/assets/solution.jpg"
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
