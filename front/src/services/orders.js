import axios from "axios";
import { useStore } from "@/stores";

const instance = axios.create({
	baseURL:
		"https://noco-db-production-74ef.up.railway.app/api/v1/db/data/v1/restau-nouilles",
	headers: {
		"xc-auth": useStore().getToken,
	},
});

export async function createOrder(orderDetails) {
	try {
		const order = {
			details: JSON.stringify(orderDetails),
			processed: false,
		};

		const response = await instance.post("/orders", order);
		console.log(response);
	} catch (error) {
		return false;
	}
}
