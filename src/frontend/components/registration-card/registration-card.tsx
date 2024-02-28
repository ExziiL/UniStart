"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/frontend/components/ui/button";
import { Separator } from "@/frontend/components/ui/separator";
import RegistrationForm from "./registration-form";

import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { register } from "./actions";

function RegistrationCard() {
	const router = useRouter();

	const handleGitHubRegistration = async () => {
		// console.log('github registration');
		try {
			const res = await register("github", null);

			if (res?.ok) {
				router.replace("vorlesungen");
				// console.log('Successfully registered')
			}
		} catch (error) {
			// console.log("Something went wrong\n" + error);
		}
	};

	const handleGoogleRegistration = async () => {
		// console.log('google registration');
		try {
			const res = await register("google", null);

			if (res?.ok) {
				router.replace("vorlesungen");
				// console.log('Successfully registered')
			}
		} catch (error) {
			// console.log("Something went wrong\n" + error);
		}
	};

	return (
		<div className="m-auto h-fit w-96 rounded-lg border p-6 text-primary">
			<h1 className="text-3xl font-semibold">Create an account</h1>
			<p className="mt-2 text-sm text-light">Enter your email below to create your account.</p>
			<div className="mt-6 flex w-full flex-row space-x-4">
				<Button
					variant="outline"
					className="w-full"
					onClick={() => handleGitHubRegistration()}
				>
					<FaGithub
						className="mr-2"
						size="20"
					/>
					GitHub
				</Button>
				<Button
					variant="outline"
					className="w-full"
					onClick={() => handleGoogleRegistration()}
				>
					<FcGoogle
						className="mr-2"
						size="20"
					/>
					Google
				</Button>
			</div>

			<Separator className="mb-6 mt-8">or continue with</Separator>

			<RegistrationForm />

			<p className="pt-4 text-xs text-light">
				Already have an account?{" "}
				<span className="cursor-pointer text-link hover:text-link/90 hover:underline">
					<Link href="/login">Log in here.</Link>
				</span>
			</p>
		</div>
	);
}

export default RegistrationCard;
