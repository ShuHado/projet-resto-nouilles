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

	<v-btn color="orange-lighten-2" @click="validateCommande">Valider la commande</v-btn>
</template>


