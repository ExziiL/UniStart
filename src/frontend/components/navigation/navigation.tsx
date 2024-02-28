"use client";

import React from "react";

import { useUserContext } from "@/context/user-context/user-context";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

const Navigation = () => {
	const { userState } = useUserContext();

	const isUserStateEmpty = Object.keys(userState).length === 0;
	console.log("Is userState empty?", isUserStateEmpty);

	return (
		<>
			<header className="bg-backround/95 sticky top-0 z-50 w-full border-b bg-background shadow-lg shadow-zinc-200/35 dark:shadow-zinc-600/35">
				<div className="container flex h-14 items-center px-4  md:justify-center">
					<MainNav />
					<MobileNav />
				</div>
			</header>
			{isUserStateEmpty && (
				<div>You are currently not logged in. Please log in to get all the functionality.</div>
			)}
		</>
	);
};

export default Navigation;
