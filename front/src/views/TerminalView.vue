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
	/>
</template>

<script>
export default {
	data() {
		return {
			products: [],
		};
	},
	async mounted() {
		const token = useStore().getToken;
		this.products = await getAllProducts(token);
	},
};
</script>
