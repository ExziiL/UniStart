'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/frontend/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/frontend/components/ui/form';
import { Input } from '@/frontend/components/ui/input';
import { useToast } from '@/frontend/hooks/use-toast';
import { register} from './actions';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export const registrationFormSchema = z
	.object({
		email: z.string().email(),
		username: z.string().min(3, { message: 'Username must be at least 3 characters.' }).max(20),
		password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
		confirmPassword: z.string(),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (password !== confirmPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Passwords do not match',
				path: ['confirmPassword'],
			});
		}
	});

function RegistrationForm() {
	const { toast } = useToast();
	const router = useRouter();
	const session = useSession();

	const form = useForm<z.infer<typeof registrationFormSchema>>({
		resolver: zodResolver(registrationFormSchema),
		defaultValues: {
			email: 'filler@email.com',
			username: 'fillerUser',
			password: 'fillerPassword',
			confirmPassword: '',
		},
	});

	// TODO: Add loading state
	async function onSubmit(values: z.infer<typeof registrationFormSchema>) {
		console.log('form submitted', values);
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>
			),
		});

		try {
			const res = await register('credentials', values);
	
			if (res?.ok) {
				//await registerGraph(session.data, router)
			}			
		} catch (error) {
			console.log("Something went wrong\n"+ error);
			
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
							{/* <FormDescription>This is you E-Mail</FormDescription> */}
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
				/>{' '}
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
							{/* <FormDescription>This is your public display name</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
			<Button
				type="submit"
				form="registration-form"
				className="mt-6 w-full"
			>
				Create account
			</Button>
		</Form>
	);
}

export default RegistrationForm;
