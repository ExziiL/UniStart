'use client';

import ThemeToggle from '@/frontend/components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/frontend/components/ui/dropdown-menu';
import navItems from '@/frontend/constants/nav-items';
import { cn } from '@/lib/utils';
import { LogOut, Settings, SunMoon, User } from 'lucide-react';
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
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<User className="mr-2 h-4 w-4" />
								<span>Profile</span>
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Settings className="mr-2 h-4 w-4" />
								<span>Settings</span>
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<SunMoon className="mr-2 h-4 w-4" />
							<span>Dark Mode</span>
							<DropdownMenuShortcut>
								<ThemeToggle />
							</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<LogOut className="mr-2 h-4 w-4" />
							<span>Log out</span>
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default MainNav;
