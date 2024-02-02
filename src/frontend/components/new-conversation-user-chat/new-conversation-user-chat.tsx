import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar";
import IUser from "@/types/IUser";
import React from "react";

type NewConversationUserChatProps = {
	// TODO: change any to user type
	user?: IUser;
};

// TODO: change static data to user data
function NewConversationUserChat({ user }: NewConversationUserChatProps) {
	const [isSelected, setIsSelected] = React.useState(false);

	return (
		<div
			className={`${isSelected ? "bg-ultra-light/15" : ""
				} my-1 flex w-full cursor-pointer flex-row gap-4 rounded-sm px-3 pt-4 hover:bg-ultra-light/10`}
			onClick={() => setIsSelected(!isSelected)}
		>
			<div className="relative">
				<Avatar>
					<AvatarImage
						src={user?.image}
						alt="@shadcn"
					/>
					<AvatarFallback>Profile Picture</AvatarFallback>
				</Avatar>
				{/* {user.chatSettings.isOnline && ( */}
				{
					<div className="relative -right-1 -top-3 flex w-full justify-end">
						<div className="rounded-full bg-background p-[3px]">
							<div className="h-[10px] w-[10px] rounded-full bg-green-600 text-green-600"></div>
						</div>
					</div>
				}
			</div>

			<div className="">
				<div className="font-medium">{user?.name}</div>
				<div className="text-sm text-light">Informatik - Software Engineering</div>
			</div>
		</div>
	);
}

export default NewConversationUserChat;
