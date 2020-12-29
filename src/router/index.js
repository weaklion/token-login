import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DashBoard from "../views/DashBoard.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component : DashBoard
  },
  {
    path: "/register",
    name: "Register",
    component : Register,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
