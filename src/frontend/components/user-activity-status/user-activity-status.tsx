import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar";
import { cn } from "@/lib/utils";
import User from "@/types/IUser";
import React from "react";

interface UserActivityStatusProps {
	selectedUser: User | undefined;
}

function UserActivityStatus({ selectedUser }: UserActivityStatusProps) {
	if (!selectedUser) return;

	return (
		<div className="flex gap-4">
			<div className="">
				<Avatar>
					<AvatarImage
						src={selectedUser.image}
						alt="User Image"
					/>
					<AvatarFallback>{selectedUser.name}</AvatarFallback>
				</Avatar>
			</div>
			<div>
				<h2 className=" font-medium">{selectedUser.name}</h2>
				<div className="flex items-center gap-3">
					<div
						className={cn("h-[10px] w-[10px] rounded-full", {
							"bg-green-600 text-green-600": selectedUser.online,
							"bg-red-600 text-red-600": !selectedUser.online,
						})}
					></div>
					<span className="text-sm text-zinc-400">{selectedUser.online ? "Active Now" : "Offline"}</span>
				</div>
			</div>
		</div>
	);
}

export default UserActivityStatus;
