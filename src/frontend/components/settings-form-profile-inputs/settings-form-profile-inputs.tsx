"use client";

import { useUserContext } from "@/context/user-context/user-context";
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
import { Textarea } from "@/frontend/components/ui/textarea";
import { toast } from "@/frontend/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
	firstName: z.string().min(3).max(32),
	lastName: z.string().min(3).max(32),
	email: z.string().email(),
	username: z.string().min(3).max(32),
	bio: z.string().max(256),
});

function ProfileFormInput() {
	const { userState } = useUserContext();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			// TODO: Hier muss der Username aus der Datenbank geladen werden
			username: userState.name,
			email: userState.email,
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-2"
			>
				<div className="grid grid-cols-10 grid-rows-5 gap-4">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem className="col-span-5 sm:col-span-4 lg:col-span-3">
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										// placeholder="shadcn"

										{...field}
									/>
								</FormControl>
								<FormDescription>This is your public display name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem className="col-span-5 row-start-2 sm:col-span-4 lg:col-span-3">
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem className="col-span-5 row-start-2 sm:col-span-4 lg:col-span-3">
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input
										// placeholder="Mustermann"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="col-span-5 row-start-3 sm:col-span-4 lg:col-span-3">
								<FormLabel>E-mail</FormLabel>
								<FormControl>
									<Input
										// placeholder="example@email.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="bio"
						render={({ field }) => (
							<FormItem className="col-span-10 row-span-2 row-start-4 sm:col-span-8 lg:col-span-6">
								<FormLabel>Bio</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Tell us a little bit about yourself"
										className="h-24"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

export default ProfileFormInput;
