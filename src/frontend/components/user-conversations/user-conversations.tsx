"use client";

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
import User from "@/types/IUser";
import { Edit } from "lucide-react";
import React, { useEffect } from "react";
import { useQuery } from '@tanstack/react-query'
import { toast } from "@/frontend/hooks/use-toast";
import userReducer from "@/reducer/user-reducer";
import { useUserContext } from "@/context/user-context/user-context";

const fetchData = async (id: string | number) => {

	const response = await fetch('api/conversationusers', {
		method: 'POST',
		headers: { 'Content-Type': 'application' },
		body: JSON.stringify(id)
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return await response.json();
}

function UserConversations() {
	const { userState } = useUserContext();
	const [activeChat, setActiveChat] = React.useState<string | undefined>(undefined);
	const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
	const [users, setUsers] = React.useState<Array<User> | []>([]);
	const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);



	const handleUserClick = (userId: string) => {
		// console.log(userId, " clicked");
		setActiveChat(userId);
		console.log(userState);
	};

	const handleNewUserClick = () => {
		console.log(selectedUsers);

		// console.log("new user clicked with id: ", id);		
	};

	useEffect(() => {
		if (!shouldFetch && userState.id !== '0') {
			setShouldFetch(true);
		}
	}, [userState])

	const { isPending, isError, error, data } = useQuery({ queryKey: ['getUsers'], queryFn: () => fetchData(userState.id), enabled: shouldFetch });

	useEffect(() => {
		if (isPending) { }
		if (isError) {
			toast({
				title: 'Error getting users',
				description: error.message,
			});
		}
		if (!isError && data) {
			setUsers(data?.users);
			setShouldFetch(false);
		};
	}, [isPending, isError]);

	function handleUserSelection(id: string) {
		setSelectedUsers((prev) => {
			if (prev.includes(id)) {
				return prev.filter((user) => user !== id);
			} else {
				return ([...prev, id]);
			}
		})

		console.log(selectedUsers);

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
										onClick={() => handleUserSelection(user.id)}>
										<NewConversationUserChat
											user={user}
										/>
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
				{USERS.map((user, index) => (
					<div
						key={index}
						onClick={() => handleUserClick(user.id)}
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
