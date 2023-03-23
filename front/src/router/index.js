import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "login form",
			component: LoginView,
		},
		{
			path: "/terminal",
			name: "terminal view",
			component: TerminalView,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/kitchen",
			name: "kitchen view",
			component: KitchenView,
			meta: {
				requiresAuth: true,
			},
		},
	],
});

export default router;
