<template>
	<v-table>
		<thead>
			<tr>
				<th></th>
				<th class="text-left">Produit</th>
				<th class="text-center">Quantité</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(product_object, idx) in order.details" :key="idx">
				<td>{{ idx }}</td>
				<td class="text-center">{{ product_object.product }}</td>
				<td class="text-center">{{ product_object.quantity }}</td>
			</tr>
		</tbody>
	</v-table>
</template>
