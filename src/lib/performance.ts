/**
 * ⚡ Network & Performance Optimization Utilities
 * Handles prefetching, preloading, and deferred initialization
 */

/**
 * Prefetch routes that user is likely to navigate to
 * Based on user interaction patterns
 */
export const prefetchRoutes = () => {
  if (typeof window === "undefined") return;

  // Common routes to prefetch after initial load
  const routesToPrefetch = [
    "/products",
    "/pricing",
    "/contact",
    "/about",
  ];

  // Wait for initial page load before prefetching
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      routesToPrefetch.forEach((route) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.as = "fetch";
        link.href = route;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    });
  }
};

/**
 * Preload specific resources (JS chunks, fonts, images)
 * Only call for critical resources
 */
export const preloadResource = (href: string, as: string) => {
  if (typeof window === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  
  if (as === "font") {
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
  }
  
  if (as === "image") {
    link.fetchPriority = "high";
  }

  document.head.appendChild(link);
};

/**
 * Defer non-critical initialization until after paint
 * Reduces Time to Interactive
 */
export const deferInitialization = (callback: () => void) => {
  if (typeof window === "undefined") return;

  // Try requestIdleCallback first (best performance)
  if ("requestIdleCallback" in window) {
    requestIdleCallback(callback, { timeout: 2000 });
  } 
  // Fallback to setTimeout if available
  else if ("requestAnimationFrame" in window) {
    requestAnimationFrame(() => {
      setTimeout(callback, 0);
    });
  } 
  // Last resort
  else {
    setTimeout(callback, 100);
  }
};

/**
 * Detect slow connection and disable animations
 * Improves performance on slow networks (3G, 4G)
 */
export const isSlowConnection = (): boolean => {
  if (typeof window === "undefined") return false;

  const connection = 
    (navigator as any).connection ||
    (navigator as any).mozConnection ||
    (navigator as any).webkitConnection;

  if (!connection) return false;

  const effectiveType = connection.effectiveType; // 4g, 3g, 2g, slow-2g
  const downlink = connection.downlink; // Mbps (4g = ~10, 3g = ~1-2)

  return effectiveType === "4g" && downlink < 2 || 
         effectiveType === "3g" || 
         effectiveType === "2g" ||
         effectiveType === "slow-2g";
};

/**
 * Get a performance hint for initialization
 * Useful for adaptive rendering based on device capability
 */
export const getDeviceCapability = () => {
  if (typeof navigator === "undefined") {
    return { cores: 4, slowDevice: false, slowNetwork: false };
  }

  const cores = navigator.hardwareConcurrency || 4;
  const slowDevice = cores <= 2; // 2 cores or fewer = slow device
  const slowNetwork = isSlowConnection();

  return { cores, slowDevice, slowNetwork };
};

/**
 * Disable animations on slow devices
 * Call this in your animation component
 */
export const reduceMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  // Check system preference for reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  // Check if on slow device
  const { slowDevice } = getDeviceCapability();
  return slowDevice;
};

/**
 * Monitor and report Core Web Vitals
 * Install web-vitals via: npm install web-vitals
 * Then uncomment the initCoreWebVitals function below
 */

// Optional: Uncomment after installing web-vitals
// export const initCoreWebVitals = (callback?: (metric: any) => void) => {
//   if (typeof window === "undefined") return;
//   import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//     getCLS((metric) => { if (callback) callback({ ...metric, name: "CLS" }); });
//     getFID((metric) => { if (callback) callback({ ...metric, name: "FID" }); });
//     getFCP((metric) => { if (callback) callback({ ...metric, name: "FCP" }); });
//     getLCP((metric) => { if (callback) callback({ ...metric, name: "LCP" }); });
//     getTTFB((metric) => { if (callback) callback({ ...metric, name: "TTFB" }); });
//   }).catch(() => {});
// };

// Stub for when web-vitals is not installed
export const initCoreWebVitals = () => {};

/**
 * Measure and log performance marks
 * Useful for debugging performance issues
 */
export const markPerformance = (label: string) => {
  if (typeof window === "undefined" || !performance.mark) return;

  performance.mark(`${label}-start`);

  return () => {
    performance.mark(`${label}-end`);
    try {
      performance.measure(label, `${label}-start`, `${label}-end`);
      const measure = performance.getEntriesByName(label)[0];
      console.log(`⏱️ ${label}: ${measure.duration.toFixed(2)}ms`);
    } catch (e) {
      console.warn(`Failed to measure ${label}`);
    }
  };
};

/**
 * Detect if browser is in background tab
 * Stops animations/updates when tab is not visible
 */
export const useVisibilityChange = (callback: (visible: boolean) => void) => {
  if (typeof document === "undefined") return;

  const handleVisibilityChange = () => {
    callback(!document.hidden);
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  return () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
};

export default {
  prefetchRoutes,
  preloadResource,
  deferInitialization,
  isSlowConnection,
  getDeviceCapability,
  reduceMotion,
  initCoreWebVitals,
  markPerformance,
  useVisibilityChange,
};
