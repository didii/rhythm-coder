import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
// import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    // vueDevTools(),
    checker({
      typescript: { tsconfigPath: "./tsconfig.json" },
      oxlint: true,
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
