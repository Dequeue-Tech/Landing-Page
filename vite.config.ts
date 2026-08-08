import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Minification settings
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal caching and fast load
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes("node_modules")) {
            // Keep React, React DOM, Scheduler, and React Router together
            if (
              id.includes("/node_modules/react/") ||
              id.includes("/node_modules/react-dom/") ||
              id.includes("/node_modules/scheduler/") ||
              id.includes("/node_modules/react-router/") ||
              id.includes("/node_modules/react-router-dom/")
            ) {
              return "react-vendor";
            }
            if (id.includes("framer-motion")) {
              return "framer-motion";
            }
            if (id.includes("@radix-ui")) {
              return "radix-ui";
            }
            if (id.includes("recharts")) {
              return "recharts";
            }
            if (id.includes("embla-carousel")) {
              return "embla-carousel";
            }
            if (id.includes("react-day-picker") || id.includes("date-fns")) {
              return "date-libs";
            }
            if (id.includes("@tsparticles")) {
              return "tsparticles";
            }
            if (id.includes("@tanstack/react-query")) {
              return "react-query";
            }
            return "vendors";
          }
          
          // Landing page components (above-fold) stay in main
          if (id.includes("/components/landing/Navbar") || 
              id.includes("/components/landing/Hero") ||
              id.includes("/components/landing/Stats")) {
            return null; // Include in main
          }
          
          // Below-fold landing components into separate chunks
          if (id.includes("/components/landing/")) {
            return "landing-below-fold";
          }
          
          // Each page gets its own chunk
          if (id.includes("/pages/")) {
            const match = id.match(/pages\/([^/]+)\.tsx/);
            if (match) {
              return `page-${match[1].toLowerCase()}`;
            }
          }

          // UI components shared across pages
          if (id.includes("/components/ui/")) {
            return "ui-components";
          }
        },
        // ⚡ Compress JS chunks
        chunkFileNames: "assets/[name]-[hash:8].js",
        entryFileNames: "assets/[name]-[hash:8].js",
      },
    },
    // ⚡ Optimize chunk size
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    
    // ⚡ CSS optimization
    cssCodeSplit: true,
  },
}));
