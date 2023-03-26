<script setup>
import { useStore } from "@/stores";
</script>

<template>
	<ul>
		<li v-for="(product, idx) in commande" :key="idx">
			<p>{{ product.product }}</p>
			<p>{{ product.quantity }}</p>
			<v-btn
				color="orange-lighten-2"
				icon="mdi-minus"
				@click="removeProduct(idx)"
			/>
			<v-btn
				color="orange-lighten-2"
				icon="mdi-plus"
				@click="addProduct(idx)"
			/>
		</li>
	</ul>

	<v-btn color="orange-lighten-2" @click="validateCommande"
		>Valider la commande</v-btn
	>
</template>

<script>
export default {
	data() {
		return {
			commande: [],
		};
	},
	async created() {
		this.commande = useStore().getCommande;
	},
	methods: {
		removeProduct(idx) {
			if (this.commande[idx].quantity > 1) {
				this.commande[idx].quantity--;
			}
		},
		addProduct(idx) {
			this.commande[idx].quantity++;
		},
	},
};
</script>
