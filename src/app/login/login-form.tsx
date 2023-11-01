'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/frontend/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/frontend/components/ui/form';
import { Input } from '@/frontend/components/ui/input';
import { useToast } from '@/frontend/components/ui/use-toast';

const loginFormSchema = z.object({
	// TODO: Add valid checks -> Check if username exists in db and if password matches
	username: z.string().min(3, { message: 'Please enter correct password' }).max(20),
	password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

function LoginForm() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			username: 'fillerUser',
			password: 'fillerPassword',
		},
	});

	// TODO: Add loading state
	function onSubmit(values: z.infer<typeof loginFormSchema>) {
		console.log('form submitted', values);
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>
			),
		});
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
							<FormLabel htmlFor={field.name}>Username</FormLabel>
							<FormControl>
								<Input
									{...field}
									id={field.name}
									placeholder="Username"
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
			<Button
				type="submit"
				form="login-form"
				className="w-full mt-6"
			>
				Login
			</Button>
		</Form>
	);
}

export default LoginForm;
