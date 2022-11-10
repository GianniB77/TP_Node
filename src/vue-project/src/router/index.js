import { createRouter, createWebHistory } from "vue-router";
import LoginRegister from "../views/LoginRegister.vue";
import Posts from "../views/Posts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoginRegister,
    },
    {
      path: "/CreatePost",
      name: "CreatePost",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CreatePost.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
    },
  ],
});

export default router;
