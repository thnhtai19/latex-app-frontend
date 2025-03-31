import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
    hmr: {
      clientPort: 443,
    },
    allowedHosts: ["all"],
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: ["all"],
  },
});