import { createApp, createSSRApp } from "vue";
import { createWebHistory } from "vue-router";
import App from "./App.vue";
import { createAppRouter } from "./router.ts";

// the production build prerenders the page into #app, so hydrate it; the dev server serves an empty #app
const root = document.getElementById("app")!;
const app = root.hasChildNodes() ? createSSRApp(App) : createApp(App);
const router = createAppRouter(createWebHistory(import.meta.env.BASE_URL));

app.use(router);
router.isReady().then(() => app.mount(root));
