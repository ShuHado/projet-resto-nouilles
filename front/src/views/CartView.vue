<script setup>
import { useStore } from "@/stores";
</script>

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

	<v-btn color="orange-lighten-2" @click="validateCommande"
		>Valider la commande</v-btn
	>

	<v-row justify="center">
		<v-dialog v-model="dialog" persistent width="auto">
			<v-card>
				<v-card-title class="text-h5">
					Supprimer ce produit de votre commande ?
				</v-card-title>
				<v-card-text>
					Êtes-vous sûr de vouloir supprimer ce produit de votre
					commande ?
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="green-darken-1"
						variant="text"
						@click="dialog = false"
					>
						Non
					</v-btn>
					<v-btn
						color="green-darken-1"
						variant="text"
						@click="removeDefinitivelyProduct"
					>
						Oui
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			commande: [],
			dialog: false,
			remove: null,
		};
	},
	async created() {
		this.commande = useStore().getCommande;
	},
	methods: {
		removeProduct(idx) {
			if (this.commande[idx].quantity > 1) {
				this.commande[idx].quantity--;
			} else {
				this.dialog = true;
				this.remove = idx;
			}
		},
		addProduct(idx) {
			this.commande[idx].quantity++;
		},
		removeDefinitivelyProduct() {
			this.dialog = false;
			this.commande = this.commande.filter(
				(product, idx) => idx !== this.remove
			);
		},
	},
};
</script>
