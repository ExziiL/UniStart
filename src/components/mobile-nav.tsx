'use client';

import React from 'react';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';
import { ViewVerticalIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

const MobileNav = () => {
	const [open, setOpen] = React.useState(false);

	const sideBarItems: { title: string; href: string; description: string }[] = [
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
			title: 'Not Found',
			href: '/not-found',
			description: 'Übersicht aller wichtigen Termine der Hochschule',
		},
	];

	return (
		<Sheet
			open={open}
			onOpenChange={setOpen}
		>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
				>
					<ViewVerticalIcon className="h-5 w-5" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="pr-0"
			>
				<MobileLink
					href="/"
					className="flex items-center"
					onOpenChange={setOpen}
				>
					{/* <Icons.logo className="mr-2 h-4 w-4" /> */}
					<span className="font-bold">LOGO</span>
				</MobileLink>

				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
					<div className="flex flex-col space-y-3">
						{sideBarItems.map(
							(item) =>
								item.href && (
									<MobileLink
										key={item.href + item.title}
										href={item.href}
										onOpenChange={setOpen}
									>
										{item.title}
									</MobileLink>
								)
						)}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</Link>
	);
}
