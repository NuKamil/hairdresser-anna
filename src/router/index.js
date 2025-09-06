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
import DashboardServicesLayout from '@/views/dashboard/services/DashboardServicesLayout.vue'
import TestList from '@/views/dashboard/services/TestList.vue'
import NewServiceForm from '@/views/dashboard/services/NewServiceForm.vue'


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
				path: 'services',
				component: DashboardServicesLayout,
				children: [
					{
						path: '',              // /dashboard/services
						name: 'ServiceList',
						component: TestList,
					},
					{
						path: 'new',           // /dashboard/services/new
						name: 'NewService',
						component: NewServiceForm,
					},
					// {
					//   path: ':id/edit',      // np. edycja
					//   name: 'EditService',
					//   component: () => import('@/views/services/EditServiceForm.vue'),
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
