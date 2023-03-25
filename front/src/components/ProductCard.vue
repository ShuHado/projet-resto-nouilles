<template>
	<v-card class="mx-auto" max-width="344">
		<v-img :src="product.img" height="200px" cover></v-img>

		<v-card-title>{{ product.name }}</v-card-title>

		<v-card-subtitle>{{ product.price }} €</v-card-subtitle>

		<input type="number" v-model="quantity" />

		<v-card-actions>
			<v-btn
				color="orange-lighten-2"
				variant="text"
				@click="sendProductInfos(product.name, quantity)"
			>
				Commander
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	data() {
		return {
			quantity: 1,
		};
	},
};
</script>
