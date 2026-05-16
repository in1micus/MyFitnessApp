
import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Entries from "./views/Entries.vue";

const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/entries",
    component: Entries
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;