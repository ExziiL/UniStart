'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import IUser from '@/types/IUser';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React from 'react';

interface UserChatSingleMessageProps {
	user: IUser;
}

function UserChatSingleMessage({ user }: UserChatSingleMessageProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	function getMessageDate() {
		const date = new Date(user.messages![0].date);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		return `${hours}:${formattedMinutes}`;
	}

	return (
		<div
			className="w-fill transition-color mx-2 my-2 flex cursor-pointer gap-4 rounded-md px-3 py-3 transition-all hover:bg-zinc-100"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
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
						<div className="rounded-full bg-white p-[3px]">
							<div className="h-[10px] w-[10px] rounded-full bg-green-600 text-green-600"></div>
						</div>
					</div>
				)}
			</div>
			<div className="flex w-full flex-col gap-1">
				<div className="flex justify-between">
					<h2 className="font-medium">{user.name}</h2>
					<span className="text-zinc-400">{getMessageDate()}</span>
				</div>
				<div className="relative flex justify-between">
					<p className="line-clamp-1 text-zinc-500">{user.messages![0].text}</p>
					<AnimatePresence>
						{isHovered && (
							<motion.div
								initial={{ x: 8, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 8, opacity: 0 }}
								transition={{ duration: 0.1 }}
								className="right-0 bg-zinc-100 text-zinc-500"
							>
								<ChevronDown />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default UserChatSingleMessage;
