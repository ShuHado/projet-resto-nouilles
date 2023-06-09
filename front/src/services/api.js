import axios from "axios";
import { useStore } from "@/stores";

const instance = axios.create({
	baseURL: "https://noco-db-production-74ef.up.railway.app/api/v1/auth/user",
});

async function getUserRole(token) {
	try {
		let url = "/me?project_id=p_3swgq8qr700xaf";

		const response = await instance.get(url, {
			headers: {
				"xc-auth": token,
			},
		});

		return response.data;
	} catch (error) {
		return false;
	}
}

export async function login(email, password) {
	try {
		let url = "/signin";

		const response = await instance.post(url, {
			email: email,
			password: password,
		});

		console.log(response.data);

		const userToken = response.data.token;

		const user = await getUserRole(userToken);

		console.log(user);

		const role = user.roles;

		useStore().setToken(userToken);
		useStore().setRole(role);
	} catch (error) {
		useStore().setToken(null);
		return false;
	}
}
