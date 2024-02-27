import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar";
import { cn } from "@/lib/utils";
import IUser from "@/types/IUser";
import { ImageOff } from "lucide-react";
import React from "react";

interface NewConversationUserChatProps extends React.HTMLAttributes<HTMLDivElement> {
	// TODO: change any to user type
	user?: IUser;
}

// TODO: change static data to user data
function NewConversationUserChat({ user }: NewConversationUserChatProps) {
	const [isSelected, setIsSelected] = React.useState(false);

	return (
		<div
			className={`${
				isSelected ? "bg-ultra-light/15" : ""
			} my-1 flex w-full cursor-pointer flex-row gap-4 rounded-sm px-3 pt-4 hover:bg-ultra-light/10`}
			onClick={() => {
				setIsSelected(!isSelected);
			}}
		>
			<div className="relative">
				<Avatar>
					<AvatarImage
						src={user?.image}
						alt="@shadcn"
					/>
					<AvatarFallback>
						<ImageOff
							strokeWidth={1.5}
							size={20}
						/>
					</AvatarFallback>
				</Avatar>
				{user?.online && (
					// {
					<div className="relative -right-1 -top-3 flex w-full justify-end">
						<div className="rounded-full bg-background p-[3px]">
							<div
								className={cn("h-[10px] w-[10px] rounded-full", {
									"bg-green-600": user.online,
									"bg-red-600": !user.online,
								})}
							></div>
						</div>
					</div>
				)}
			</div>

			<div className="">
				<div className="font-medium">{user?.name}</div>
				{/* <div className="text-sm text-light">Informatik - Software Engineering</div> */}
			</div>
		</div>
	);
}

export default NewConversationUserChat;
