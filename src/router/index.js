import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BookAppointment from "@/views/BookAppointment.vue";
import TheShop from "@/views/TheShop.vue";
import TheNews from "@/views/News.vue";
import LoginPage from "@/views/LoginPage.vue";
import Dashboard from '@/views/dashboard/DashboardLayout.vue';
import DashboardHome from '@/views/dashboard/Overview.vue';
import DashboardPurchase from '@/views/dashboard/Purchase.vue';
import DashboardSettings from '@/views/dashboard/Settings.vue';
import DashboardHairServicesLayout from '@/views/dashboard/hairServices/DashboardHairServicesLayout.vue'
import TestList                     from '@/views/dashboard/hairServices/TestList.vue'
import NewHairServiceForm           from '@/views/dashboard/hairServices/NewHairServiceForm.vue'


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
    path: '/dashboard',
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: '',               // przy /dashboard
        name: 'DashboardHome',
        component: DashboardHome,
      },
      {
        path: 'settings',       // przy /dashboard/settings
        name: 'DashboardSettings',
        component: DashboardSettings,
      },
      {
        path: 'purchase',       // przy /dashboard/purchase
        name: 'DashboardPurchase',
        component: DashboardPurchase,
      },
{
        path: 'hair-services',
        component: DashboardHairServicesLayout,
        children: [
          {
            path: '',              // /dashboard/hair-services
            name: 'HairServiceList',
            component: TestList,
          },
          {
            path: 'new',           // /dashboard/hair-services/new
            name: 'NewHairService',
            component: NewHairServiceForm,
          },
          // {
          //   path: ':id/edit',      // np. edycja
          //   name: 'EditHairService',
          //   component: () => import('@/views/hairServices/EditHairServiceForm.vue'),
          // },
        ]
      },

    ]
  },

  // fallback 404
  { path: '/:catchAll(.*)', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
