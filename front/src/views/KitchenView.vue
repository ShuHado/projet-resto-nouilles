<script setup>
import { getAllOrders } from "@/services/orders.js";
</script>

<template>
	<v-table>
		<thead>
			<tr>
				<th class="text-left">N° de commande</th>
				<th class="text-center">Status</th>
				<th class="text-center">Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(order, idx) in orders" :key="idx">
				<td>{{ order.Id }}</td>
				<td class="text-center">
					{{ order.processed ? "Complété" : "En cours" }}
				</td>
				<td class="text-center">
					<v-btn color="orange-lighten-2" class="mx-2">Details</v-btn>
					<v-btn color="orange-lighten-2" class="mx-2">Valider</v-btn>
				</td>
			</tr>
		</tbody>
	</v-table>
</template>

<script>
export default {
	data() {
		return {
			orders: [],
		};
	},
	async mounted() {
		let orders = await getAllOrders();
		this.orders = orders;
	},
};
</script>
