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
						:append-icon="'mdi-eye'"
						:type="showPassword ? 'text' : 'password'"
						name="input-10-1"
						label="Password"
						@click:append="showPassword = !showPassword"
						counter
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
		showPassword: false,
		email: "",
		password: "",
	}),
	methods: {
		async signin() {
			if (this.valid) {
				await login(this.email, this.password);
				if (
					useStore().getRole.owner ||
					useStore().getRole.creator ||
					useStore().getRole.super
				) {
					this.$router.push("/terminal");
				} else if (useStore().getRole.editor) {
					this.$router.push("/kitchen");
				} else {
					this.$router.push("/");
				}
			}
		},
	},
};
</script>
