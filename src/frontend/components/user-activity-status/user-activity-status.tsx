import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import Image from 'next/image';
import React from 'react';

function UserActivityStatus() {
	return (
		<div className="flex gap-4">
			<div className="">
				<Avatar>
					<AvatarImage
						src="https://github.com/shadcn.png"
						alt="@shadcn"
					/>
					<AvatarFallback>Profile Picture</AvatarFallback>
				</Avatar>
			</div>
			<div>
				<h2 className=" font-medium">Angela Bower</h2>
				<div className="flex items-center gap-3">
					<div className="h-[10px] w-[10px] rounded-full bg-green-600 text-green-600"></div>
					<span className="text-sm text-zinc-400">Active Now</span>
				</div>
			</div>
		</div>
	);
}

export default UserActivityStatus;
