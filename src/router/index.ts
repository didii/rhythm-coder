import AboutMe from "@/About/AboutMe.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "", redirect: "/about" },
    {
      path: "/about",
      component: AboutMe,
    },
  ],
});

export default router;
