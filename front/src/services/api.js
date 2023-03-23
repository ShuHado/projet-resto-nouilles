import axios from "axios";
import { useStore } from "@/stores";

const instance = axios.create({
	baseURL: "https://noco-db-production-74ef.up.railway.app",
});

export async function login(email, password) {
	try {
		let url = "/api/v1/auth/user/signin";

		const response = await instance.post(url, {
			email: email,
			password: password,
		});

		console.log(response.data);

		const userToken = response.data.token;

		useStore().setToken(userToken);
	} catch (error) {
		useStore().setToken(null);
		return false;
	}
}
