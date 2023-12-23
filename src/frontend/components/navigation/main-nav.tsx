'use client';

import NavAvatar from '@/frontend/components/navigation/nav-avatar';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from '@/frontend/components/ui/navigation-menu';
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

			<NavigationMenu>
				<Link
					href="/"
					legacyBehavior
					passHref
				>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
				</Link>

				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Components</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{navItems.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>

				<Link
					href="/ai-chat"
					legacyBehavior
					passHref
				>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Ai-Chat</NavigationMenuLink>
				</Link>
			</NavigationMenu>

			{/* ----------------------------------------------- */}

			{/* Diese div ist dafür da um die navigation items durch das "justify-between" zentral zu halten, deshalb nicht löschen! */}
			<NavAvatar />
		</div>
	);
};

export default MainNav;

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
