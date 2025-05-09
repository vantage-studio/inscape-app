import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        manualChunks: undefined,
      },
    },
    sourcemap: true,
  },
  publicDir: "public",
  appType: "mpa", // Use Multi-Page Application mode
});
