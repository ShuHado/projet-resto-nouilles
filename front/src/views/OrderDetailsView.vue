<script setup>
import { getOneOrder } from "@/services/orders.js";
</script>

<template>
	<v-table>
		<thead>
			<tr>
				<th>#</th>
				<th class="text-center">Produit</th>
				<th class="text-center">Quantité</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(product_object, idx) in order.details" :key="idx">
				<td>{{ idx + 1 }}</td>
				<td class="text-center">{{ product_object.product }}</td>
				<td class="text-center">{{ product_object.quantity }}</td>
			</tr>
		</tbody>
	</v-table>
</template>

<script>
export default {
	data() {
		return {
			order: {},
		};
	},
	async mounted() {
		const order_id = this.$route.params.id;
		let order = await getOneOrder(order_id);
		this.order = order;
	},
};
</script>
