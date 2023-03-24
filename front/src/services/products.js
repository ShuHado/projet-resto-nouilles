import axios from "axios";
// import { useStore } from "@/stores";

const instance = axios.create({
	baseURL:
		"https://noco-db-production-74ef.up.railway.app/api/v1/db/data/v1/restau-nouilles",
});

export async function getAllProducts(token) {
	try {
		const response = await instance.get("/products", {
			headers: {
				"xc-auth": token,
			},
		});
		console.log(response.data.list);

		return response.data.list;
	} catch (error) {
		return false;
	}
}
