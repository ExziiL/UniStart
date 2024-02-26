"use client";

import { Button } from "@/frontend/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/frontend/components/ui/form";
import { Input } from "@/frontend/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginFormSchema = z.object({
	// TODO: Add valid checks -> Check if username exists in db and if password matches
	username: z.string().min(3, { message: "Please enter correct password" }).max(20),
	password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

function LoginForm() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [isError, setIsError] = React.useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			username: "filler@email.com",
			password: "fillerPassword",
		},
	});

	// TODO: Add loading state
	async function onSubmit(values: z.infer<typeof loginFormSchema>) {
		try {
			setIsLoading(true);
			const res = await signIn("credentials", {
				email: values.username,
				password: values.password,
				redirect: false,
			});

			if (res?.error) {
				console.log("Invalid credentials");
				setIsError(true);
				setIsLoading(false);
				return;
			}

			router.replace("/vorlesungen");
		} catch (error) {
			// console.log(error);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="login-form"
				className="space-y-4"
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor={field.name}>E-Mail</FormLabel>
							<FormControl>
								<Input
									{...field}
									id={field.name}
									placeholder="E-Mail"
								/>
							</FormControl>
							{/* <FormDescription>This is your public display name</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor={field.name}>Password</FormLabel>
							<FormControl>
								<Input
									{...field}
									id={field.name}
									placeholder="Password"
								/>
							</FormControl>
							{/* <FormDescription>This is your public display name</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>

			{isError && (
				<div
					className={`mt-6 border border-destructive bg-red-50 p-2 text-base text-red-900 dark:bg-red-950 dark:text-red-50 ${
						isLoading && "hidden"
					}`}
				>
					An Error occured, please try again.
				</div>
			)}

			<Button
				type="submit"
				form="login-form"
				className="mt-6 w-full bg-foreground/90"
				disabled={isLoading ? true : false}
			>
				{isLoading ? (
					<div className="flex flex-row items-center justify-center gap-1">
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Logging In...
					</div>
				) : (
					<div>Get Started</div>
				)}
			</Button>
		</Form>
	);
}

export default LoginForm;
