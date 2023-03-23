<script setup>
import { useStore } from "@/stores";
import { login } from "@/services/api.js";
</script>

<template>
	<v-form @submit.prevent="signin" v-model="valid">
		<v-container>
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="email"
						label="E-mail"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field
						v-model="password"
						label="Password"
						required
					></v-text-field>
				</v-col>
			</v-row>
		</v-container>
		<v-btn type="submit" block class="mt-2">Submit</v-btn>
	</v-form>
</template>

<script>
export default {
	data: () => ({
		valid: false,
		email: "",
		password: "",
	}),
	methods: {
		signin() {
			if (this.valid) {
				// useStore().dispatch("auth/signin", {
				// 	email: this.email,
				// 	password: this.password,
				// });
				login(this.email, this.password);
			}
		},
	},
};
</script>
