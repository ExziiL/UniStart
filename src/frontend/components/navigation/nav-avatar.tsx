import ThemeToggle from "@/frontend/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/frontend/components/ui/dropdown-menu";
import { LogOut, Settings, SunMoon, User } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

async function handleLogOut() {
	await signOut();
}

function NavAvatar() {
	return (
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
						<Link href="/settings/profile">
							<DropdownMenuItem>
								<User className="mr-2 h-4 w-4" />
								<span>Profile</span>
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
						</Link>
						<Link href="/settings/general">
							<DropdownMenuItem>
								<Settings className="mr-2 h-4 w-4" />
								<span>Settings</span>
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
						</Link>
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
					<DropdownMenuItem onClick={handleLogOut}>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Log out</span>
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

export default NavAvatar;
