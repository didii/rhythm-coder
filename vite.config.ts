import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/unplugin-vue-i18n/vite";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
// import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    // precompiles the locale files, so the message compiler stays out of the bundle
    vueI18n({
      include: fileURLToPath(new URL("./src/locales/**", import.meta.url)),
      // no <i18n-t> components or v-t directive in use
      fullInstall: false,
    }),
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
