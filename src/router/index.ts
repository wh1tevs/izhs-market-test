import { createRouter, createWebHistory } from "@ionic/vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/menu",
    },
    ...["home", "catalog", "landscape", "construction"].map((path) => ({
      path: `/${path}`,
      component: () => import("@/views/EmptyView.vue"),
      props: { title: path },
    })),
    {
      path: "/menu",
      name: "Menu",
      component: () => import("@/views/MenuView.vue"),
    },
  ],
});

export default router;
