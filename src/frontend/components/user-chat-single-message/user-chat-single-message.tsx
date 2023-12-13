import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import React from 'react';

function UserChatSingleMessage() {
	return (
		<div className="w-fill m-4 flex gap-4 px-2 py-4">
			<div className="relative">
				<Avatar>
					<AvatarImage
						src="https://github.com/shadcn.png"
						alt="@shadcn"
					/>
					<AvatarFallback>Profile Picture</AvatarFallback>
				</Avatar>
				<div className="relative -right-1 -top-3 flex w-full justify-end">
					<div className="rounded-full bg-white p-[3px]">
						<div className="h-[10px] w-[10px] rounded-full bg-green-600 text-green-600"></div>
					</div>
				</div>
			</div>
			<div className="flex w-full flex-col gap-1">
				<div className="flex justify-between">
					<h2 className=" font-medium">Angela Bower</h2>
					<span className="text-zinc-400">3h ago</span>
				</div>
				<p className="line-clamp-2 text-zinc-500">
					Hi, mir geht's ganz gut, ich bin gerade in der Vorlesung. Wie geht's dir? An sich ganz okay, ich
					mochte nur etwas schauen.
				</p>
			</div>
		</div>
	);
}

export default UserChatSingleMessage;
