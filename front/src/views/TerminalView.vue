<script setup>
import { getAllProducts } from "@/services/products.js";
import { useStore } from "@/stores";
</script>

<template>
	<div v-for="(product, idx) in products" :key="idx">
		<h1>{{ product.name }}</h1>
		<h2>{{ product.price }} €</h2>
		<img :src="product.img" alt="" />
		<p>{{ product.categorie.name }}</p>
	</div>
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
