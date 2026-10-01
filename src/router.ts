import AboutMe from "@/About/AboutMe.vue";
import { createRouter, type RouterHistory } from "vue-router";

// history is passed in: web history in the browser, memory history when prerendering in Node
export const createAppRouter = (history: RouterHistory) =>
  createRouter({
    history,
    routes: [
      { path: "/", component: AboutMe },
      {
        path: "/:pathMatch(.*)*",
        redirect: "/",
      },
    ],
  });
