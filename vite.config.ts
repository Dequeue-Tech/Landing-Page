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
    // ⚡ Aggressive minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,  // ⚡ Multiple compression passes
        unsafe: true,  // ⚡ Enable unsafe optimizations
        unsafe_methods: true,
        unsafe_proto: true,
        toplevel: true,  // ⚡ Remove dead code at module level
        arguments: true,
        arrows: true,
        evaluate: true,
        inline: 3,  // ⚡ Inline more aggressively
        pure_funcs: ["console.log", "console.info"],  // ⚡ Remove pure logs
      },
      mangle: {
        toplevel: true,  // ⚡ Mangle top-level names
        keep_fnames: false,
      },
      format: {
        comments: false,  // ⚡ Remove all comments
        beautify: false,
      },
    },
    rollupOptions: {
      output: {
        // ⚡ Manual chunk splitting for critical path
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) {
              return "framer-motion";
            }
            if (id.includes("react-router")) {
              return "react-router";
            }
            if (id.includes("@radix-ui")) {
              return "radix-ui";
            }
            // ⚡ Put recharts in separate chunk (large library)
            if (id.includes("recharts")) {
              return "recharts";
            }
            // ⚡ Heavy carousel library - lazy loaded
            if (id.includes("embla-carousel")) {
              return "embla-carousel";
            }
            // ⚡ Calendar/date libs - only used on specific pages
            if (id.includes("react-day-picker") || id.includes("date-fns")) {
              return "date-libs";
            }
            // ⚡ Particle animations library - heavy, lazy loaded
            if (id.includes("@tsparticles")) {
              return "tsparticles";
            }
            // ⚡ React Query - used mostly on lazy product pages
            if (id.includes("@tanstack/react-query")) {
              return "react-query";
            }
            // ⚡ Put react+react-dom in another chunk
            if (id.includes("react") && !id.includes("react-")) {
              return "react-core";
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
