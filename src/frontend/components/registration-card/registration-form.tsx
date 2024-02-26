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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { register } from "./actions";

interface CustomResponse extends Response {
	userExists?: boolean;
}

export const registrationFormSchema = z
	.object({
		email: z.string().email(),
		username: z.string().min(3, { message: "Username must be at least 3 characters." }).max(20),
		password: z.string().min(8, { message: "Password must be at least 8 characters." }),
		confirmPassword: z.string(),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (password !== confirmPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Passwords do not match",
				path: ["confirmPassword"],
			});
		}
	});

function RegistrationForm() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [userExistsErr, setUserExistsErr] = React.useState(false);
	const [isError, setIsError] = React.useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof registrationFormSchema>>({
		resolver: zodResolver(registrationFormSchema),
		defaultValues: {
			email: "filler@email.com",
			username: "fillerUser",
			password: "fillerPassword",
			confirmPassword: "fillerPassword",
		},
	});

	async function onSubmit(values: z.infer<typeof registrationFormSchema>) {
		try {
			setIsLoading(true);
			const res = (await register("credentials", values)) as CustomResponse;

			if (res?.ok) {
				router.replace("/vorlesungen");
			} else if (res?.userExists) {
				setTimeout(() => {
					setUserExistsErr(true);
					setIsLoading(false);
				}, 1200);
			} else {
				setTimeout(() => {
					setIsError(true);
					setIsLoading(false);
				}, 1200);
			}
		} catch (error) {
			setIsLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="registration-form"
				className="space-y-4"
			>
				<FormField
					control={form.control}
					name="email"
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
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor={field.name}>Username</FormLabel>
							<FormControl>
								<Input
									{...field}
									id={field.name}
									placeholder="Username"
								/>
							</FormControl>
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
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor={field.name}>Confirm Password</FormLabel>
							<FormControl>
								<Input
									{...field}
									id={field.name}
									placeholder="Confirm Password"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>

			{userExistsErr && (
				<div
					className={`mt-6 border border-destructive bg-red-50 p-2 text-base text-red-900 dark:bg-red-950 dark:text-red-50 ${
						isLoading && "hidden"
					}`}
				>
					E-Mail or Username already in use. Please use another E-Mail or Username.
				</div>
			)}

			<Button
				type="submit"
				form="registration-form"
				className="mt-6 w-full bg-foreground/90"
				disabled={isLoading ? true : false}
			>
				{isLoading ? (
					<div className="flex flex-row items-center justify-center gap-1">
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Creating Account...
					</div>
				) : (
					<div>Get Started</div>
				)}
			</Button>
		</Form>
	);
}

export default RegistrationForm;
