import axios from "axios";
import { useStore } from "@/stores";

const instance = axios.create({
	baseURL:
		"https://noco-db-production-74ef.up.railway.app/api/v1/db/data/v1/restau-nouilles",
});

export async function createOrder(orderDetails) {
	try {
		const order = {
			details: JSON.stringify(orderDetails),
			processed: false,
		};

		await instance.post("/orders", order, {
			headers: {
				"xc-auth": useStore().token,
			},
		});
	} catch (error) {
		return false;
	}
}

export async function getAllOrders() {
	try {
		const response = await instance.get("/orders?sort=processed", {
			headers: {
				"xc-auth": useStore().token,
			},
		});

		const orders = response.data.list;

		orders.forEach((order) => {
			order.details = JSON.parse(order.details);
		});

		return orders;
	} catch (error) {
		console.log(error);
		return false;
	}
}

export async function getOneOrder(id) {
	try {
		const response = await instance.get(`/orders/${id}`, {
			headers: {
				"xc-auth": useStore().token,
			},
		});

		const order = response.data;

		order.details = JSON.parse(order.details);

		return order;
	} catch (error) {
		console.log(error);
		return false;
	}
}

export async function updateOrder(id) {
	try {
		await instance.patch(
			`/orders/${id}`,
			{ processed: true },
			{
				headers: {
					"xc-auth": useStore().token,
				},
			}
		);
	} catch (error) {
		console.log(error);
		return false;
	}
}
