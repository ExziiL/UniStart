"use client";

import React from "react";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/frontend/components/ui/sheet";

import { Separator } from "@/frontend/components/ui/separator";
import { cn } from "@/lib/utils";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import navItems from "@/frontend/components/navigation/nav-items";

const MobileNav = () => {
	const [open, setOpen] = React.useState(false);

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

				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
					<nav className="flex flex-col pr-8">
						{navItems.map(
							(item) =>
								item.href && (
									<>
										<MobileLink
											key={item.href + item.title}
											href={item.href}
											onOpenChange={setOpen}
											className="py-4 pl-2"
										>
											{item.title}
										</MobileLink>
										<Separator className="w-full" />
									</>
								)
						)}
					</nav>
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
