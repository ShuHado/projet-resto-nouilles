<template>
	<v-card max-width="344">
		<v-img :src="product.img" height="200px" cover></v-img>

		<v-card-title>{{ product.name }}</v-card-title>

		<v-card-subtitle>{{ product.price }} €</v-card-subtitle>

		<input type="number" min="1" v-model="quantity" />

		<v-card-actions>
			<v-btn
				color="orange-lighten-2"
				variant="text"
				@click="sendProductInfos(product.name, quantity)"
			>
				Ajouter au panier
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	emits: ["sendProductInfos"],
	props: {
		product: Object,
	},
	data() {
		return {
			quantity: 1,
		};
	},
	methods: {
		sendProductInfos(product_name, quantity) {
			const productInfos = {
				product: product_name,
				quantity: quantity,
			};
			this.$emit("sendProductInfos", productInfos);
			this.quantity = 1;
		},
	},
};
</script>
