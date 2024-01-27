"use client";

import NewConversationUserOverview from "@/frontend/components/new-conversation-user-overview";
import SingleUserConversation from "@/frontend/components/single-user-conversation";
import { Button } from "@/frontend/components/ui/button";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { Separator } from "@/frontend/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/frontend/components/ui/sheet";
import { USERS } from "@/frontend/constants/users";
import { Edit } from "lucide-react";
import React from "react";

function UserConversations() {
	const [activeChat, setActiveChat] = React.useState<number | undefined>(undefined);

	const handleUserClick = (userId: number) => {
		console.log(userId, " clicked");
		setActiveChat(userId);
	};

	const handleNewUserClick = ({ id }: { id: number }) => {
		console.log("new user clicked with id: ", id);
	};

	return (
		<div className="bg-background">
			<div className="flex items-end justify-between p-4 pb-2 text-lg font-semibold">
				<h2 className="">Messages</h2>
				<Sheet>
					<SheetTrigger asChild>
						<div className="cursor-pointer text-primary-muted transition-colors hover:text-primary">
							<Edit />
						</div>
					</SheetTrigger>
					<SheetContent
						side={"left"}
						className=""
					>
						<SheetHeader>
							<SheetTitle>New Chat</SheetTitle>
							<SheetDescription>Select the person you want to start chatting.</SheetDescription>
						</SheetHeader>

						<div className="flex h-full flex-col pb-12 pt-4">
							<ScrollArea className="w-full">
								{/* {xxx.map((user, index) => (
									<NewConversationUserOverview
										key={index}
										user={user}
									/>
								))} */}
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<NewConversationUserOverview />
								<ScrollBar orientation="vertical" />
							</ScrollArea>
							<div className="mt-8 flex w-full flex-row justify-end">
								<Button
									onClick={() => handleNewUserClick({ id: 1 })}
									className="w-fit"
								>
									Add Chat
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>

			<div className="">
				{USERS.map((user, index) => (
					<div
						key={index}
						onClick={() => handleUserClick(user.uuid)}
					>
						<SingleUserConversation
							user={user}
							activeChat={activeChat}
						/>
						{/* <div>{user.id}</div> */}
						{index !== USERS.length - 1 && (
							<div className="mx-4">
								<Separator />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default UserConversations;
