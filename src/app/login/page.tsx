'use client';

import React from 'react';

import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

import Link from 'next/link';
import LoginForm from './login-form';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function Login() {
	const handleGitHubLogin = () => {
		console.log('github login');
	};

	const handleGoogleLogin = () => {
		console.log('google login');
	};

	return (
		<div className="border m-4 rounded-lg w-96 p-6">
			<h1 className="font-semibold text-3xl">Welcome back!</h1>
			<p className="text-zinc-400 text-sm mt-2">Enter your info to continue.</p>
			<div className="flex flex-row w-full space-x-4 mt-6">
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

			<Separator className="mt-8 mb-6">or continue with</Separator>

			<LoginForm />

			<p className="text-xs pt-2">
				First time here?{' '}
				<span className="text-blue-400 cursor-pointer">
					<Link href="/registration">Sign up for free.</Link>
				</span>
			</p>
		</div>
	);
}

export default Login;
