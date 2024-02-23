"use client";

import { useUserContext } from "@/context/user-context/user-context";
import NewConversationUserChat from "@/frontend/components/new-conversation-user-chat";
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
import { toast } from "@/frontend/hooks/use-toast";
import User from "@/types/IUser";
import { conversation, message } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Edit } from "lucide-react";
import React, { useEffect } from "react";
import * as action from "./actions";

interface UserConversationsProps {
	setMessages: React.Dispatch<React.SetStateAction<message[]>>;
	setCurrentConversationId: React.Dispatch<React.SetStateAction<string>>;
}

type ConversationObject = {
	receiver: User;
	conversation: conversation;
};

function UserConversations({ setMessages, setCurrentConversationId }: UserConversationsProps) {
	const { userState } = useUserContext();
	const [activeChat, setActiveChat] = React.useState<string | undefined>(undefined);
	const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
	const [users, setUsers] = React.useState<Array<User> | []>([]);
	const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);
	const [conversations, setConversations] = React.useState<Array<ConversationObject> | []>([]);

	const handleUserClick = async (convoid: string) => {
		setActiveChat(convoid);
		const response = await action.fetchMessages(convoid);
		setMessages(response?.messages);
		setCurrentConversationId(convoid);
	};

	const handleNewUserClick = () => {
		console.log(selectedUsers);
		const conversation = action.createConversation(selectedUsers);
	};

	useEffect(() => {
		if (!shouldFetch && userState.id != "0") {
			setShouldFetch(true);
			setSelectedUsers([userState.id]);
		}
	}, [userState, shouldFetch]);

	const getUsers = useQuery({
		queryKey: ["getUsers"],
		queryFn: () => action.fetchUsers(userState.id),
		enabled: shouldFetch,
	});
	const getConversations = useQuery({
		queryKey: ["getConversations"],
		queryFn: () => action.fetchConversation(userState.id),
		enabled: shouldFetch,
	});

	useEffect(() => {
		if (getUsers.isPending) {
		}
		if (getUsers.isError) {
			toast({
				title: "Error getting users",
				description: getUsers.error.message,
			});
		}
		if (!getUsers.isError && getUsers.data) {
			setShouldFetch(false);
			setUsers(getUsers.data?.users);
		}
	}, [getUsers]);

	useEffect(() => {
		if (getConversations.isPending) {
		}
		if (getConversations.isError) {
			toast({
				title: "Error getting converstaions",
				description: getConversations.error.message,
			});
		}
		if (!getConversations.isError && getConversations.data) {
			setShouldFetch(false);
			setConversations(getConversations.data?.conversations);
		}
	}, [getConversations]);

	function handleUserSelection(id: string) {
		setSelectedUsers((prev) => {
			if (prev.includes(id)) {
				return prev.filter((user) => user !== id);
			} else {
				return [...prev, id];
			}
		});
	}

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
							<div>{selectedUsers}</div>
						</SheetHeader>

						<div className="flex h-full flex-col pb-12 pt-4">
							<ScrollArea className="w-full">
								{users.map((user, index) => (
									<div
										key={index}
										onClick={() => handleUserSelection(user.id)}
									>
										<NewConversationUserChat user={user} />
									</div>
								))}
								<ScrollBar orientation="vertical" />
							</ScrollArea>
							<div className="mt-8 flex w-full flex-row justify-end">
								<Button
									onClick={() => handleNewUserClick()}
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
				{conversations.map((elem, index) => (
					<div
						key={index}
						onClick={() => handleUserClick(elem.conversation.id)}
					>
						<SingleUserConversation
							user={elem.receiver}
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
