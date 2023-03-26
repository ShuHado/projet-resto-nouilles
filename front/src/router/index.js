import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "@/stores";
import LoginView from "@/views/LoginView.vue";
import TerminalView from "@/views/TerminalView.vue";
import KitchenView from "@/views/KitchenView.vue";
import CartView from "@/views/CartView.vue";
import OrderDetailsView from "@/views/OrderDetailsView.vue";

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
		{
			path: "/kitchen/:id",
			name: "order details view",
			component: OrderDetailsView,
		},
		{
			path: "/cart",
			name: "cart view",
			component: CartView,
			meta: {
				requiresAuth: true,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !useStore().isAuthenticated) {
		next({ path: "/" });
	} else {
		next();
	}
});

export default router;
