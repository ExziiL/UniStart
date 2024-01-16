import { Lock, Settings, User, Users } from "lucide-react";
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

function SettingsSidebar() {
	return (
		<div className="h-full w-64 bg-muted p-4">
			<h2 className="mb-1 font-medium text-light">Settings</h2>
			<div>
				<ul className="space-y-1">
					{sidebarItems.map((item) => (
						<li className="flex cursor-pointer items-center space-x-2 rounded-md p-1 px-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700">
							<div>{item.icon}</div>
							<div className="">{item.name}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SettingsSidebar;
