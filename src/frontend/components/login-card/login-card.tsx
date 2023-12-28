'use client';

import React from 'react';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

import Link from 'next/link';
import LoginForm from './login-form';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function LoginCard() {
	const handleGitHubLogin = () => {
		console.log('github login');
	};

	const handleGoogleLogin = () => {
		console.log('google login');
	};

	return (
		<div className="m-4 w-96 rounded-lg border border-border p-6 text-primary">
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

			<p className="pt-2 text-xs">
				First time here?{' '}
				<span className="cursor-pointer text-link hover:text-link/90">
					<Link href="/registration">Sign up for free.</Link>
				</span>
			</p>
		</div>
	);
}

export default LoginCard;
