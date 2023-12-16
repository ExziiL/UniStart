import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/frontend/components/ui/dropdown-menu';
import { Archive, Trash2, User } from 'lucide-react';
import React from 'react';

interface UserChatUserActionsProps {
	children?: React.ReactNode;
	onClick?: () => void;
}

function UserChatUserActions({ children, ...props }: UserChatUserActionsProps) {
	return (
		<DropdownMenu {...props}>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40">
				<DropdownMenuLabel>Chat Settings</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer">
					<User className="mr-2 h-4 w-4" />
					<span>Report</span>
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer">
					<Trash2 className="mr-2 h-4 w-4" />
					<span>Archive</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer text-red-500 hover:text-red-600 focus:text-red-600 ">
					<Archive className="mr-2 h-4 w-4" />
					<span className="">Delete</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default UserChatUserActions;
