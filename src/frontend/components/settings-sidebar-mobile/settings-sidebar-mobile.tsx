"use client";

import { Button } from "@/frontend/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/frontend/components/ui/sheet";
import { Lock, Menu, Settings, User, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const sidebarItems = [
	{
		icon: <Settings size={16} />,
		name: "General",
		path: "/settings/general",
	},
	{
		icon: <User size={16} />,
		name: "Profile",
		path: "/settings/profile",
	},
	{
		icon: <Lock size={16} />,
		name: "Privacy",
		path: "/settings/privacy",
	},
	{
		icon: <Users size={16} />,
		name: "Friends",
		path: "/settings/friends",
	},
];

function SettingsSidebarMobile() {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger className="absolute right-4 pt-6">
				<Menu strokeWidth={1.75} />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>
						<div className="mb-4 text-left font-medium text-light">Settings</div>
					</SheetTitle>
				</SheetHeader>
				<div>
					<ul className="space-y-4">
						{sidebarItems.map((item) => (
							<Link
								href={item.path}
								key={item.name}
							>
								<li
									className={`${
										pathname == item.path
											? "bg-zinc-200 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-700/60"
											: ""
									} my-2 flex cursor-pointer items-center space-x-2 rounded-md p-1 px-2 py-2 transition-colors hover:bg-zinc-200/60 dark:hover:bg-zinc-700`}
								>
									<div>{item.icon}</div>
									<div className="">{item.name}</div>
								</li>
							</Link>
						))}
					</ul>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default SettingsSidebarMobile;
