/**
 * ⚡ Image Optimization Utility
 * Handles lazy loading, srcset generation, and WebP conversion
 */

interface ImageConfig {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchpriority?: "high" | "low" | "auto";
}

/**
 * Generate responsive image srcset with WebP support
 * Usage: 
 * <img
 *   src={imageSrc}
 *   srcSet={generateSrcSet("/image.jpg")}
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 */
export const generateSrcSet = (basePath: string): string => {
  // Note: In production, convert images to WebP using tools like:
  // - ImageOptim, TinyPNG, Cloudinary, or ImageKit
  const sizes = ["320w", "640w", "960w", "1280w", "1920w"];
  return sizes
    .map((size) => {
      const sizeNum = parseInt(size);
      return `${basePath}?w=${sizeNum} ${size}`;
    })
    .join(", ");
};

/**
 * Get optimized image configuration for lazy loading
 */
export const getOptimizedImageProps = (config: ImageConfig) => {
  const isAboveFold = config.fetchpriority === "high";
  
  return {
    src: config.src,
    alt: config.alt,
    className: config.className,
    // Load above-the-fold images eagerly, others lazily
    loading: isAboveFold ? "eager" : ("lazy" as const),
    decoding: config.decoding || "async",
    fetchpriority: config.fetchpriority || "auto",
  };
};

/**
 * Preload critical images to improve LCP
 * Call this in useEffect hook or during route transition
 */
export const preloadImage = (src: string): void => {
  if (typeof window === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  link.fetchPriority = "high";
  document.head.appendChild(link);
};

/**
 * Lazy load below-fold images with Intersection Observer
 */
export const observeImageLazyLoad = (selector = "img[loading='lazy']"): void => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        
        // Load the actual image
        if (image.dataset.src) {
          image.src = image.dataset.src;
        }
        if (image.dataset.srcset) {
          image.srcset = image.dataset.srcset;
        }
        
        // Remove lazy loading to prevent double loading
        image.loading = "eager";
        observer.unobserve(image);
      }
    });
  }, {
    // Start loading 50px before image enters viewport
    rootMargin: "50px",
  });

  // Observe all lazy images
  document.querySelectorAll(selector).forEach((img) => {
    imageObserver.observe(img);
  });
};

/**
 * Convert image URL to WebP with fallback
 * Requires backend CDN support (Cloudinary, Imgix, etc.)
 */
export const getWebPImage = (jpgSrc: string): string => {
  // If you're using a CDN like Cloudinary:
  // return jpgSrc.replace("/upload/", "/upload/f_webp/");
  
  // For local images, use a build-time conversion tool
  return jpgSrc.replace(/\.(jpg|jpeg|png)$/, ".webp");
};

/**
 * Get image with automatic format based on browser support
 */
export const getResponsiveImage = (basePath: string, filename: string) => {
  const ext = filename.split(".").pop();
  
  return {
    webp: `${basePath}/${filename.replace(ext!, "webp")}`,
    jpg: `${basePath}/${filename}`,
  };
};

export default {
  generateSrcSet,
  getOptimizedImageProps,
  preloadImage,
  observeImageLazyLoad,
  getWebPImage,
  getResponsiveImage,
};
