"use client";

import { useUserContext } from "@/context/user-context/user-context";
import NewConversationUserChat from "@/frontend/components/new-conversation-user-chat";
import SingleUserConversation from "@/frontend/components/single-user-conversation";
import { Button } from "@/frontend/components/ui/button";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { Separator } from "@/frontend/components/ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/frontend/components/ui/sheet";
import * as action from "@/frontend/components/user-conversations/actions";
import { toast } from "@/frontend/hooks/use-toast";
import User from "@/types/IUser";
import { conversation, message } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Edit, Loader2, MessageSquarePlus, Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

interface UserConversationsMobileProps {
	setMessages: React.Dispatch<React.SetStateAction<message[]>>;
	setCurrentConversationId: React.Dispatch<React.SetStateAction<string>>;
	activeChat: string | undefined;
	setActiveChat: React.Dispatch<React.SetStateAction<string>>;
}

type ConversationObject = {
	receiver: User;
	conversation: conversation;
};

function UserConversationsMobile({
	setMessages,
	setCurrentConversationId,
	setActiveChat,
	activeChat,
}: UserConversationsMobileProps) {
	const { userState } = useUserContext();
	// const [activeChat, setActiveChat] = React.useState<string | undefined>(undefined);
	const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
	const [users, setUsers] = React.useState<Array<User> | []>([]);
	const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);
	const [conversations, setConversations] = React.useState<Array<ConversationObject> | []>([]);
	const [usersLoading, setUsersLoading] = React.useState<boolean>(true);
	const session = useSession();

	const handleUserClick = async (convoId: string, receiverId: string) => {
		const response = await action.fetchMessages(convoId);

		setActiveChat(receiverId);
		setMessages(response?.messages);
		setCurrentConversationId(convoId);
	};

	const handleNewUserClick = () => {
		console.log(selectedUsers);
		const conversation = action.createConversation(selectedUsers);
	};

	useEffect(() => {
		if (session.data && !shouldFetch && userState?.id?.length > 1) {
			setShouldFetch(true);
			// setSelectedUsers([userState.id]);
		}
	}, [userState, shouldFetch, session]);

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
			const randomDelay = Math.random() * 1500;

			setShouldFetch(false);
			setTimeout(() => {
				setUsersLoading(false);
				setConversations(getConversations.data?.conversations);
			}, randomDelay);
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
		<div className="flex w-full justify-end">
			<Sheet>
				<SheetTrigger
					asChild
					className="mr-4 mt-2 flex bg-background pr-4"
				>
					<Button
						className="flex flex-row items-center"
						variant="outline"
					>
						<Plus
							className="mr-2"
							size={18}
						/>
						New Conversation
					</Button>
					{/* <MessageSquarePlus
						size={24}
						strokeWidth={1.75}
					/> */}
				</SheetTrigger>
				<SheetContent>
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
										<SheetDescription>
											Select the person you want to start chatting.
										</SheetDescription>
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
							{conversations.length == 0 && (
								<div className="pt-4">There are currently no conversations.</div>
							)}
							{usersLoading && (
								<Loader2
									className="mt-8 w-full animate-spin text-ultra-light"
									size={32}
								/>
							)}
							{conversations.map((elem, index) => (
								<div
									key={index}
									onClick={() => handleUserClick(elem.conversation.id, elem.receiver.id)}
								>
									<SheetClose className="w-full">
										<SingleUserConversation
											user={elem.receiver}
											activeChat={activeChat}
										/>
									</SheetClose>
									{index !== conversations.length - 1 && (
										<div className="mx-4">
											<Separator />
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}

export default UserConversationsMobile;
