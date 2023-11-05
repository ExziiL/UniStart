'use client';

import { cn } from '@/lib/utils';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: { title: string; href: string; description: string }[] = [
	{
		title: 'Home',
		href: '/',
		description: 'Home page',
	},
	{
		title: 'Registration',
		href: '/registration',
		description: 'Registration page',
	},
	{
		title: 'Login',
		href: '/login',
		description: 'Login page',
	},
	{
		title: 'Terminkalender',
		href: '/terminplan',
		description: 'Übersicht aller wichtigen Termine der Hochschule',
	},
	{
		title: 'Vorlesungsübersicht',
		href: '/vorlesungsuebersicht',
		description: 'Übersicht aller Vorlesungen der ersten zwei Semester',
	},
	{
		title: 'Not Found',
		href: '/not-found',
		description: 'Übersicht aller wichtigen Termine der Hochschule',
	},
];

const MainNav = () => {
	const pathname = usePathname();

	return (
		<div className="hidden md:flex justify-between w-full max-w-[960px]">
			<Link
				href="/"
				className="mr-6 flex items-center space-x-2"
			>
				{/* <Icons.logo className="h-6 w-6" /> */}
				<span className="hidden font-bold sm:inline-block">LOGO</span>
			</Link>

			<nav className="flex items-center space-x-6 text-sm font-medium">
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={cn('transition-colors hover:text-foreground/90', pathname === item.href ? 'text-foreground' : 'text-foreground/60')}
					>
						{item.title}
					</Link>
				))}
			</nav>
			{/* Diese div ist dafür da um die navigation items durch das "justify-between" zentral zu halten, deshalb nicht löschen! */}
			<div> </div>
		</div>
	);
};

export default MainNav;
