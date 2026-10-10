import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        plans: resolve(import.meta.dirname, "planos.html"),
        english: resolve(import.meta.dirname, "en/index.html"),
      },
    },
  },
});
