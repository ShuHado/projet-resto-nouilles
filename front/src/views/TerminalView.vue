<script setup>
import { getAllProducts } from "@/services/products.js";
import { useStore } from "@/stores";
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
	<ProductCard
		v-for="(product, idx) in products"
		:key="idx"
		:product="product"
		@sendProductInfos="updateCommande"
	/>
	<v-badge :content="commande.length">
		<v-btn
			color="orange-lighten-2"
			icon="mdi-cart"
			@click="goToCommandeDetail"
		/>
	</v-badge>
</template>

<script>
export default {
	data() {
		return {
			products: [],
			commande: [],
		};
	},
	async mounted() {
		const token = useStore().getToken;
		let products = await getAllProducts(token);
		products.forEach((product) => {
			//replace . with ,
			product.price = product.price.replace(".", ",");
		});
		this.products = products;
		this.commande = useStore().getCommande;
	},
	methods: {
		updateCommande(resp) {
			this.commande.push(resp);
		},
		goToCommandeDetail() {
			useStore().setCommande(this.commande);
			this.$router.push("/cart");
		},
	},
};
</script>
