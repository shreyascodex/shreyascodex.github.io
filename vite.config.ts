import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/portfolio/",

  plugins: [
    react(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    dedupe: ["react", "react-dom"]
  },

  build: {
    outDir: "dist",
    emptyOutDir: true
  },

  server: {
    host: "0.0.0.0",
    port: 5173
  },

  preview: {
    host: "0.0.0.0",
    port: 4173
  }
});