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
	},
	methods: {
		updateCommande(resp) {
			this.commande.push(resp);
		},
	},
};
</script>
