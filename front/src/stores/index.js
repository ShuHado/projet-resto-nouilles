import { defineStore } from "pinia";

export const useStore = defineStore("store", {
	// state
	state: () => ({ token: null, role: null }),
	// getters
	getters: {
		getToken() {
			return this.token;
		},
		getRole() {
			return this.role;
		},
		isAuthenticated() {
			return this.token ? true : false;
		},
	},
	// actions
	actions: {
		setToken(token) {
			this.token = token;
		},
		setRole(role) {
			this.role = role;
		},
	},
});
