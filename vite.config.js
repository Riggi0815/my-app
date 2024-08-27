import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "my-app",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
