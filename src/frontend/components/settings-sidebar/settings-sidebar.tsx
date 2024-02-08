"use client";

import { Lock, Settings, User, Users } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

interface SidebarItem {
	icon: React.ReactElement;
	name: string;
	path: string;
}
interface SettingsSidebarProps {
	sidebarItems: SidebarItem[];
}

function SettingsSidebar() {
	const locale = useLocale();

	const sidebarItems: SidebarItem[] = [
		{
			icon: <Settings size={16} />,
			name: "General",
			path: `/${locale}/settings/general`,
		},
		{
			icon: <User size={16} />,
			name: "Profile",
			path: `/${locale}/settings/profile`,
		},
		{
			icon: <Lock size={16} />,
			name: "Privacy",
			path: `/${locale}/settings/privacy`,
		},
		{
			icon: <Users size={16} />,
			name: "Friends",
			path: `/${locale}/settings/friends`,
		},
	];

	const pathname = usePathname();

	return (
		<div className="h-full w-64 bg-muted p-4">
			<div className="mb-1 font-medium text-light">Settings</div>
			<div>
				<ul className="space-y-1">
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
								} flex cursor-pointer items-center space-x-2 rounded-md p-1 px-2 transition-colors hover:bg-zinc-200/60 dark:hover:bg-zinc-700`}
							>
								<div>{item.icon}</div>
								<div className="">{item.name}</div>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SettingsSidebar;
