'use client';

import NavAvatar from '@/frontend/components/navigation/nav-avatar';
import navItems from '@/frontend/constants/nav-items';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MainNav = () => {
	const pathname = usePathname();

	return (
		<div className="hidden w-full max-w-[960px] justify-between md:flex">
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
						className={cn(
							'transition-colors hover:text-foreground/90',
							pathname === item.href ? 'text-foreground' : 'text-foreground/60'
						)}
					>
						{item.title}
					</Link>
				))}
			</nav>
			{/* Diese div ist dafür da um die navigation items durch das "justify-between" zentral zu halten, deshalb nicht löschen! */}
			<NavAvatar />
		</div>
	);
};

export default MainNav;
