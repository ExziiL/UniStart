"use client";

import { pusherClient } from "@/backend/lib/pusher";
import { useUserContext } from "@/context/user-context/user-context";
import ChatMessage from "@/frontend/components/chat-message";
import MessageInput from "@/frontend/components/message-input";
import { cn } from "@/lib/utils";
import { message } from "@prisma/client";
import { find } from "lodash";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface UserChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	messages: message[] | [];
	conversationid: string;
	setMessages: React.Dispatch<React.SetStateAction<message[]>>;
}

function UserChatBox({ children, className, setMessages, ...props }: UserChatBoxProps) {
	const { userState } = useUserContext();

	React.useEffect(() => {
		pusherClient.subscribe(props.conversationid);

		const messageHandler = (message: message) => {
			console.log(message);

			setMessages((current: message[]) => {
				if (find(current, { id: message.id })) {
					return current;
				}
				return [...current, message];
			});
		};

		pusherClient.bind("new:message", messageHandler);

		return () => {
			pusherClient.unsubscribe(props.conversationid);
			pusherClient.unbind("new:message", messageHandler);
		};
	}, [props.conversationid, setMessages]);

	return (
		<div
			className={cn(`flex h-full flex-col justify-center p-2 md:p-4`, className)}
			style={{ height: "100%" }}
			{...props}
		>
			{children}

			{/* <div className="flex flex-col gap-6"> */}
			<div className="flex flex-col gap-6">
					<div className="flex h-[calc(100vh-195px)] flex-col justify-end gap-6">
						<ScrollArea className="h-max">
							<div className="flex flex-col gap-6">
								{props.messages?.map((message, index) => (
									<ChatMessage
										key={message.id}
										messageData={message}
										variant={message.senderid == userState.id ? "outgoing" : "incoming"}
									></ChatMessage>
								))}
							</div>
							<ScrollBar orientation="vertical" />
						</ScrollArea>
						<MessageInput conversationid={props.conversationid} />
					</div>
				 
			</div>
		</div>
	);
}

export default UserChatBox;
