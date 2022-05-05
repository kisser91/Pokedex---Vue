import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Pokemon/:id", name: "Detail", component: Detail },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
