'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from '@/frontend/components/ui/button';
import { Separator } from '@/frontend/components/ui/separator';
import RegistrationForm from './registration-form';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function RegistrationCard() {
	const handleGitHubRegistration = () => {
		console.log('github registration');
	};

	const handleGoogleRegistration = () => {
		console.log('google registration');
	};

	return (
		<div className="border m-4 rounded-lg w-96 p-6">
			<h1 className="font-semibold text-3xl">Create an account</h1>
			<p className="text-zinc-400 text-sm mt-2">Enter your email below to create your account.</p>
			<div className="flex flex-row w-full space-x-4 mt-6">
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

			<Separator className="mt-8 mb-6">or continue with</Separator>

			<RegistrationForm />

			<p className="text-xs pt-2">
				Already have an account?{' '}
				<span className="text-blue-400 cursor-pointer">
					<Link href="/login">Log in here.</Link>
				</span>
			</p>
		</div>
	);
}

export default RegistrationCard;
