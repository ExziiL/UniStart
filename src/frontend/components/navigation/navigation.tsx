"use client";

import { useUserContext } from "@/context/user-context/user-context";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

const Navigation = () => {
	const { userState } = useUserContext();
	const session = useSession();

	const isUserStateEmpty = Object.keys(userState).length === 0;

	const [showNotLoggedInMessage, setShowNotLoggedInMessage] = React.useState(false);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowNotLoggedInMessage(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);
	const NotLoggedIn = () => {
		return (
			showNotLoggedInMessage &&
			(session.status !== "authenticated" || isUserStateEmpty || userState.name === "") && (
				<motion.div
					initial={{ y: -40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -40, opacity: 0 }}
					transition={{ type: "spring", stiffness: 100, damping: 15 }}
					layout
				>
					<div className="absolute flex h-12 w-full flex-row items-center justify-center border-b border-red-100 bg-red-100/65 p-2 text-sm text-light shadow-sm shadow-red-200/25 dark:border-red-900/30 dark:bg-red-800/15 dark:shadow-red-600/25">
						<div>
							You are currently not logged in. Please{" "}
							<span className="pr-1 text-link hover:cursor-pointer hover:underline">
								<Link href="/login">Log In</Link>
							</span>
							or
							<span className="px-1 text-link hover:cursor-pointer hover:underline">
								<Link href="/registration">Sign Up</Link>
							</span>
							to unlock all the functionality.
						</div>
					</div>
				</motion.div>
			)
		);
	};

	return (
		<>
			<header className="bg-backround/95 sticky top-0 z-50 w-full border-b bg-background shadow-lg shadow-zinc-200/35 dark:shadow-zinc-600/35">
				<div className="container flex h-14 items-center px-4  md:justify-center">
					<MainNav />
					<MobileNav />
				</div>
			</header>

			<NotLoggedIn />
		</>
	);
};

export default Navigation;
