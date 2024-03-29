import { User } from "next-auth";
import { signIn } from "next-auth/react";
import * as z from "zod";
import { registrationFormSchema } from "./registration-form";

export async function register(action: string, values: z.infer<typeof registrationFormSchema> | null) {
	let response;
	switch (action) {
		case "github":
		case "google":
			response = await signIn(action, { redirect: false });
			break;
		case "credentials":
			response = await emailRegister(values);
			await signIn(action,
				{
					username_email: values?.email,
					password: values?.password,
					redirect: false
				});
			break;
		default:
			console.error("Invalid action");
			break;
	}

	return response;
}

async function emailRegister(values: z.infer<typeof registrationFormSchema> | null) {
	if (!values) throw new Error("Invalid values");

	const userExists = await fetch(
		"/api-calls/register?" + new URLSearchParams({ email: values.email, name: values.username }),
		{
			method: "GET",
			headers: { "Content-Type": "application/json" },
		}
	);

	const { user } = await userExists.json();

	if (user) {
		console.error("user already exists");
		return { ok: false, userExists: true };
	}

	const response = await fetch("/api-calls/register", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			name: values.username,
			email: values.email,
			password: values.password,
		}),
	});

	if (response.ok) {
		const { user } = await response.json();

		await createNode(user);
	}
	return response;
}

export async function createNode(user: User, hostUrl = "") {
	const res = await fetch(hostUrl + "/api-calls/graph", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email: user?.email }),
	});

	if (!res.ok) {
		throw new Error("User Cretaion in Graph didn't work properly " + (await res.json()));
	}
}
