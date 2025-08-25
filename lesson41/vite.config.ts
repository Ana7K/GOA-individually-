import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          // React ecosystem - keep together to avoid dependency issues
          "react-vendor": ["react", "react-dom", "react/jsx-runtime"],
          // Charts
          "recharts-vendor": ["recharts"],
          // UI Components
          "radix-vendor": [
            "@radix-ui/react-slot",
          ],
          // Router
          "router-vendor": ["react-router"],
          // Utilities
          "utils-vendor": [
            "clsx",
            "class-variance-authority",
            "tailwind-merge",
          ],
          // Icons
          "icons-vendor": ["lucide-react"],
        },
      },
    },
    target: "esnext",
    minify: "esbuild",
  },
})