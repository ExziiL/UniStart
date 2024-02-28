"use client";

import React from "react";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import Link from "next/link";
import LoginForm from "./login-form";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginCard() {
	const router = useRouter();

	const handleGitHubLogin = async () => {
		console.log("github login");
		const res = await signIn("github");

		if (res?.ok) {
			router.replace("vorlesungen");
			console.log("Successfully logged in");
		}
	};

	const handleGoogleLogin = async () => {
		console.log("google login");
		const res = await signIn("google");

		if (res?.ok) {
			router.replace("vorlesungen");
			console.log("Successfully logged in");
		}
	};

	return (
		<div className="m-auto h-fit w-96 rounded-lg border border-border p-6 text-primary">
			<h1 className="text-3xl font-semibold">Welcome back!</h1>
			<p className="mt-2 text-sm text-light">Enter your info to continue.</p>
			<div className="mt-6 flex w-full flex-row space-x-4">
				<Button
					variant="outline"
					className="w-full"
					onClick={() => handleGitHubLogin()}
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
					onClick={() => handleGoogleLogin()}
				>
					<FcGoogle
						className="mr-2"
						size="20"
					/>
					Google
				</Button>
			</div>

			<Separator className="mb-6 mt-8">or continue with</Separator>

			<LoginForm />

			<p className="pt-4 text-xs">
				First time here?{" "}
				<span className="cursor-pointer text-link hover:text-link/90 hover:underline">
					<Link href="/registration">Sign up for free.</Link>
				</span>
			</p>
		</div>
	);
}

export default LoginCard;
