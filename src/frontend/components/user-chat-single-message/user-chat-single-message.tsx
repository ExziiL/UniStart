'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/frontend/components/ui/dropdown-menu';
import IUser from '@/types/IUser';
import { AnimatePresence, motion } from 'framer-motion';
import { Archive, ChevronDown, Trash2, User } from 'lucide-react';
import React from 'react';

interface UserChatSingleMessageProps {
	user: IUser;
	activeChat?: number;
}

function UserChatSingleMessage({ user, activeChat }: UserChatSingleMessageProps) {
	const [isHovered, setIsHovered] = React.useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);

	function getMessageDate() {
		const date = new Date(user.messages![0].date);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		return `${hours}:${formattedMinutes}`;
	}

	const handleChevronClick = (event: any) => {
		event.stopPropagation();
		setIsDropdownOpen((prevState) => !prevState);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsDropdownOpen(false);
		}
	};

	const handleDropdownItemClick = () => {
		setIsDropdownOpen(false);
	};

	React.useEffect(() => {
		if (isDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isDropdownOpen]);

	return (
		<div
			className={` w-fill mx-2 my-2 flex cursor-pointer gap-4 rounded-md px-3 py-3 transition-all hover:bg-muted ${
				activeChat === user.id ? 'bg-muted' : ''
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{user && (
				<div className="relative">
					<Avatar>
						<AvatarImage
							src={user.profile!.avatar}
							alt="@shadcn"
						/>
						<AvatarFallback>Profile Picture</AvatarFallback>
					</Avatar>
					{user.chatSettings.isOnline && (
						<div className="relative -right-1 -top-3 flex w-full justify-end">
							<div className="rounded-full bg-background p-[3px]">
								<div className="h-[10px] w-[10px] rounded-full bg-green-600 text-green-600"></div>
							</div>
						</div>
					)}
				</div>
			)}

			<div className="flex w-full flex-col gap-1">
				<div className="flex justify-between">
					<h2 className="font-medium">{user.name}</h2>
					<span className="text-primary-muted">{getMessageDate()}</span>
				</div>
				<div className="relative flex justify-between">
					<p className=" text-primary-muted line-clamp-1">{user.messages![0].text}</p>

					<AnimatePresence>
						{(isHovered || isDropdownOpen) && (
							<motion.div
								layout
								ref={dropdownRef}
								initial={{ x: 8, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 8, opacity: 0 }}
								transition={{ duration: 0.15 }}
								className="right-0 text-zinc-500"
							>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<ChevronDown onClick={handleChevronClick} />
									</DropdownMenuTrigger>
									{isDropdownOpen && (
										<DropdownMenuContent className="w-40">
											<DropdownMenuLabel>Chat Settings</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem
												onClick={handleDropdownItemClick}
												className="cursor-pointer"
											>
												<User className="mr-2 h-4 w-4" />
												<span>Report</span>
											</DropdownMenuItem>
											<DropdownMenuItem
												onClick={handleDropdownItemClick}
												className="cursor-pointer"
											>
												<Trash2 className="mr-2 h-4 w-4" />
												<span>Archive</span>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem
												onClick={handleDropdownItemClick}
												className="cursor-pointer text-red-500 hover:text-red-600 focus:text-red-600 "
											>
												<Archive className="mr-2 h-4 w-4" />
												<span className="">Delete</span>
											</DropdownMenuItem>
										</DropdownMenuContent>
									)}
								</DropdownMenu>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default UserChatSingleMessage;
