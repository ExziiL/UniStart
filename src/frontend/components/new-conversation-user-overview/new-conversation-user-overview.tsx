import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar";
import React from "react";

type NewConversationUserOverviewProps = {
	// TODO: change any to user type
	user?: any;
};

// TODO: change static data to user data
function NewConversationUserOverview({ user }: NewConversationUserOverviewProps) {
	const [isSelected, setIsSelected] = React.useState(false);

	return (
		<div
			className={`${
				isSelected ? "bg-ultra-light/15" : ""
			} my-1 flex w-full cursor-pointer flex-row gap-4 rounded-sm px-3 pt-4 hover:bg-ultra-light/10`}
			onClick={() => setIsSelected(!isSelected)}
		>
			<div className="relative">
				<Avatar>
					<AvatarImage
						src="https://github.com/shadcn.png"
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
				<div className="font-medium">Marcel Mueller</div>
				<div className="text-sm text-light">Informatik - Software Engineering</div>
			</div>
		</div>
	);
}

export default NewConversationUserOverview;
