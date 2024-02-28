"use client";

import NavAvatar from "@/frontend/components/navigation/nav-avatar";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/frontend/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Bird, Library } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const MainNav = () => {
	const session = useSession();

	return (
		<div className="hidden w-full max-w-[1024px] justify-between md:flex">
			<Link
				href="/"
				className="mr-6 flex items-center space-x-2"
			>
				{/* <Icons.logo className="h-6 w-6" /> */}
				<span className="hidden font-bold sm:inline-block">
					<Bird
						size={32}
						strokeWidth={1.5}
					/>
				</span>
			</Link>

			<NavigationMenu className="flex gap-2">
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
							<ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none transition-colors hover:bg-muted/70 focus:shadow-md"
											href="/vorlesungen"
										>
											<Library className="h-6 w-6" />
											<div className="mb-2 mt-4 text-lg font-medium">Course Overview</div>
											<p className="text-sm leading-tight text-muted-foreground">
												A comprehensive overview of courses, allowing students to easily
												navigate through the academic offerings and plan their semester
												effectively.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem
									href="/terminplan"
									title="Schedule"
								>
									A concise summary of all key dates and deadlines.
								</ListItem>
								<ListItem
									href="/faq"
									title="FAQ"
								>
									Find answers on navigating university life effectively.
								</ListItem>
								<ListItem
									href="ai-chat"
									title="Ai-Chat"
								>
									Engage with our smart AI-driven chat system.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<Link
						href="/chat"
						legacyBehavior
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Chat</NavigationMenuLink>
					</Link>
				</NavigationMenuList>

				{/* Alle Routen */}
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>All Routes</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="p-4 pb-0 text-sm text-light">
								Diese Seite dient für eine bessere Navigation während der Bewertungsphase.
							</div>
							<ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-[.75fr_1fr] lg:w-[500px]">
								<ListItem
									href="/"
									title="Home"
								>
									/
								</ListItem>
								<ListItem
									href="/login"
									title="Login"
								>
									/login
								</ListItem>
								<ListItem
									href="/registration"
									title="Registration"
								>
									/registration
								</ListItem>
								<ListItem
									href="/settings"
									title="Settings"
								>
									/settings
								</ListItem>
								<ListItem
									href="/not-found"
									title="404-Page"
								>
									/not-found
								</ListItem>
								<ListItem
									href="/terminplan"
									title="Schedule"
								>
									/terminplan
								</ListItem>
								<ListItem
									href="/vorlesungen"
									title="Courses"
								>
									/vorlesungen
								</ListItem>
								<ListItem
									href="/vorlesungen/grundlagen-der-mathematik"
									title="Detailed Course"
								>
									/vorlesungen/grundlagen-der-mathematik
								</ListItem>
								<ListItem
									href="/faq"
									title="FAQ"
								>
									/faq
								</ListItem>
								<ListItem
									href="/chat"
									title="Chat"
								>
									/chat
								</ListItem>
								<ListItem
									href="/ai-chat"
									title="Ai-Chat"
								>
									/ai-chat
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			{/* ----------------------------------------------- */}

			{/* Diese div ist dafür da um die navigation items durch das "justify-between" zentral zu halten, deshalb nicht löschen! */}
			{session.data ? <NavAvatar /> : <div></div>}
		</div>
	);
};

export default MainNav;

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
ListItem.displayName = "ListItem";
