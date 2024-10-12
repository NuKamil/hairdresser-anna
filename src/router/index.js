import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BookAppointment from "@/views/BookAppointment.vue";
import TheShop from "@/views/TheShop.vue";
import TheNews from "@/views/News.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/book",
    name: "BookAppointment",
    component: BookAppointment,
  },
  {
    path: "/shop",
    name: "Shop",
    component: TheShop,
  },
  {
    path: "/news",
    name: "News",
    component: TheNews,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // component: Dashboard
  },
  {
    path: "/settings",
    name: "Settings",
    // component: Settings
  },
  {
    path: "/purchase",
    name: "Purchase",
    // component: Purchase
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
