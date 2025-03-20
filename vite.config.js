import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct paths in both dev & production
  build: {
    assetsDir: "assets", // Keeps images inside /assets/
  },
});
