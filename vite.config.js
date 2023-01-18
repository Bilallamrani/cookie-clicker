import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base: "/deploying-vite-project-example/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        css: resolve(__dirname, "src/index.css"),
      },
    },
  
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
